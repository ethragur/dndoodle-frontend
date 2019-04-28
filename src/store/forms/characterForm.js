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
  skills: {
    acrobatics: 5,
    animalHandling: 5,
    arcana: 5,
    athletics: 5,
    deception: 5,
    history: 5,
    insight: 5,
    intimidation: 5,
    investigation: 5,
    medicine: 5,
    nature: 5,
    perception: 5,
    performance: 5,
    persuasion: 5,
    religion: 5,
    sleightOfHand: 5,
    stealth: 5,
    survival: 5,
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