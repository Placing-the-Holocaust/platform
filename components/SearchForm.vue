<!-- components/SearchForm.vue -->
<template>
  <div class="search-form">
    <form @submit.prevent="submitSearch">
      <!-- Query Text -->
      <div class="field-group">
        <label>Query Text</label>
        <input type="text" v-model="queryText" placeholder="Enter your search term" />
      </div>

      <!-- Type of Search (Vector, Keyword, Hybrid) -->
      <div class="field-group">
        <label>Type of Search</label>
        <select v-model="queryType">
          <option>Vector</option>
          <option>Keyword</option>
          <option>Hybrid</option>
        </select>
      </div>

      <!-- Toggle: Places -->
      <div class="toggle-section">
        <label>
          <input type="checkbox" v-model="togglePlaces" />
          Places Filter
        </label>
      </div>
      <div v-if="togglePlaces" class="places-panel">
        <label>Select Place Labels</label>
        <select v-model="selectedPlaces" multiple>
          <option v-for="(pl, idx) in placeLabelOptions" :key="idx" :value="pl.label">
            {{ pl.label }}
          </option>
        </select>
      </div>

      <!-- Toggle: Testimony Filters -->
      <div class="toggle-section">
        <label>
          <input type="checkbox" v-model="toggleTestimonyFilters" />
          Testimony Filters
        </label>
      </div>
      <div v-if="toggleTestimonyFilters" class="testimony-panel">
        <!-- Category -->
        <div>
          <label>Category</label>
          <select v-model="category" multiple>
            <option>question</option>
            <option>answer</option>
          </select>
        </div>
        <!-- Gender -->
        <div>
          <label>Gender</label>
          <select v-model="selectedGender">
            <option value="">All</option>
            <option v-for="(g, i) in genders" :key="i" :value="g">{{ g }}</option>
          </select>
        </div>
        <!-- Country -->
        <div>
          <label>Country</label>
          <select v-model="selectedCountry">
            <option value="">All</option>
            <option v-for="(c, i) in countries" :key="i" :value="c">{{ c }}</option>
          </select>
        </div>
        <!-- Experience Group -->
        <div>
          <label>Experience Group</label>
          <select v-model="selectedExperienceGroup">
            <option value="">All</option>
            <option v-for="(e, i) in experienceGroups" :key="i" :value="e">{{ e }}</option>
          </select>
        </div>
        <!-- Birth Year -->
        <div>
          <label>Birth Year</label>
          <select v-model="selectedBirthYear">
            <option value="">All</option>
            <option v-for="(y, i) in birthYears" :key="i" :value="y">{{ y }}</option>
          </select>
        </div>
        <!-- RG Number -->
        <div>
          <label>RG Number</label>
          <input type="text" v-model="rgNumber" placeholder="RG..." />
        </div>
        <!-- Full Name -->
        <div>
          <label>Full Name</label>
          <input type="text" v-model="fullName" />
        </div>
      </div>

      <!-- Toggle: Advanced Options -->
      <div class="toggle-section">
        <label>
          <input type="checkbox" v-model="toggleAdvanced" />
          Advanced Options
        </label>
      </div>
      <div v-if="toggleAdvanced" class="advanced-panel">
        <label>Number of Results</label>
        <input type="number" v-model.number="numResults" min="1" max="1000" />
      </div>

      <!-- Submit -->
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: {
    genders: { type: Array, default: () => [] },
    countries: { type: Array, default: () => [] },
    experienceGroups: { type: Array, default: () => [] },
    birthYears: { type: Array, default: () => [] },
    placeLabelOptions: { type: Array, default: () => [] }
  },
  data() {
    return {
      queryType: "Vector",
      queryText: "",
      togglePlaces: false,
      selectedPlaces: [],
      toggleTestimonyFilters: false,
      category: [],
      selectedGender: "",
      selectedCountry: "",
      selectedExperienceGroup: "",
      selectedBirthYear: "",
      rgNumber: "",
      fullName: "",
      toggleAdvanced: false,
      numResults: 100
    };
  },
  methods: {
    submitSearch() {
      const filters = {
        queryType: this.queryType,
        queryText: this.queryText,
        placesHeader: this.togglePlaces,
        labels: this.selectedPlaces, // place labels
        testimonyFilters: this.toggleTestimonyFilters,
        category: this.category,
        gender: this.selectedGender,
        country: this.selectedCountry,
        experienceGroup: this.selectedExperienceGroup,
        birthYear: this.selectedBirthYear,
        rgNumber: this.rgNumber,
        fullName: this.fullName,
        advanced: this.toggleAdvanced,
        numResults: this.numResults
      };
      this.$emit("search-submitted", filters);
    }
  }
};
</script>

<style scoped>
.search-form {
  background: #f8f8f8;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.field-group {
  margin-bottom: 10px;
}
.toggle-section {
  margin: 15px 0;
}
button {
  margin-top: 10px;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
