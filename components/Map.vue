<!-- components/Map.vue -->

<template>
    <div ref="mapContainer" class="map-container"></div>
  </template>
  
  <script>
  import maplibregl from 'maplibre-gl'
  import { Protocol } from "pmtiles";       
  
  export default {
    name: 'Map',
    props: {
      mapStyle: { // Renamed from 'style' to 'mapStyle'
        type: String,
        default: 'https://demotiles.maplibre.org/style.json', // Default style
      },
      center: {
        type: Array,
        default: () => [15.2551, 52.5200], // Default to Berlin coordinates
      },
      zoom: {
        type: Number,
        default: 4,
      },
      dataUrl: {
        type: String,
        default: '/data/sample-points.geojson', // Default data URL
      },
    },
    mounted() {

      // Register PMtiles protocol
      let protocol = new Protocol();
      maplibregl.addProtocol("pmtiles",protocol.tile); 
      
      // Initialize the map
      this.map = new maplibregl.Map({
        container: this.$refs.mapContainer,
        style: this.mapStyle, // Use the renamed prop
        center: this.center,
        zoom: this.zoom,
      })
  
      // Add navigation controls
      this.map.addControl(new maplibregl.NavigationControl())
  
      // Handle map load event
      this.map.on('load', () => {
        console.log('Map loaded successfully!')
  
        // Add a GeoJSON source
        this.map.addSource('sample-points', {
          type: 'geojson',
          data: this.dataUrl,
        })
  
        // Add a layer to display the points
        this.map.addLayer({
          id: 'sample-points-layer',
          type: 'circle',
          source: 'sample-points',
          paint: {
            'circle-radius': 6,
            'circle-color': '#FF0000',
            'circle-stroke-color': '#FFFFFF',
            'circle-stroke-width': 2,
          },
        })
  
        // Add click event for popups
        this.map.on('click', 'sample-points-layer', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice()
          const { name, description } = e.features[0].properties
  
          // Ensure popup appears at the correct location
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
          }
  
          // Create a popup
          new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`<h3>${name}</h3><p>${description}</p>`)
            .addTo(this.map)
        })
  
        // Change the cursor to a pointer when over the points
        this.map.on('mouseenter', 'sample-points-layer', () => {
          this.map.getCanvas().style.cursor = 'pointer'
        })
  
        this.map.on('mouseleave', 'sample-points-layer', () => {
          this.map.getCanvas().style.cursor = ''
        })
      })
    },
    beforeDestroy() {
      if (this.map) {
        this.map.remove()
      }
    },
  }
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 100%; /* Fill the parent container's height */
  }
  </style>
  