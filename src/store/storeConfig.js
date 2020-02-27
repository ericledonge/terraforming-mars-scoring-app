import game from '@/store/modules/game.js';

const state = {
  corporationsList: ['Thorgate', 'Ecoline']
};

const getters = {
  corporationsList: state => state.corporationsList
};

const mutations = {};

const actions = {};

const modules = {
  game
};

export default {
  state,
  getters,
  actions,
  mutations,
  modules
};
