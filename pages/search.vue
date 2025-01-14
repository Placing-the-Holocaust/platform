<!-- pages/search.vue example -->

<template>
  <div>
    <h1></h1>
    <SearchForm
      :widgetNames="widgetNames"
      :explanation="explanation"
      :categoryOptions="categoryOptions"
      :genderOptions="genderOptions"
      :countryOptions="countryOptions"
      :experienceGroupOptions="experienceGroupOptions"
      :placeLabelOptions="placeLabelOptions"
      @search-submitted="handleSearch"
    />

    <div v-if="results.length > 0" class="results-container">
      <h2>Results ({{ results.length }})</h2>
      <!-- Display table or grid of results -->
    </div>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'

export default {
  components: { SearchForm },
  data() {
    return {
      widgetNames: {
        query_header: { name: "Search", help: "Enter your search query" },
        type_of_search: { name: "Type of Search", help: "Select Vector, Keyword, or Hybrid" },
        query_text: { name: "Query Text", help: "Enter your text to search" },
        places_header: { name: "Places", help: "Filter by place-based labels" },
        select_label_matches: { name: "Select Label Matches", help: "Pick from environment, building, etc." },
        answer_or_question: { name: "Answer or Question", help: "Filter by testimony category" },
        select_gender: { name: "Select Gender", help: "Choose genders to include" },
        select_place_of_birth: { name: "Select Place of Birth", help: "Filter by country of birth" },
        select_experience_group: { name: "Select Experience Group", help: "Filter by experience groups" },
        search_full_name: { name: "Full Name", help: "Search by transcript full name" },
        search_rg_number: { name: "RG Number", help: "Search by RG number" },
        number_of_results: { name: "Number of Results", help: "How many results to return" },
        search_button: { name: "Search", help: "Click to perform the search" }
      },
      explanation: { name: "Explanation", text: "Advanced search options for transcripts..." },
      categoryOptions: ["question", "answer"],
      genderOptions: ["M", "F", "Unknown"],
      countryOptions: ["Poland", "Germany", "Unknown"],
      experienceGroupOptions: ["Camp Survivor", "Partisan", "Ghetto Survivor", "Unknown"],
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
      ],
      results: []
    }
  },
  methods: {
    handleSearch(formData) {
      console.log("Search data received:", formData)
      // Perform your Weaviate or other search logic here...
      // Then store results:
      this.results = [
        /* Example mock results */
        { rg: "RG1234", text: "Transcript excerpt...", score: 0.95 },
        { rg: "RG5678", text: "Another excerpt...", score: 0.87 }
      ]
    }
  }
}
</script>

<style scoped>
.results-container {
  margin-top: 20px;
  background: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
}
</style>
