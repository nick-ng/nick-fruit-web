import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import constants from './constants';

// Constants
const {
    CHANGE_CARD,
    FLIP_CARD,
} = constants;

// Initial State
const initialState = Immutable.fromJS({
  points: null,
  showFront: false,
});

// Selectors
const cardDisplayState = state => state.cardDisplayStore;

export const getCurrentCard = createSelector(
  cardDisplayState,
  c => c.get('points'),
);

export const showCardFront = createSelector(
  cardDisplayState,
  c => c.get('showFront'),
);

// Actions
export const changeCard = points => dispatch => dispatch({
  type: CHANGE_CARD,
  payload: {
    points,
    showFront: false,
  },
});

export const flipCard = () => (dispatch, getState) => dispatch({
  type: FLIP_CARD,
  payload: {
    showFront: !showCardFront(getState()),
  },
});

// Reducers
export default createReducer(initialState, {
  [CHANGE_CARD]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
  [FLIP_CARD]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
