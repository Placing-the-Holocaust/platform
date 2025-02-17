<!-- components/Map.vue -->

<template>
  <div class="map-container">
    <!-- Left Sidebar for Layer Toggle -->
    <div class="left-sidebar">
      <h2>Map Layers</h2>
      <div>
        <label>
          <input type="checkbox" @change="toggleLayer(ghettosLayerId, $event.target.checked)" checked />
          Ghettos
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" @change="toggleLayer(ssCampsLayerId, $event.target.checked)" checked />
          SS Camps
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" @change="toggleLayer(deathCampsLayerId, $event.target.checked)" checked />
          Death Camps
        </label>
      </div>

      <div class="legend">
        <h3>Visible Layers</h3>
        <ul>
          <li v-if="isLayerVisible(ghettosLayerId)">
            <span class="circle" :style="{ backgroundColor: ghettosLayerColor }"></span>
            Ghettos
          </li>
          <li v-if="isLayerVisible(ssCampsLayerId)">
            <span class="circle" :style="{ backgroundColor: ssCampsLayerColor }"></span>
            SS Camps
          </li>
          <li v-if="isLayerVisible(deathCampsLayerId)">
            <span class="circle" :style="{ backgroundColor: deathCampsLayerColor }"></span>
            Death Camps
          </li>
        </ul>
      </div>
    </div>

    <!-- Map -->
    <div ref="mapContainer" class="map"></div>

    <!-- Popup panel for displaying information -->
    <div v-if="popupVisible" class="popup">
      <h3>{{ popupData.name }}</h3>
      <p>{{ popupData.description }}</p>
      <button @click="closePopup">Close</button>
    </div>
  </div>
</template>

<script>
import maplibre from 'maplibre-gl';
import { Protocol } from "pmtiles";

export default {
  name: 'Map',
  props: {
    mapStyle: {
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
  },
  data() {
    return {
      map: null,
      popupVisible: false,
      popupData: {},
      ghettosLayerId: 'ghettos',
      ssCampsLayerId: 'ss_camps',
      deathCampsLayerId: 'death_camps', // Assuming death camps layer is available
      ghettosLayerColor: '#AA66CD',
      ssCampsLayerColor: '#FFAA00',
      deathCampsLayerColor: '#FF5733',
    };
  },
  mounted() {
    // Register PMtiles protocol
    let protocol = new Protocol();
    maplibre.addProtocol('pmtiles', protocol.tile);

    // Initialize the map
    this.map = new maplibre.Map({
      container: this.$refs.mapContainer,
      style: this.mapStyle,
      center: this.center,
      zoom: this.zoom,
    });

    this.map.on('load', () => {
      console.log('Map loaded successfully!');

      // Layers are already in the style, just toggle visibility
      this.addLayer('ghettos', this.ghettosLayerColor);
      this.addLayer('ss_camps', this.ssCampsLayerColor);
      this.addLayer('death_camps', this.deathCampsLayerColor);

      // Add click event for popup
      this.map.on('click', this.ghettosLayerId, this.showPopup);
      this.map.on('click', this.ssCampsLayerId, this.showPopup);
      this.map.on('click', this.deathCampsLayerId, this.showPopup);
    });
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
    }
  },
  methods: {
    addLayer(layerId, color) {
      // Ensure layer is added only once
      if (!this.map.getLayer(layerId)) {
        this.map.addLayer({
          id: layerId,
          type: 'circle',
          source: layerId,
          'source-layer': layerId,
          paint: {
            'circle-radius': 6,
            'circle-color': color,
          },
        });
      }
    },
    toggleLayer(layerId, visibility) {
      // Ensure the map and layer are ready before attempting to toggle visibility
      if (this.map && this.map.getLayer(layerId)) {
        this.map.setLayoutProperty(layerId, 'visibility', visibility ? 'visible' : 'none');
      }
    },
    isLayerVisible(layerId) {
      // Check if the map and layer are ready before checking visibility
      const layer = this.map && this.map.getLayoutProperty(layerId, 'visibility');
      return layer === 'visible';
    },
    showPopup(e) {
      const feature = e.features[0];

      // Access feature properties for dynamic popup content
      this.popupData = {
        name: feature.properties.name || 'Unnamed', // Replace with actual property
        description: feature.properties.description || 'No description available.', // Replace with actual property
      };

      // Update popup visibility and position
      this.popupVisible = true;
      const coordinates = e.lngLat;
      this.map.flyTo({
        center: coordinates,
        zoom: 8,
      });
    },
    closePopup() {
      this.popupVisible = false;
    },
  },
};
</script>

<style scoped>
.map-container {
  display: flex;
  position: relative;
  height: 100vh;
}

.left-sidebar {
  position: absolute;
  top: 50px;
  left: 0;
  width: 250px;
  background: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-right: 1px solid #ddd;
  z-index: 10;
}

.left-sidebar h2 {
  font-size: 18px;
  margin-bottom: 15px;
}

.left-sidebar label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
}

.legend {
  margin-top: 20px;
}

.legend h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.legend ul {
  list-style-type: none;
  padding: 0;
}

.legend li {
  font-size: 14px;
  margin-bottom: 5px;
}

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}

.map {
  flex: 1;
  height: 100%;
}

.popup {
  position: absolute;
  right: 0;
  top: 50px;
  width: 25%;
  background-color: white;
  padding: 15px;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
