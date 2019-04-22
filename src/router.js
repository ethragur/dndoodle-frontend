import Router from 'vue-router';

import CharacterSheet from './components/character/CharacterSheet.vue'

let routes = [
  { path: '/sheet', name: 'Character Sheet', component: CharacterSheet, meta: { title: 'Character Sheet' } },
];

const router = new Router({
  routes,
  hashbang: false,
  mode: 'history'
});

export default router;