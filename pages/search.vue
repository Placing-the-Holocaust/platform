<!-- pages/search.vue -->

<template>
    <div class="search-page">
      <h1>Search Transcripts</h1>
      <p>Use the search panel below to query interview transcripts.</p>
      <!-- Placeholder for search functionality -->
      <div class="search-panel">
        <input type="text" v-model="query" placeholder="Enter search term..." />
        <button @click="performSearch">Search</button>
      </div>
      <div class="search-results">
        <!-- Results will be displayed here -->
        <p v-if="results.length === 0">No results found.</p>
        <ul v-else>
          <li v-for="result in results" :key="result.id">
            {{ result.title }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchPage',
    data() {
      return {
        query: '',
        results: [],
      }
    },
    methods: {
      performSearch() {
        // Placeholder for API call to Weaviate cluster
        // Replace with actual API integration
        console.log('Searching for:', this.query)
        // Example dummy data
        this.results = [
          { id: 1, title: 'Transcript 1: Krakow Ghetto' },
          { id: 2, title: 'Transcript 2: Warsaw Ghetto' },
        ].filter(item => item.title.toLowerCase().includes(this.query.toLowerCase()))
      },
    },
  }
  </script>
  
  <style scoped>
  .search-page {
    text-align: center;
    padding: 20px;
  }
  
  .search-panel {
    margin: 20px auto;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .search-panel input {
    padding: 10px;
    width: 300px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
  }
  
  .search-panel button {
    padding: 10px 20px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .search-panel button:hover {
    background-color: #c0392b;
  }
  
  .search-results {
    margin-top: 30px;
  }
  
  .search-results ul {
    list-style: none;
    padding: 0;
  }
  
  .search-results li {
    background-color: #ecf0f1;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  </style>
  