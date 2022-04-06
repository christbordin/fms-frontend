<template>
  <div>
    <router-view />
    <LeagueFooter />
  </div>
</template>

<script>
import LeagueFooter from './components/LeagueFooter.vue';
export default {
  name: 'App',

  components: {
    LeagueFooter,
  },

  data: () => ({
    //
  }),
};
</script>
