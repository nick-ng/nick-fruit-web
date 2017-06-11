import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import cardDisplayStore from './card-display-store';
import contentStore from './content-store';

export default combineReducers({
  routing,
  cardDisplayStore,
  contentStore,
});
