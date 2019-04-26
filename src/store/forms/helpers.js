import { getters } from './characterForm';

export function generateGetters(object, key = '', attributePath = '', initial = true) {
  if(initial) {
    if(key !== '' && object.hasOwnProperty(key)) {
      object = object[key];
    }
  }
  let attributeNames = Object.keys(object);
  let getters = {};
  attributeNames.forEach((attribute) => {
    if(!Array.isArray(object[attribute]) && typeof(object[attribute]) === 'object') {
      getters = { ...getters, ...generateGetters(object[ attribute ], key, attributePath.concat(`${attribute}.`), false) }
    }
    else if(attributePath === '') {
      getters[ attribute ] = function (state) {
        return key
          ? state[key][ attribute ]
          : state[attribute];
      };
    }
    else {
      console.log('state.'.concat(key, key ? '.' : '', attributePath, attribute));
      getters[attribute] = function (state) {
        return eval('state.'.concat(key, key ? '.' : '', attributePath, attribute));
      }
    }
  });
  console.log(getters);
  return getters;
}

export function generateSetters(object, key = '', attributePath = '', initial = true) {
  if(initial) {
    if(key !== '' && object.hasOwnProperty(key)) {
      object = object[key];
    }
  }
  let attributeNames = Object.keys(object);
  let setters = {};
  attributeNames.forEach((attribute) => {
    if(!Array.isArray(object[attribute]) && typeof(object[attribute]) === 'object') {
      setters = { ...setters, ...generateSetters(object[ attribute ], key, attributePath.concat(`${attribute}.`), false) }
    }
    if(attributePath === '') {
      setters[ attribute ] = function (state, value) {
        return Vue.set(state, attribute, value);
      };
    }
    else {
      console.log('state.'.concat(key, key ? '.' : '', attributePath, attribute));
      setters[attribute] = function (state, value) {
        return Vue.set(eval('state.'.concat(key, key ? '.' : '', attributePath).slice(0, -1)), attribute, value);
      }
    }
  });
  console.log(setters);
  return setters;
}

export function generateGetSets(attributes) {
  let getSets = [];
  attributes.forEach((attribute) => {
    getSets.push([attribute, attribute]);
  });
  return getSets;
}