<template>
  <div class="flex items-centered">
    <label
      class="w-4/5"
      v-text="label"
      :for="label">
    </label>
    <input
      class="w-1/5 text-center cursor-default"
      :name="label"
      :value="value"
      :readonly="isReadonly"
      type="number"
    >
  </div>
</template>

<script>
export default {
  name: 'AttributeInput',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      required: true,
    },
    readonly: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      edit: false,
    };
  },
  computed: {
    isReadonly() {
      return this.edit && this.readonly;
    }
  }
};
</script>

<style scoped>

</style>