<template>
  <div class="flex items-centered">
    <label
      class="w-3/5"
      v-text="label"
      :for="label">
    </label>
    <input
      class="w-1/5 text-center cursor-default"
      :name="label"
      :value="value"
      :readonly="isReadonly"
      max="30"
      min="0"
      type="number"
      @input="$emit('input', $event.target.value)"
      @keydown.prevent
    >
    <span class="w-1/5 text-center cursor-default">
      {{ modifier }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AttributeInput',
  props: {
    value: {
      type: [Number, String],
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
    },
    modifier() {
      let num = Math.floor((Number(this.value) -10) / 2);
      return num > 0
        ? `+${num}`
        : num;
    }
  }
};
</script>

<style scoped>

</style>