<template>
  <v-app>
    <v-main>
        <v-img max-height="1080" src="../assets/bg/jimmy-conover.jpg">
      <v-container>
        <v-card>
          <v-card-title class="text-uppercase"> 
            {{tname}}
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="playerList"
            :items-per-page="15"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-container>
      </v-img>
    </v-main>
  </v-app>
</template>

<script>
import { getPlayers } from "../api";
export default {
  // props: {
  //   tname: {
  //     type: String,
  //     default: "",
  //   }
  // },
  
  data() {
    return {
      search: "",
      headers: [
        { text: "Team Id", value: "tid" },
        { text: "Player Id", value: "pid" },
        { text: "Name", value: "name" },
        { text: "Age", value: "age" },
        { text: "Position", value: "position" },
      ],
      playerList: [],
      tid: this.$route.params.tid,
      tname: this.$route.params.tname
    };
  },

  async created() {
    const res = await getPlayers(this.$route.params.tid);
    this.playerList = res.data;
    
  },
};
</script>

<style>
</style>