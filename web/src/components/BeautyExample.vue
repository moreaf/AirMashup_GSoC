<template lang="html">
<v-btn :color="model.red">{{ model  }}</v-btn>
</template>

<script>
export default {
  props: ['model']
}
</script>

<style lang="css" scoped>
</style>
