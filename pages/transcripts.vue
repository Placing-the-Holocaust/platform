<!-- pages/transcripts.vue -->

<template>
    <div class="transcripts-page">
      <h1>Interview Transcripts</h1>
      <p>Read through detailed interview transcripts.</p>
      <!-- Placeholder for transcript content -->
      <div class="transcript-content">
        <p>Select a transcript to view its content.</p>
        <!-- Links to individual transcripts can be added here -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TranscriptsPage',
  }
  </script>
  
  <style scoped>
  .transcripts-page {
    text-align: center;
    padding: 20px;
  }
  
  .transcript-content {
    margin-top: 30px;
  }
  </style>
  