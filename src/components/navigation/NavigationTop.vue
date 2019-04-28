<template>
  <div
    :class="`bg-${color} p-2`">
    <h2>Top Navbar</h2>
  </div>
</template>

<script>
export default {
  name: 'NavigationTop',
  props: {
    color: {
      type: String,
      default: 'white',
    }
  }
};
</script>

<style scoped>

</style>