<template>
  <div id="home">
    <v-app>
      <v-app-bar app color="white" height="100">
        <v-app-bar-title class="font-weight-black headline">
          Football Management System
        </v-app-bar-title>
      </v-app-bar>
      <v-main>
        <HomeContent />
        <LoginCard />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import HomeContent from "../components/HomeContent.vue";
import LoginCard from "../components/LoginCard.vue";
export default {
  components: {
    LoginCard,
    HomeContent,
  },
};
</script>

<style>
</style>