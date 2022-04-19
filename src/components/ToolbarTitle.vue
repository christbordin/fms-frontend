<template>
  <v-toolbar dark rounded>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Hi, {{ name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn outlined @click="handleLogout">Log out</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "ToolbarTitle",

  data() {
    return {
      name: "",
    };
  },

  created() {
    this.name = localStorage.getItem("name");
  },

  methods: {
    handleLogout() {
      localStorage.clear();
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>

<style>
</style>