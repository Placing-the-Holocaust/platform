<!-- pages/map.vue -->

<template>
  <div class="map-page">
    <Map :mapStyle="mapStyle" :center="mapCenter" :zoom="mapZoom" />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'

// Step 1: Decide basePath depending on dev vs. production
    // If your GH Pages repo subdirectory is '/platform', do:
    const basePath = process.env.NODE_ENV === 'production' ? '/platform' : ''
    
    // Step 2: Build the style path
    const stylePath = `${basePath}/styles/style.json`

export default {
  components: {
    Map,
  },
  data() {
    return {
      mapStyle: stylePath, // Path to your custom style
      mapCenter: [15.2551, 52.5200], // Centered on Europe
      mapZoom: 4,
    }
  },
}
</script>

<style scoped>
.map-page {
 flex: 1;
}
</style>
