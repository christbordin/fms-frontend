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
        <LoginPage />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import HomeContent from "../components/HomeContent.vue";
import LoginPage from "../components/LoginPage.vue";
export default {
  components: {
    LoginPage,
    HomeContent,
  },
};
</script>

<style>
</style>