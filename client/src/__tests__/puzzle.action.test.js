import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import { SWAP, SHUFFLE } from '../constants';
import { shuffleNumbers, swapNumbers } from '../actions/puzzle.actions';

const middleWare = [];

const mockStore = configureMockStore(middleWare);
let store;

describe('Puzzle Action Tests', () => {
  store = mockStore({});

  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch SHUFFLE action', () => {
    store.dispatch(shuffleNumbers());
    expect(store.getActions()).toContainEqual({ type: SHUFFLE });
  });

  it('should dispatch SWAP action', () => {
    store.dispatch(swapNumbers());
    expect(store.getActions()).toContainEqual({ type: SWAP });
  });
});
