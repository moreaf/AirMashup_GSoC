<template lang="html">
  <v-component>
    {{ $route.params.pais }}
  </v-component>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route)
  }
}
</script>

<style lang="css" scoped>
</style>
