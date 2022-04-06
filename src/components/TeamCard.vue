<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          MANCHESTER UNITED
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Old Trafford Stadium
        </v-list-item-title>
        <v-list-item-subtitle>Sir Matt Busby Way, Trafford, Greater Manchester, England</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ><v-img
          contain
          max-height="70%"
          src="../../assets/logo512/manu.png"
        ></v-img></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Player List
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>