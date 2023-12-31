import { createStore } from 'vuex';

export default createStore({
  state: {
    name: '',
    email: '',
    mobileNumber: '',
    affiliation: '',
    isEmailValid: true,
    isNumberValid: true,
    searchText: '',
    eventName: '',
    eventId: '',
    imageUrlDesktop: '',
    imageUrlMobile: ''
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
    },
    setSearchText(state, payload) {
      state.searchText = payload.value;
    },

    setEventDetails(state, payload) {
      state.eventName = payload.eventName;
      state.eventId = payload.eventId;
      state.imageUrlDesktop = payload.imageUrlDesktop;
      state.imageUrlMobile = payload.imageUrlMobile;
    }
  },
  actions: {
    resetState({ commit }) {
      commit({
        type: 'setIsEmailValid',
        value: true
      });

      commit({
        type: 'setIsNumberValid',
        value: true
      });

      commit({
        type: 'setName',
        value: ''
      });

      commit({
        type: 'setEmail',
        value: ''
      });

      commit({
        type: 'setMobileNumber',
        value: ''
      });

      commit({
        type: 'setAffiliation',
        value: ''
      });
    }
  },
  modules: {}
});
