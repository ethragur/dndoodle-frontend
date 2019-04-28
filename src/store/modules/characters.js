import { form } from '../forms/characterForm';
import { generateGetters, generateSetters } from '../forms/helpers';

function initialState() {
  return {
    allCharacters: [],
    character: {
      ...form,
    },
  }
}

const characters = {
  namespaced: true,
  state: initialState(),
  getters: {
    character(state) {
      return state.character;
    },
    ...generateGetters(initialState(), 'character'),
  },
  mutations: {
    selectedCharacter(state, character) {
      Vue.set(state, 'selectedCharacter', character);
    },
    ...generateSetters(initialState(), 'character'),
  }
};

export default characters;