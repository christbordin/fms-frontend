<template>
  <div>
      {{teamList}}
  </div>
</template>

<script>
import { getTeams } from "../api";
export default {
  data() {
    return {
      teamList: null
    };
  },

  async created() {
    const res = await getTeams(this.$route.params.uid)
    if(res.status === 200) {
      this.teamList = res.data
    }
  },
};
</script>

<style>

</style>