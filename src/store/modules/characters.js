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
    //...generateGetters(initialState().attributes, 'form'),
    /*strength(state) {
      return state.selectedCharacter.attributes.strength;
    },
    dexterity(state) {
      return state.selectedCharacter.attributes.dexterity;
    },
    constitution(state) {
      return state.selectedCharacter.attributes.constitution;
    },
    intelligence(state) {
      return state.selectedCharacter.attributes.intelligence;
    },
    wisdom(state) {
      return state.selectedCharacter.attributes.wisdom;
    },
    charisma(state) {
      return state.selectedCharacter.attributes.charisma;
    },*/
  },
  mutations: {
    selectedCharacter(state, character) {
      Vue.set(state, 'selectedCharacter', character);
    },
    ...generateSetters(initialState(), 'character'),
    //strength(state, value) {
    //  Vue.set(state.attributes, 'strength', value);
    //},
    //dexterity(state, value) {
    //  Vue.set(state.attributes, 'dexterity', value);
    //},
    //constitution(state, value) {
    //  Vue.set(state.attributes, 'constitution', value);
    //},
    //intelligence(state, value) {
    //  Vue.set(state.attributes, 'intelligence', value);
    //},
    //wisdom(state, value) {
    //  Vue.set(state.attributes, 'wisdom', value);
    //},
    //charisma(state, value) {
    //  Vue.set(state.attributes, 'charisma', value);
    //},
  }
};

export default characters;