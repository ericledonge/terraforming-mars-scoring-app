import game from '@/store/modules/game';

let state = {};
let corporationName;
let tr;
let awards;
let milestones;
let forests;
let cities;
let totalScore;
let newGame = {
  corporationName: '',
  tr: 0,
  awards: 0,
  milestones: 0,
  forests: 0,
  cities: 0,
  totalScore: 0
};

describe('Game Module', () => {
  describe('State', () => {
    describe('Given a new game', () => {
      beforeEach(() => {
        state = newGame;
      });
      it('should return a totalScore of 0', () => {
        expect(game.state.totalScore).toEqual(0);
      });
    });
  });

  describe('Getters', () => {
    describe('totalScore', () => {
      beforeEach(() => {
        state = {
          tr: 10,
          awards: 10,
          milestones: 10,
          forests: 10,
          cities: 10
        };
      });
      it('should return a totalScore of 0', () => {
        expect(game.getters.totalScore(state)).toEqual(50);
      });
    });
  });

  describe('Mutations', () => {
    describe('SET_CORPORATION_NAME', () => {
      beforeEach(() => {
        state = newGame;
        corporationName = 'Ecoline';
        game.mutations.SET_CORPORATION_NAME(state, corporationName);
      });
      it('should return corporation name', () => {
        expect(state.corporationName).toEqual(corporationName);
      });
    });
    describe('SET_TR', () => {
      tr = 55;
      beforeEach(() => {
        state = newGame;
        game.mutations.SET_TR(state, tr);
      });
      it('should return tr', () => {
        expect(state.tr).toEqual(tr);
      });
    });
    describe('SET_AWARDS', () => {
      awards = 52;
      beforeEach(() => {
        state = newGame;
        game.mutations.SET_AWARDS(state, awards);
      });
      it('should return awards', () => {
        expect(state.awards).toEqual(awards);
      });
    });
    describe('SET_MILESTONES', () => {
      milestones = 52;
      beforeEach(() => {
        state = newGame;
        game.mutations.SET_MILESTONES(state, milestones);
      });
      it('should return milestones', () => {
        expect(state.milestones).toEqual(milestones);
      });
    });
    describe('SET_FORESTS', () => {
      forests = 12;
      beforeEach(() => {
        state = newGame;
        game.mutations.SET_FORESTS(state, forests);
      });
      it('should return forests', () => {
        expect(state.forests).toEqual(forests);
      });
    });
    describe('SET_CITIES', () => {
      cities = 21;
      beforeEach(() => {
        state = newGame;
        game.mutations.SET_CITIES(state, cities);
      });
      it('should return cities', () => {
        expect(state.cities).toEqual(cities);
      });
    });
  });

  describe('Actions', () => {
    const commit = jest.fn();
    describe('setCorporationName', () => {
      beforeEach(() => {
        commit.mockReset();
        state = newGame;
        corporationName = 'Thorgate';
        game.actions.setCorporationName({ commit }, corporationName);
      });
      it('should commit the SET_CORPORATION_NAME', () => {
        expect(commit).toHaveBeenCalledWith(
          'SET_CORPORATION_NAME',
          corporationName
        );
      });
    });
    describe('setTr', () => {
      beforeEach(() => {
        commit.mockReset();
        state = newGame;
        tr = 25;
        game.actions.setTr({ commit }, tr);
      });
      it('should commit the SET_TR', () => {
        expect(commit).toHaveBeenCalledWith('SET_TR', tr);
      });
    });
    describe('setAwards', () => {
      beforeEach(() => {
        commit.mockReset();
        state = newGame;
        awards = 13;
        game.actions.setAwards({ commit }, awards);
      });
      it('should commit the SET_AWARDS', () => {
        expect(commit).toHaveBeenCalledWith('SET_AWARDS', awards);
      });
    });
    describe('setMilestones', () => {
      beforeEach(() => {
        commit.mockReset();
        state = newGame;
        milestones = 14;
        game.actions.setMilestones({ commit }, milestones);
      });
      it('should commit the SET_MILESTONES', () => {
        expect(commit).toHaveBeenCalledWith('SET_MILESTONES', milestones);
      });
    });
    describe('setForests', () => {
      beforeEach(() => {
        commit.mockReset();
        state = newGame;
        forests = 8;
        game.actions.setForests({ commit }, forests);
      });
      it('should commit the SET_FORESTS', () => {
        expect(commit).toHaveBeenCalledWith('SET_FORESTS', forests);
      });
    });
    describe('setCities', () => {
      beforeEach(() => {
        commit.mockReset();
        state = newGame;
        cities = 7;
        game.actions.setCities({ commit }, cities);
      });
      it('should commit the SET_CITIES', () => {
        expect(commit).toHaveBeenCalledWith('SET_CITIES', cities);
      });
    });
  });
});
