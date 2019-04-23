function initialState() {
  return {
    allCharacters: [],
    selectedCharacter: {},
    activeCharacter: {
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
    activeCharacter(state) {
      return state.activeCharacter;
    },
  },
};

export default characters;