import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userCard: null,
        idCard: false,
        idCardHT: false,
        loginStatus: '登录',
    },
    mutations: {},
    actions: {},
    modules: {},
});
