<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="item in teamList" :key="item.tid">
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4" v-text="item.name"></div>
                  <v-list-item-title
                    class="text-h5 mb-1"
                    v-text="item.home_stadium"
                  >
                  </v-list-item-title>
                  <v-list-item-subtitle
                    v-text="item.address"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="#F5F5F5"
                  ><v-img
                    contain
                    max-height="70%"
                    :src="require('../assets/logo/' + item.logo)"
                  ></v-img
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text @click="toPlayerList(item.tid, item.name)"> Player List </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { getTeams } from "../api";
export default {
  data() {
    return {
      teamList: null,
    };
  },

  async created() {
    const res = await getTeams(this.$route.params.uid);
    if (res.status === 200) {
      this.teamList = res.data;
    }
  },
methods:{
  toPlayerList(tid, tname){
    this.$router.push({
      name: "playerlist",
      params: {
        tid: tid,
        tname: tname
      },
      // props: {
      //   tname: tname
      // }
    })
  },
}
};
</script>

<style>
</style>