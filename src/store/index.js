import { createStore } from 'vuex';
import axios from '@/api/axios';

export default createStore({
  state: {
    country: null,
    errorMessages: [], // Array to hold error messages
  },
  mutations: {
    setCountry(state, country) {
      state.country = country;
      state.errorMessages = []; // Clear errors when setting country
    },
    setError(state, errors) {
      state.errorMessages = errors; // Set multiple error messages
      state.country = null; // Clear country data on error
    },
    clearErrors(state) {
      state.errorMessages = []; // Mutation to clear error messages
    },
  },
  actions: {
    async fetchCountry({ commit }, code) {
      // Clear previous errors before making the API call
      commit('clearErrors');
      
      try {
        const response = await axios.post('/country', { code });
        commit('setCountry', response.data);
      } catch (error) {
        if (error.response) {
          // when the backend sends an error message or multiple error messages
          const errorMessage = error.response.data.error || 'An error occurred.';
          const errorArray = error.response.data.errors?.code || [errorMessage];
          commit('setError', errorArray); // Commit the error messages
        } else {
          commit('setError', ['An unexpected error occurred.']); // Generic error message
        }
      }
    },
  },
});
