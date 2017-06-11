import { createReducer } from 'redux-immutablejs';
import { createSelector } from 'reselect';
import Immutable from 'immutable';

import { xingkaiParseInt } from '../utils';
import { getAllEntries } from '../services/contentful';
import constants from './constants';

// Constants
const {
    UPDATE_CONTENT,
} = constants;

// Initial State
const initialState = Immutable.fromJS({
  fruits: null,
});

// Selectors
const contentState = state => state.contentStore;

export const getAllFruits = createSelector(
  contentState,
  c => c.get('fruits'),
);

// Actions
export const updateFruits = () => async (dispatch) => {
  const fruits = Immutable.fromJS(await getAllEntries());
  dispatch({
    type: UPDATE_CONTENT,
    payload: {
      fruits: fruits.sort((a, b) => xingkaiParseInt(a.get('points')) - xingkaiParseInt(b.get('points'))),
    },
  });
};

// Reducers
export default createReducer(initialState, {
  [UPDATE_CONTENT]: (state, action) => state.merge(Immutable.fromJS(action.payload)),
});
