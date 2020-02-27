import Vue from 'vue';
import Vuex from 'vuex';
import storeConfig from '@/store/storeConfig.js';

Vue.use(Vuex);

export default new Vuex.Store(storeConfig);
