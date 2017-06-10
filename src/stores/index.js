import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import cardDisplayStore from './card-display-store';

export default combineReducers({
  routing,
  cardDisplayStore,
});
