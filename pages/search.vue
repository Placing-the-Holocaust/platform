<template>
  <div class="search-page">
    <h1 class="page-title">Search Transcripts</h1>

    <div class="search-container">
      <!-- Left Column: Search Menu -->
      <div class="search-menu">
        <h2 class="menu-title">Search Menu</h2>

        <div v-if="loading" class="loading-indicator">
          Loading filter data...
        </div>

        <SearchForm
          v-if="!loading"
          :genders="genders"
          :countries="countries"
          :experienceGroups="experienceGroups"
          :birthYears="birthYears"
          :placeLabelOptions="placeLabelOptions"
          @search-submitted="onSearchFormSubmitted"
        />
      </div>

      <!-- Right Column: Results -->
      <div class="results-container">
        <div v-if="results.length" class="results-table-wrapper">
          <h2>Results ({{ results.length }})</h2>
          <table>
            <thead>
              <tr>
                <th>RG</th>
                <th>Full Name</th>
                <th>Birth Year</th>
                <th>Gender</th>
                <th>Country</th>
                <th>Experience Group</th>
                <th>Text</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in results" :key="idx">
                <td>{{ row.rg }}</td>
                <td>{{ row.full_name }}</td>
                <td>{{ row.birth_year }}</td>
                <td>{{ row.gender }}</td>
                <td>{{ row.country }}</td>
                <td>{{ row.experience_group }}</td>
                <td>{{ row.text }}</td>
                <td>{{ row.score }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="searched && !results.length" class="no-results">
          <p>No results found.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'

export default {
  name: "SearchPage",
  components: { SearchForm },
  data() {
    return {
      loading: true,
      searched: false,
      results: [],

      // Filters for the standard (gender, country, etc.)
      genders: [],
      countries: [],
      experienceGroups: [],
      birthYears: [],

      // Place label -> Weaviate property mapping
      // user picks "Countries" => property "COUNTRY"
      placeLabelMap: {
        "Regions": "REGION",
        "Countries": "COUNTRY",
        "Populated Places": "POPULATED_PLACE",
        "Environmental Features": "ENV_FEATURES",
        "Distinct Landscape Features": "DLF",
        "Buildings": "BUILDING",
        "Interior Spaces": "INT_SPACE",
        "Spatial Objects": "SPATIAL_OBJECT",
        "Imaginary Places": "NPIP"
      },

      // The options your form can display
      placeLabelOptions: [
        { label: "Regions" },
        { label: "Countries" },
        { label: "Populated Places" },
        { label: "Environmental Features" },
        { label: "Distinct Landscape Features" },
        { label: "Buildings" },
        { label: "Interior Spaces" },
        { label: "Spatial Objects" },
        { label: "Imaginary Places" }
      ]
    }
  },

  async created() {
  try {
    // Step 1: Decide basePath depending on dev vs. production
    const basePath = process.env.NODE_ENV === 'production' ? '/platform' : '';

    // Step 2: Construct the path for filters.json
    const filterPath = `${basePath}/data/filters.json`;

    // Step 3: Fetch the filters JSON file
    const resp = await fetch(filterPath);
    const filterData = await resp.json();

    // Step 4: Assign data to the component state
    this.genders = filterData.genders || [];
    this.countries = filterData.countries || [];
    this.experienceGroups = filterData.experience_groups || [];
    this.birthYears = filterData.birth_years || [];

    // Step 5: Set loading state to false
    this.loading = false;
  } catch (err) {
    console.error("Failed to load filters.json", err);
    this.loading = false;
  }
},

  methods: {
    async onSearchFormSubmitted(formData) {
      this.searched = true
      console.log("Search form data:", formData)

      try {
        // Perform the Weaviate query
        const results = await this.doWeaviateQuery(formData)
        this.results = results
      } catch (err) {
        console.error("Error during Weaviate query:", err)
        this.results = []
      }
    },

    /**
     * Generate embedding using Hugging Face API
     * Using the "sentence-transformers/all-MiniLM-L6-v2" model
     */
    async generateEmbedding(queryText) {
      if (!queryText) {
        // If there's no query text, skip generating an embedding
        return []
      }

      const apiKey = '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'
      const model = 'sentence-transformers/all-MiniLM-L6-v2'

      const payload = {
        inputs: queryText
      }

      try {
        const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })

        if (!response.ok) {
          throw new Error(`Hugging Face API error: ${response.status}`)
        }

        const data = await response.json()
        // Usually returns [ {embedding: [...]} ] for sentence-transformers
        if (!Array.isArray(data) || !data[0]?.embedding) {
          throw new Error(`Unexpected HF response format: ${JSON.stringify(data)}`)
        }
        return data[0].embedding
      } catch (error) {
        console.error('Error generating embedding. Continuing without embeddings.', error)
        return []
      }
    },

    /**
     * doWeaviateQuery - Orchestrates the entire process:
     * 1) Generate the embedding from Hugging Face
     * 2) Build the GraphQL query using nearVector
     * 3) Send query to Weaviate
     */
    async doWeaviateQuery(formData) {
      const queryText = formData.queryText || ''

      // 1) Attempt to generate the embedding
      const queryVector = await this.generateEmbedding(queryText)
      console.log('Embedding length:', queryVector.length)

      // 2) Build the GraphQL query
      const gqlQuery = this.buildGraphQLQuery(formData, queryVector)

      // 3) Send query to Weaviate
      const WEAVIATE_URL = 'http://acg-floating-204-197-5-43.acg.maine.edu:8080/v1/graphql'
      const WEAVIATE_API_KEY = 'wNIf2XunX2THHTK6y1aDEr0lyj0FFv4x6KqT'

      console.log("GraphQL Query:", gqlQuery)

      try {
        const resp = await fetch(WEAVIATE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${WEAVIATE_API_KEY}`,
          },
          body: JSON.stringify({ query: gqlQuery })
        })

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`)
        }

        const json = await resp.json()
        console.log("Weaviate Response:", json)

        const testimonies = json.data?.Get?.HolocaustTestimonies || []

        // Calculate scores if distance is present
        testimonies.forEach(t => {
          if (t._additional?.distance !== undefined) {
            t.score = parseFloat((1 - t._additional.distance).toFixed(3))
          }
        })

        return testimonies
      } catch (err) {
        console.error("Weaviate query error:", err)
        return []
      }
    },

    /**
     * buildGraphQLQuery - builds the query with optional nearVector and place categories
     */
    buildGraphQLQuery(formData, queryVector) {
      const whereClause = this.buildWhereClause(formData)
      const numResults = formData.numResults || 100

      let nearVectorClause = ''
      if (queryVector && queryVector.length) {
        nearVectorClause = `
          nearVector: {
            vector: [${queryVector.join(',')}]
          }
        `
      }

      return `
      query {
        Get {
          HolocaustTestimonies(
            limit: ${numResults},
            ${nearVectorClause}
            ${whereClause}
          ) {
            rg
            full_name
            birth_year
            gender
            country
            experience_group
            text
            _additional {
              distance
            }
          }
        }
      }`
    },

    /**
     * buildWhereClause - includes place category filters as well as gender, etc.
     *
     * If user selects "Countries" in formData.labels,
     * that means the "COUNTRY" property > 0
     * We'll combine them with an OR for multiple places
     */
    buildWhereClause(filters) {
      const operands = []

      // Standard filters
      if (filters.gender && filters.gender !== '') {
        operands.push(`{
          operator: Equal
          path: ["gender"]
          valueText: "${filters.gender}"
        }`)
      }
      if (filters.country && filters.country !== '') {
        operands.push(`{
          operator: Equal
          path: ["country"]
          valueText: "${filters.country}"
        }`)
      }
      if (filters.experienceGroup && filters.experienceGroup !== '') {
        operands.push(`{
          operator: Equal
          path: ["experience_group"]
          valueText: "${filters.experienceGroup}"
        }`)
      }
      if (filters.birthYear && filters.birthYear !== '') {
        operands.push(`{
          operator: Equal
          path: ["birth_year"]
          valueInt: ${filters.birthYear}
        }`)
      }
      if (filters.rgNumber) {
        operands.push(`{
          operator: Equal
          path: ["rg"]
          valueText: "${filters.rgNumber}"
        }`)
      }
      if (filters.fullName) {
        operands.push(`{
          operator: Equal
          path: ["full_name"]
          valueText: "${filters.fullName}"
        }`)
      }

      // Place category filters => "mapping label to property" => property > 0
      // e.g. if user picks "Countries", that means "COUNTRY" > 0
      const placeLabels = filters.labels || []
      if (placeLabels.length) {
        // Map each label to property => property > 0
        const placeOperands = placeLabels.map(lbl => {
          const propertyName = this.placeLabelMap[lbl] || ''
          if (!propertyName) return ''
          // Means that propertyName > 0
          return `{
            operator: GreaterThan
            path: ["${propertyName}"]
            valueNumber: 0
          }`
        }).filter(Boolean)

        if (placeOperands.length) {
          // Combine them with an OR => any place category is valid
          operands.push(`
          {
            operator: Or
            operands: [
              ${placeOperands.join(',')}
            ]
          }
          `)
        }
      }

      if (!operands.length) return ''

      return `
      where: {
        operator: And
        operands: [
          ${operands.join(',')}
        ]
      }`
    }
  }
}
</script>

<style scoped>
.search-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
}

.page-title {
  margin-bottom: 10px;
  font-size: 1.8em;
}

/* Container for the two-column layout */
.search-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: hidden; /* Manage scroll in sub-sections */
}

/* Left column: search menu */
.search-menu {
  width: 300px;
  min-width: 240px;
  margin-right: 20px;
  background: #f9f9f9;
  border-right: 1px solid #ddd;
  padding: 10px;
  overflow-y: auto;
}

/* Right column: results */
.results-container {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background: #fff;
  border-left: 1px solid #ddd;
}

.results-table-wrapper {
  overflow-x: auto; /* Horizontal scroll if needed */
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background: #f0f0f0;
}

.loading-indicator {
  font-style: italic;
  color: #777;
}

.no-results {
  margin-top: 20px;
  color: #666;
}

/* Menu Title */
.menu-title {
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: 600;
}
</style>
