<template>
  <div>
    <h3 class="mb-4">Ability Scores</h3>
    <AttributeInput
      v-model="strength"
      :readonly="readonly"
      class="mb-3"
      label="Strength"/>
    <AttributeInput
      v-model="dexterity"
      :readonly="readonly"
      class="mb-3"
      label="Dexterity"/>
    <AttributeInput
      v-model="constitution"
      :readonly="readonly"
      class="mb-3"
      label="Constitution"/>
    <AttributeInput
      v-model="intelligence"
      :readonly="readonly"
      class="mb-3"
      label="Intelligence"/>
    <AttributeInput
      v-model="wisdom"
      :readonly="readonly"
      class="mb-3"
      label="Wisdom"/>
    <AttributeInput
      v-model="charisma"
      :readonly="readonly"
      class="mb-3"
      label="Charisma"/>
  </div>
</template>

<script>
import { vuexGetterSetters } from '../../helpers/vuexHelpers';

import AttributeInput from '../elements/input/AttributeInput.vue';

export default {
  name: 'AbilityScoreList',
  components: {
    AttributeInput,
  },
  props: {
    readonly: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    ...vuexGetterSetters('characters',
      ['strength', 'strength'],
      ['dexterity', 'dexterity'],
      ['constitution', 'constitution'],
      ['intelligence', 'intelligence'],
      ['wisdom', 'wisdom'],
      ['charisma', 'charisma'])
  },
}
</script>

<style scoped>

</style>