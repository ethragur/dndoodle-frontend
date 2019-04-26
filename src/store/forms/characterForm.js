import { generateGetters, generateSetters, generateGetSets } from './helpers';

export const form = {
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
};

export const getters = generateGetters(form);

//export const mutations = generateSetters(form);

export const getSets = generateGetSets(Object.keys(getters));