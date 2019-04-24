function initialState() {
  return {
    allCharacters: [],
    selectedCharacter: {
      id: 'c12345',
      name: 'Gaylord Effi Luschmashwonce',
      portrait: 'someurl',
      class: 'Rogue',
      level: 3,
      attributes: {
        strength: 5,
        dexterity: 5,
        constitution: 5,
        intelligence: 5,
        wisdom: 5,
        charisma: 5,
      },
      maxHp: 5,
      currentHp: 4,
      armorClass: 6,
      passivePerception: 1,
      speed: 10,
      initiative: 15,
      proficiencyBonus: 2,
    },
  }
}

const characters = {
  namespaced: true,
  state: initialState(),
  getters: {
    selectedCharacter(state) {
      return state.selectedCharacter;
    },
    strength(state) {
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
    },
  },
  mutations: {
    selectedCharacter(state, character) {
      Vue.set(state, 'selectedCharacter', character);
    },
    strength(state, value) {
      Vue.set(state.attributes, 'strength', value);
    },
    dexterity(state, value) {
      Vue.set(state.attributes, 'dexterity', value);
    },
    constitution(state, value) {
      Vue.set(state.attributes, 'constitution', value);
    },
    intelligence(state, value) {
      Vue.set(state.attributes, 'intelligence', value);
    },
    wisdom(state, value) {
      Vue.set(state.attributes, 'wisdom', value);
    },
    charisma(state, value) {
      Vue.set(state.attributes, 'charisma', value);
    },
  }
};

export default characters;