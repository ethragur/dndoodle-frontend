<template>
  <Holder>
    <div
      class="mt-5">
      <p>do gea shu</p>
      <p>ID: {{ authUserId }}</p>
    </div>
  </Holder>
</template>

<script>

import { mapGetters } from 'vuex';

import Holder from '../templates/Holder.vue'

export default {
  name: 'CharacterSheet',
  components: {
    Holder,
  },
  computed: {
    ...mapGetters('auth', [
      'authUserId',
    ]),
  }
};
</script>

<style scoped>

</style>