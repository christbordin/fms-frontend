<template>
  <section id="hero">
    <v-row no-gutters>
      <v-img max-height="1200" src="../assets/bg/jimmy-conover.jpg">
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="white--text mx-auto" justify="center">
              <v-col class="white--text text-center" cols="12" tag="h1">
                <span
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2',
                  ]"
                  class="font-weight-light"
                >
                  WELCOME TO
                </span>

                <br />

                <span
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4',
                  ]"
                  class="font-weight-black"
                >
                  FOOTBALL MANAGEMENT SYSTEM
                </span>
              </v-col>

              <v-btn x-large @click="$vuetify.goTo('#login')" v-if="isLoggedIn">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
              <v-btn x-large @click="$vuetify.goTo('#login')" v-else>
                Login <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "HomeContent",

  computed: {
    isLoggedIn() {
      return localStorage.length
    },
  },
  
};
</script>

<style>
</style>