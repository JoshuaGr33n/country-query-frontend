<template>
    <div class="container">
      <h1>Country Information</h1>
      <input
        type="text"
        v-model="isoCode"
        placeholder="Enter ISO code (2 or 3 letters)"
        class="input-field"
      />
      <button @click="fetchCountry" class="submit-button">Get Country Info</button>
      
      <div v-if="errorMessages.length" class="error">
        <ul>
          <li v-for="(error, index) in errorMessages" :key="index">{{ error }}</li>
        </ul>
      </div>
      
      <div v-if="country" class="country-info">
        <h2>{{ country.name }}</h2>
        <p><strong>Region:</strong> {{ country.region }}</p>
        <p><strong>Capital City:</strong> {{ country.capitalCity }}</p>
        <p><strong>Longitude:</strong> {{ country.longitude }}</p>
        <p><strong>Latitude:</strong> {{ country.latitude }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        isoCode: '',
      };
    },
    computed: {
      ...mapState(['country', 'errorMessages']), // Bind errorMessages directly from Vuex state
    },
    methods: {
      async fetchCountry() {
        // Reset previous error messages
        this.$store.commit('clearErrors'); // Clear errors in Vuex state
  
        // Check if the input field is empty
        if (!this.isoCode) {
          this.$store.commit('setError', ['ISO code cannot be empty.']);
          return; // Exit early
        }
  
        // Dispatch action to fetch country info
        try {
          await this.$store.dispatch('fetchCountry', this.isoCode);
        } catch (error) {
          // Get errors from Vuex action
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px; 
    margin: 0 auto; 
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden; 
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  .input-field {
    width: calc(100% - 30px); 
    padding: 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    transition: border-color 0.3s;
  }
  
  .input-field:focus {
    border-color: #007bff; 
    outline: none;
  }
  
  .submit-button {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    color: white;
    background-color: #007bff; 
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #0056b3; 
  }
  
  .error {
    color: red;
    text-align: center; 
  }
  
  .country-info {
    margin-top: 20px;
    padding: 15px;
    background-color: #e9ecef;
    border-radius: 4px;
  }
  </style>
  