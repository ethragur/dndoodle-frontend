<template>
  <div
    :class="`bg-${color} px-${paddingX} py-${paddingY} rounded ` + computedClass"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HolderFrame',
  props: {
    color: {
      type: String,
      default: 'white'
    },
    margin: {
      type: Boolean,
      default: false
    },
    paddingX: {
      type: Number,
      default: 3
    },
    paddingY: {
      type: Number,
      default: 3
    }
  },
  computed: {
    computedClass() {
      return this.margin ? 'mb-4' : '';
    }
  }
};
</script>