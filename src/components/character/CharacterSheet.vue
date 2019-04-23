<template>
  <Holder>
    <div
      class="text-red">
      <h2>{{ activeCharacter.name }}</h2>
      <p>ID: {{ authUserId }}</p>
    </div>
    <div>
      <AttributeInput
        label="Str"
        v-model/>
    </div>
  </Holder>
</template>

<script>

import { mapGetters } from 'vuex';

import Holder from '../templates/Holder.vue'

import AttributeInput from '../elements/input/AttributeInput.vue'

export default {
  name: 'CharacterSheet',
  components: {
    Holder,
    AttributeInput,
  },
  computed: {
    ...mapGetters('auth', [
      'authUserId',
    ]),
    ...mapGetters('characters', [
      'activeCharacter',
    ]),
    character() {
      return this.activeCharacter;
    }
  }
};
</script>

<style scoped>

</style>