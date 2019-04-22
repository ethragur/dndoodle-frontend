
function initialState() {
  return {
    authUserId: null
  };
}

const auth = {
  namespaced: true,
  state: initialState(),
  getters: {
    authUserId: (state) => {
      return state.authUserId;
    }
  },
  mutations: {
    setId(state, userId) {
      state.authUserId = userId;
    },
  },
  actions: {
    fetchAuthUser({ commit }, id) {
      //TODO: Get actual logged in user
      commit('setId', id);
    },
  },
};

export default auth;