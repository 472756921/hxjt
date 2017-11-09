<template>
  <div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'gl_teamDatile',
    data(){
      return{
        teamID: '',

      };
    },
    created(){
      this.teamID = this.$route.params.teamID;
    },
  };
</script>

<style scoped>

</style>
