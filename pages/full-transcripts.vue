<!-- pages/full-transcripts.vue -->

<template>
    <div class="full-transcripts-page">
      <h1>All Transcripts</h1>
      <p>Browse through all available interview transcripts.</p>
      <!-- Placeholder for transcripts listing -->
      <div class="transcripts-list">
        <table>
          <thead>
            <tr>
              <th>Transcript ID</th>
              <th>Title</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- Example dummy data -->
            <tr v-for="transcript in transcripts" :key="transcript.id">
              <td>{{ transcript.id }}</td>
              <td>{{ transcript.title }}</td>
              <td>{{ transcript.date }}</td>
              <td><NuxtLink :to="`/transcripts/${transcript.id}`">View</NuxtLink></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FullTranscriptsPage',
    data() {
      return {
        transcripts: [
          { id: 1, title: 'Transcript 1: Krakow Ghetto', date: '1942-05-12' },
          { id: 2, title: 'Transcript 2: Warsaw Ghetto', date: '1943-07-23' },
          // Add more dummy data or integrate with your data source
        ],
      }
    },
  }
  </script>
  
  <style scoped>
  .full-transcripts-page {
    text-align: center;
    padding: 20px;
  }
  
  .transcripts-list {
    margin: 20px auto;
    max-width: 800px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead {
    background-color: #3498db;
    color: #fff;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #bdc3c7;
  }
  
  tr:nth-child(even) {
    background-color: #ecf0f1;
  }
  
  a {
    color: #e74c3c;
    text-decoration: none;
    font-weight: bold;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  