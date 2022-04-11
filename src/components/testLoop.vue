<template>
<v-app>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="item in logoTeam" :key="item.tid">
          <v-list-item-avatar tile size="80" color="#F5F5F5"
                  ><v-img
                    contain
                    max-height="70%"
                    :src="require('../assets/logo/' + item.image)"
                  ></v-img
                ></v-list-item-avatar>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
export default {
  
  data() {
    return {
      logoTeam: [
        {
          tid: 1,
          image: "manu.png",
        },
        {
          tid: 2,
          image: "liverpool.png",
        },
        {
          tid: 3,
          image: "realmadrid.png",
        },
        {
          tid: 4,
          image: "atmadrid.png",
        },
        {
          tid: 5,
          image: "mancity.png",
        },
        {
          tid: 6,
          image: "barcelona.png",
        },
      ]
    };
  }
};
</script>