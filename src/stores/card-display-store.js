import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import constants from './constants';

// Constants
const {
    CHANGE_CARD,
} = constants;

// Initial State
const initialState = Immutable.fromJS({
  fruit: '',
});

// Selectors
const cardDisplayState = state => state.cardDisplayStore;

export const getCurrentFruit = createSelector(
  cardDisplayState,
  c => c.get('fruit'),
);

// Actions
export const changeCard = fruit => dispatch => dispatch({
  type: CHANGE_CARD,
  payload: {
    fruit,
  },
});

// Reducers
export default createReducer(initialState, {
  [CHANGE_CARD]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
