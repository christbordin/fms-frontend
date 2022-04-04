<template>
  <div id="app">
    <router-view />
    <MyFooter />
  </div>
</template>
<script>
  import MyFooter from './components/layouts/MyFooter.vue';
  export default {
    name: 'app',
    components: {
      MyFooter
    },
  };
</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>