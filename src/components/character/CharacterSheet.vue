<template>
  <div>
    <Holder margin>
      <div class="flex justify-between items-centered mb-3">
        <h2>{{ character.name }}</h2>
        <h2>{{ `Level ${character.level} ${character.class}` }}</h2>
      </div>
      <div class="flex justify-between items-centered">
        <p>
        Race
          <i class="fa fa-pen ml-4"></i>
        </p>
        <p>
          Background
          <i class="fa fa-pen ml-4"></i>
        </p>
        <p>
          Alignment
          <i class="fa fa-pen ml-4"></i>
        </p>
        <p>
          XP
          <i class="fa fa-pen ml-4"></i>
        </p>
      </div>
    </Holder>
    <div class="flex -mx-2">
      <div class="w-1/2 px-2">
        <Holder class="h-full">
          <AbilityScoreList/>
        </Holder>
      </div>
      <div class="w-1/2 px-2">
        <Holder class="h-full">
          <h3 class="mb-4">Skills</h3>
          <SkillDisplay
            v-for="(skill, skillName) in skills"
            :key="skillName"
            :value="skill"
            :proficiency="'Proficient'"
            :name="skillName" />
        </Holder>
      </div>
    </div>
  </div>
</template>

<script>
import { vuexGetterSetters } from '../../helpers/vuexHelpers';
import { getSets } from '../../store/forms/characterForm';
import Holder from '../templates/Holder.vue'

import AbilityScoreList from '../statlists/AbilityScoreList.vue'
import SkillDisplay from '../elements/display/SkillDisplay.vue';

export default {
  name: 'CharacterSheet',
  components: {
    Holder,
    AbilityScoreList,
    SkillDisplay,
  },
  data() {
    return {
      getSets: getSets,
    }
  },
  computed: {
    ...vuexGetterSetters('auth',
      'authUserId',
    ),
    ...vuexGetterSetters('characters',
      'character',
      ...getSets,
    ),
  }
};
</script>

<style scoped>

</style>