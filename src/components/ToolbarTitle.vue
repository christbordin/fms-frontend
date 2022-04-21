<template>
  <v-toolbar dark rounded>
    <div>
      <v-btn class="ma-5" outlined @click="goBack">
        <v-icon left> mdi-arrow-left </v-icon>Back
      </v-btn>
    </div>
    <v-toolbar-title class="ma-8">Hi, {{ name.data.name }}</v-toolbar-title>
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
    this.name = JSON.parse(localStorage.getItem("user"));
  },

  methods: {
    handleLogout() {
      localStorage.clear();
      this.$router.push({
        name: "home",
      });
    },

    goBack() {
      history.back()
    }
  },
};
</script>

<style>
</style>