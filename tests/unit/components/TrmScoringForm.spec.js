import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TrmScoringForm from '@/components/TrmScoringForm.vue';
import storeConfig from '@/store/storeConfig.js';

const localVue = createLocalVue();
localVue.use(Vuex);

let store;

describe('TrmScoringForm', () => {
  beforeEach(() => {
    store = new Vuex.Store(storeConfig);
  });
  it('should ', () => {
    expect(true).toBe(true);
  });
});
