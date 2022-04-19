<template>
  <v-app>
    <v-main>
      <ToolbarTitle />
      <div class="title">
        <div class="card-title mt-10"> All your teams </div>
      </div>
      <v-container>
        <v-row>
          <v-col v-for="item in teamList" :key="item.tid">
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4" v-text="item.name"></div>
                  <v-list-item-title
                    class="d-inline-block text-truncate mb-1"
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
                <v-btn
                  outlined
                  rounded
                  text
                  color="info"
                  @click="toPlayerList(item.tid, item.name, item.uid)"
                >
                  Player List
                </v-btn>
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
import ToolbarTitle from "../components/ToolbarTitle.vue";
export default {
  name: "TeamCard",

  components: {
    ToolbarTitle,
  },

  data() {
    return {
      teamList: null,
      name: "",
    };
  },

  async created() {
    const res = await getTeams(this.$route.params.uid);
    if (res.status === 200) {
      this.teamList = res.data;
    }

    this.name = localStorage.getItem("name");
  },
  methods: {
    toPlayerList(tid, tname, uid) {
      this.$router.push({
        name: "playerlist",
        params: {
          tid: tid,
          tname: tname,
          uid: uid,
        },
        // props: {
        //   tname: tname
        // }
      });
    },
  },
};
</script>

<style>
.title {
  display: flex;
  justify-content: center;
  background-color: aliceblue;
}
.card-title {
  text-align: center;
  /* background-color: linen; */
  width: 25rem;
  border-radius: 0.3rem;
  background-color: aliceblue;
  /* border: 2px solid black; */

}
</style>