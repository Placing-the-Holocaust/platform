<!-- pages/map.vue -->

<template>
    <div class="map-page">
      <h1>Map Overview</h1>
      <p>This page will feature an interactive map with historical data overlays.</p>
      <!-- Placeholder for Maplibre.js integration -->
      <div id="map" class="map-container">
        <!-- Map will be rendered here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MapPage',
  }
  </script>
  
  <style scoped>
  .map-page {
    text-align: center;
    padding: 20px;
  }
  
  .map-container {
    width: 100%;
    height: 600px;
    background-color: #ecf0f1;
    margin-top: 20px;
  }
  </style>
  