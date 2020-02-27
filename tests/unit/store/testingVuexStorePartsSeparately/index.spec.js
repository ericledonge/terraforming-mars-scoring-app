import store from '@/store/index';

let state;
let corporationsList;

describe('Store', () => {
  describe('Getters', () => {
    describe('corporationsList', () => {
      beforeEach(() => {
        corporationsList = ['Thorgate', 'Ecoline'];
        state = {
          corporationsList
        };
      });
      it('should return the list of corporations', () => {
        expect(store.getters.corporationsList).toEqual(corporationsList);
      });
    });
  });
});
