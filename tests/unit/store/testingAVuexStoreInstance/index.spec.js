import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import cloneDeep from 'lodash.clonedeep';
import storeConfig from '@/store/storeConfig.js';

const localVue = createLocalVue();
localVue.use(Vuex);

let clonedStoreConfig;
let store;
let corporationName;
let tr;
let awards;
let milestones;
let forests;
let cities;

describe('Store Instance', () => {
  describe('Initially', () => {
    beforeAll(() => {
      clonedStoreConfig = cloneDeep(storeConfig);
      store = new Vuex.Store(clonedStoreConfig);
    });

    it('should return the list of corporations', () => {
      expect(store.getters.corporationsList).toEqual(['Thorgate', 'Ecoline']);
    });
    it('should return a totalScore of 0', () => {
      expect(store.getters['game/totalScore']).toEqual(0);
    });
  });

  describe('After entering scores', () => {
    beforeAll(() => {
      clonedStoreConfig = cloneDeep(storeConfig);
      store = new Vuex.Store(clonedStoreConfig);
      corporationName = 'Ecoline';
      tr = 10;
      awards = 10;
      milestones = 10;
      forests = 10;
      cities = 10;
      store.dispatch('game/setCorporationName', corporationName);
      store.dispatch('game/setTr', tr);
      store.dispatch('game/setAwards', awards);
      store.dispatch('game/setMilestones', milestones);
      store.dispatch('game/setForests', forests);
      store.dispatch('game/setCities', cities);
    });
    it('should return the name of the corporation', () => {
      expect(store.getters['game/corporationName']).toEqual(corporationName);
      expect(store.getters['game/tr']).toEqual(tr);
      expect(store.getters['game/awards']).toEqual(awards);
      expect(store.getters['game/milestones']).toEqual(milestones);
      expect(store.getters['game/forests']).toEqual(forests);
      expect(store.getters['game/cities']).toEqual(cities);
      expect(store.getters['game/totalScore']).toEqual(50);
    });
  });
});
