<template>
  <div id="app">
    <CountryInfo />
  </div>
</template>

<script>
import CountryInfo from './components/CountryInfo.vue';

export default {
  components: {
    CountryInfo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
