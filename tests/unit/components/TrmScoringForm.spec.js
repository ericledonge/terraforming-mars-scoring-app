import { createLocalVue, shallowMount } from '@vue/test-utils';

// https://github.com/posva/vuex-mock-store
import { Store } from 'vuex-mock-store';

import TrmScoringForm from '@/components/TrmScoringForm';

const localVue = createLocalVue();

// create the Store mock
const store = new Store({
  state: {
    corporationsList: ['Thorgate', 'Ecoline'],
    game: {
      corporationName: '',
      tr: 0,
      awards: 0,
      milestones: 0,
      forests: 0,
      cities: 0,
      totalScore: 0
    }
  }
});

let initialStore = {
  state: {
    corporationsList: ['Thorgate', 'Ecoline'],
    game: {
      corporationName: '',
      tr: 0,
      awards: 0,
      milestones: 0,
      forests: 0,
      cities: 0,
      totalScore: 0
    }
  }
};

const wrapperFactory = () => {
  return shallowMount(TrmScoringForm, {
    localVue,
    mocks: {
      $store
    }
  });
};

describe('TrmScoringForm', () => {
  describe('When the page is loaded', () => {
    beforeEach(() => {});
    it('should ', () => {
      expect(true).toBe(true);
    });
  });
});
