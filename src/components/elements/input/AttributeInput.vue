<template>
  <div>
    <label
      v-text="label"
      :for="label">
    </label>
    <input
      :id="label"
      :name="label"
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