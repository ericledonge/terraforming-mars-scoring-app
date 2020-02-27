const state = {
  corporationName: '',
  tr: 0,
  awards: 0,
  milestones: 0,
  forests: 0,
  cities: 0,
  totalScore: 0
};

const getters = {
  totalScore: state =>
    parseInt(state.tr) +
      parseInt(state.awards) +
      parseInt(state.milestones) +
      parseInt(state.forests) +
      parseInt(state.cities) || 0
};

const mutations = {
  SET_CORPORATION_NAME(state, corporationName) {
    state.corporationName = corporationName;
  },
  SET_TR(state, tr) {
    state.tr = tr;
  },
  SET_AWARDS(state, awards) {
    state.awards = awards;
  },
  SET_MILESTONES(state, milestones) {
    state.milestones = milestones;
  },
  SET_FORESTS(state, forests) {
    state.forests = forests;
  },
  SET_CITIES(state, cities) {
    state.cities = cities;
  }
};

const actions = {
  setCorporationName({ commit }, corporationName) {
    commit('SET_CORPORATION_NAME', corporationName);
  },
  setTr({ commit }, tr) {
    commit('SET_TR', tr);
  },
  setAwards({ commit }, awards) {
    commit('SET_AWARDS', awards);
  },
  setMilestones({ commit }, milestones) {
    commit('SET_MILESTONES', milestones);
  },
  setForests({ commit }, forests) {
    commit('SET_FORESTS', forests);
  },
  setCities({ commit }, cities) {
    commit('SET_CITIES', cities);
  }
};

const game = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default game;
