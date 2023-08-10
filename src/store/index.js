import { createStore } from 'vuex';

export default createStore({
  state: {
    name: '',
    email: '',
    mobileNumber: '',
    affiliation: '',
    isEmailValid: false,
    isNumberValid: false
  },
  getters: {},
  mutations: {
    setName(state, payload) {
      state.name = payload.value;
    },
    setEmail(state, payload) {
      state.email = payload.value;
    },
    setMobileNumber(state, payload) {
      state.mobileNumber = payload.value;
    },
    setAffiliation(state, payload) {
      state.affiliation = payload.value;
    },
    setIsEmailValid(state, payload) {
      state.isEmailValid = payload.value;
    },
    setIsNumberValid(state, payload) {
      state.isNumberValid = payload.value;
    }
  },
  actions: {},
  modules: {}
});
