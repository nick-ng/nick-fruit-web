import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import constants from './constants';

// Constants
const {
    FLIP_CARD,
} = constants;

// Initial State
const initialState = Immutable.fromJS({
  showFront: false,
});

// Selectors
const cardDisplayState = state => state.cardDisplayStore;

export const showCardFront = createSelector(
  cardDisplayState,
  c => c.get('showFront'),
);

// Actions
export const flipCard = () => (dispatch, getState) => dispatch({
  type: FLIP_CARD,
  payload: {
    showFront: !showCardFront(getState()),
  },
});

export const flipCardDown = () => dispatch => dispatch({
  type: FLIP_CARD,
  payload: {
    showFront: false,
  },
});

// Reducers
export default createReducer(initialState, {
  [FLIP_CARD]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
