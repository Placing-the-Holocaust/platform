<!-- components/SearchForm.vue -->
<template>
    <div class="search-form">
      <!-- Query Section -->
      <div class="form-section">
        <h2 class="section-title">{{ widgetNames.query_header.name }}</h2>
        <p v-if="widgetNames.query_header.help" class="section-help">
          {{ widgetNames.query_header.help }}
        </p>
  
        <!-- Type of Search (Vector, Keyword, Hybrid) -->
        <div class="field-group">
          <label class="field-label">{{ widgetNames.type_of_search.name }}</label>
          <select v-model="queryType" :title="widgetNames.type_of_search.help" class="field-select">
            <option value="Vector">Vector</option>
            <option value="Keyword">Keyword</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
  
        <!-- Query Text -->
        <div class="field-group">
          <label class="field-label">{{ widgetNames.query_text.name }}</label>
          <input
            type="text"
            v-model="queryText"
            :placeholder="widgetNames.query_text.help"
            class="field-input"
          />
        </div>
      </div>
  
      <!-- Places Section -->
      <div class="form-section toggle-section">
        <h2 class="section-title">{{ widgetNames.places_header.name }}</h2>
        <p v-if="widgetNames.places_header.help" class="section-help">
          {{ widgetNames.places_header.help }}
        </p>
        <label class="switch-label">
          <input
            type="checkbox"
            v-model="togglePlaces"
            class="switch-input"
          />
          <span class="switch-text">Enable Places Filter</span>
        </label>
        
        <!-- If Places Toggle is on, show multiple place label selection -->
        <div v-if="togglePlaces" class="places-panel">
          <label class="field-label">{{ widgetNames.select_label_matches.name }}</label>
          <p v-if="widgetNames.select_label_matches.help" class="field-help">
            {{ widgetNames.select_label_matches.help }}
          </p>
          <multiselect
            v-model="labels"
            :options="placeLabelOptions"
            :multiple="true"
            track-by="label"
            label="label"
            placeholder="Select place labels..."
            class="multiselect-field"
          />
        </div>
      </div>
  
      <!-- Testimony Filters Section -->
      <div class="form-section toggle-section">
        <h2 class="section-title">Testimony Filters</h2>
        <label class="switch-label">
          <input
            type="checkbox"
            v-model="toggleTestimonyFilters"
            class="switch-input"
          />
          <span class="switch-text">Enable Additional Filters</span>
        </label>
        
        <div v-if="toggleTestimonyFilters" class="testimony-panel">
          <!-- Category -->
          <div class="field-group">
            <label class="field-label">{{ widgetNames.answer_or_question.name }}</label>
            <p v-if="widgetNames.answer_or_question.help" class="field-help">
              {{ widgetNames.answer_or_question.help }}
            </p>
            <multiselect
              v-model="category"
              :options="categoryOptions"
              :multiple="true"
              track-by="option"
              label="option"
              placeholder="Select Category..."
              class="multiselect-field"
            />
          </div>
  
          <!-- Gender -->
          <div class="field-group">
            <label class="field-label">{{ widgetNames.select_gender.name }}</label>
            <p v-if="widgetNames.select_gender.help" class="field-help">
              {{ widgetNames.select_gender.help }}
            </p>
            <multiselect
              v-model="gender"
              :options="genderOptions"
              :multiple="true"
              track-by="option"
              label="option"
              placeholder="Select Gender..."
              class="multiselect-field"
            />
          </div>
  
          <!-- Place of Birth (Countries) -->
          <div class="field-group">
            <label class="field-label">{{ widgetNames.select_place_of_birth.name }}</label>
            <p v-if="widgetNames.select_place_of_birth.help" class="field-help">
              {{ widgetNames.select_place_of_birth.help }}
            </p>
            <multiselect
              v-model="countries"
              :options="countryOptions"
              :multiple="true"
              track-by="option"
              label="option"
              placeholder="Select Countries..."
              class="multiselect-field"
            />
          </div>
  
          <!-- Experience Groups -->
          <div class="field-group">
            <label class="field-label">{{ widgetNames.select_experience_group.name }}</label>
            <p v-if="widgetNames.select_experience_group.help" class="field-help">
              {{ widgetNames.select_experience_group.help }}
            </p>
            <multiselect
              v-model="experienceGroups"
              :options="experienceGroupOptions"
              :multiple="true"
              track-by="option"
              label="option"
              placeholder="Select Experience Groups..."
              class="multiselect-field"
            />
          </div>
  
          <!-- Full Name -->
          <div class="field-group">
            <label class="field-label">{{ widgetNames.search_full_name.name }}</label>
            <p v-if="widgetNames.search_full_name.help" class="field-help">
              {{ widgetNames.search_full_name.help }}
            </p>
            <input
              type="text"
              v-model="fullName"
              :placeholder="widgetNames.search_full_name.name"
              class="field-input"
            />
          </div>
  
          <!-- RG Number -->
          <div class="field-group">
            <label class="field-label">{{ widgetNames.search_rg_number.name }}</label>
            <p v-if="widgetNames.search_rg_number.help" class="field-help">
              {{ widgetNames.search_rg_number.help }}
            </p>
            <input
              type="text"
              v-model="rgNumber"
              :placeholder="widgetNames.search_rg_number.name"
              class="field-input"
            />
          </div>
        </div>
      </div>
  
      <!-- Advanced Options Section -->
      <div class="form-section toggle-section">
        <h2 class="section-title">Advanced Options</h2>
        <label class="switch-label">
          <input
            type="checkbox"
            v-model="toggleAdvanced"
            class="switch-input"
            :title="widgetNames.search_button.help"
          />
          <span class="switch-text">Show Advanced Settings</span>
        </label>
        
        <!-- If Advanced Options is toggled on, show num_results -->
        <div v-if="toggleAdvanced" class="advanced-panel">
          <div class="field-group">
            <label class="field-label">{{ widgetNames.number_of_results.name }}</label>
            <p v-if="widgetNames.number_of_results.help" class="field-help">
              {{ widgetNames.number_of_results.help }}
            </p>
            <input
              type="number"
              v-model.number="numResults"
              :min="1"
              :max="1000"
              class="field-input"
            />
          </div>
        </div>
      </div>
  
      <!-- Explanation Toggle -->
      <div class="form-section explanation-section">
        <label class="switch-label">
          <input type="checkbox" v-model="toggleExplanation" class="switch-input" />
          <span class="switch-text">{{ explanation.name }}</span>
        </label>
        <p v-if="toggleExplanation" class="explanation-text">
          {{ explanation.text }}
        </p>
      </div>
  
      <!-- Search Button -->
      <div class="form-section">
        <button class="search-button" @click="onSearchClick">{{ widgetNames.search_button.name }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchForm',
    props: {
      widgetNames: {
        type: Object,
        default: () => ({
          query_header: { name: "Query Header", help: "" },
          type_of_search: { name: "Type of Search", help: "" },
          query_text: { name: "Query Text", help: "" },
          places_header: { name: "Places Header", help: "" },
          select_label_matches: { name: "Select Label Matches", help: "" },
          answer_or_question: { name: "Answer or Question", help: "" },
          select_gender: { name: "Select Gender", help: "" },
          select_place_of_birth: { name: "Select Place of Birth", help: "" },
          select_experience_group: { name: "Select Experience Group", help: "" },
          search_full_name: { name: "Search Full Name", help: "" },
          search_rg_number: { name: "Search RG Number", help: "" },
          number_of_results: { name: "Number of Results", help: "" },
          search_button: { name: "Search", help: "" }
        })
      },
      explanation: {
        type: Object,
        default: () => ({
          name: "Explanation",
          text: "Some advanced search explanation..."
        })
      },
      // Potentially load from an API or define locally
      categoryOptions: {
        type: Array,
        default: () => ["question", "answer"]
      },
      genderOptions: {
        type: Array,
        default: () => ["M", "F", "Unknown"]
      },
      countryOptions: {
        type: Array,
        default: () => ["Poland", "Germany", "Unknown"]
      },
      experienceGroupOptions: {
        type: Array,
        default: () => ["Camp Survivor", "Partisan", "Ghetto Survivor", "Unknown"]
      },
      placeLabelOptions: {
        type: Array,
        default: () => [
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
    data() {
      return {
        // Toggles
        togglePlaces: false,
        toggleTestimonyFilters: false,
        toggleAdvanced: false,
        toggleExplanation: false,
  
        // Form Data
        queryType: "Vector",
        queryText: "",
        labels: [], // place labels if togglePlaces is on
  
        category: [],
        gender: [],
        countries: [],
        experienceGroups: [],
        fullName: "",
        rgNumber: "",
        numResults: 10
      }
    },
    methods: {
      onSearchClick() {
        // Gather form data in an object
        const formData = {
          queryType: this.queryType,
          queryText: this.queryText,
          placesHeader: this.togglePlaces,
          labels: this.labels.map(l => l.label), // convert to string array
          testimonyFilters: this.toggleTestimonyFilters,
          category: this.category,
          gender: this.gender,
          countries: this.countries,
          experienceGroups: this.experienceGroups,
          fullName: this.fullName,
          rgNumber: this.rgNumber,
          advanced: this.toggleAdvanced,
          numResults: this.numResults
        }
  
        // Emit event so parent can handle the search
        this.$emit("search-submitted", formData)
      }
    }
  }
  </script>
  
  <style scoped>
  /* Root container */
  .search-form {
    background-color: white;
    border: 1px solid #000000;
    border-radius: 8px;
    padding: 20px;
    max-width: 700px;
    margin: 0 auto;
  }
  
  /* Section Wrappers */
  .form-section {
    margin-bottom: 25px;
    background-color: #fff;
    border-radius: 6px;
    padding: 15px;
    border: 1px solid #000000;
  }
  
  .section-title {
    font-size: 1.3em;
    margin: 0 0 10px 0;
    font-weight: 600;
  }
  
  .section-help {
    font-size: 0.9em;
    color: #666;
    margin-bottom: 10px;
  }
  
  /* Toggles */
  .toggle-section {
    position: relative;
  }
  
  .switch-label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .switch-input {
    margin-right: 10px;
  }
  
  .switch-text {
    font-size: 0.95em;
    color: #333;
  }
  
  /* Field Groupings */
  .field-group {
    margin-bottom: 10px;
  }
  
  .field-label {
    display: inline-block;
    font-weight: 600;
    margin-bottom: 5px;
  }
  
  .field-help {
    font-size: 0.85em;
    color: #666;
    margin-bottom: 5px;
  }
  
  /* Inputs */
  .field-input,
  .field-select {
    width: 85%;
    padding: 8px;
    font-size: 0.95em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  /* vue-multiselect placeholders */
  .multiselect-field {
    margin-top: 5px;
  }
  
  /* Explanation text */
  .explanation-text {
    background-color: #fff;
    border: 1px dashed #ccc;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
  }
  
  /* Search Button */
  .search-button {
    background-color: #0056b3;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.95em;
    transition: background-color 0.3s;
  }
  
  .search-button:hover {
    background-color: #003d80;
  }
  
  /* Panels for toggled sections */
  .places-panel,
  .testimony-panel,
  .advanced-panel {
    margin-top: 15px;
    padding: 10px;
    background: #f9f9f9;
    border: 1px solid #eee;
    border-radius: 4px;
  }
  </style>
  