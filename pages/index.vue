<!-- pages/index.vue -->

<template>
  <div class="home">
    <img src="/images/logo.png" alt="Platform Logo" class="logo" />
    <h1>Placing the Holocaust</h1>
    <p></p>
    <div class="links">
      <NuxtLink to="/map">Explore the Map</NuxtLink>
      <NuxtLink to="/search">Search Transcripts</NuxtLink>
      <NuxtLink to="/transcripts">View Transcripts</NuxtLink>
      <NuxtLink to="/full-transcripts">All Transcripts</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
  padding: 0 20px;
}

.logo {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

h1 {
  color: #3498db;
  font-size: 3em;
  margin-bottom: 10px;
}

p {
  font-size: 1.2em;
  color: #2c3e50;
  margin-bottom: 30px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.links a {
  color: #fff;
  background-color: #3498db;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.links a:hover {
  background-color: #2980b9;
}
</style>

