<!-- layouts/default.vue -->

<template>
    <div>
      <Navbar />
      <nuxt />
      <footer class="footer">
        <p>&copy; {{ currentYear }} Platform. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import Navbar from '~/components/Navbar.vue'
  
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        currentYear: new Date().getFullYear(),
      }
    },
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    text-align: center;
    padding: 15px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  </style>  