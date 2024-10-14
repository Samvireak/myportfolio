<template>
    <div>
      <h1>API Data</h1>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}: {{ item.value }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        items: []
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          // Since the proxy is set up, we can use a relative path here
          const response = await axios.get('/data');   // Replace '/api-endpoint' with your actual API path
          this.items = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
  };
  </script>