import Vue from 'vue';
import Vuex from 'vuex';
import TrmScoringForm from '@/components/TrmScoringForm.vue';
import storeConfig from '@/store/storeConfig.js';

describe('TrmScoringForm', () => {
  Vue.use(Vuex);
  const store = new Vuex.Store(storeConfig);
  describe('When the page loads', () => {
    it('should return a totalScore of 0', () => {
      expect(store.state.game.totalScore).toEqual(0);
    });
  });
});
