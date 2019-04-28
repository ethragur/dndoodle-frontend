<template>
  <div class="flex items-centered mb-3">
    <span class="w-3/5">
      {{ displayName }}
    </span>
    <span class="w-1/5 text-center">
      {{ proficiency }}
    </span>
    <span class="w-1/5 text-center">
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SkillDisplay',
  props: {
    value: {
      type: [Number, String],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    proficiency: {
      type: String,
      required: true,
    }
  },
  computed: {
    displayName() {
      let str =`${this.name.charAt(0).toUpperCase()}${this.name.slice(1)}`;
      return str.replace(/([A-Z])/g, ' $1').trim()
    }
  }
};
</script>

<style scoped>

</style>