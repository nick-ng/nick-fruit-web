import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import AppContainer from './containers/app-container';
import MenuContainer from './containers/menu-container';

import { getAllFruits, updateFruits } from './stores/content-store';

const checker = ({ getState, dispatch }) => {
  const allFruits = getAllFruits(getState());
  if (allFruits === null) {
    dispatch(updateFruits());
  }
};

const getRouter = (store) => {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Router history={history}>
      <Route path="/" component={AppContainer} onEnter={() => checker(store)}>
        <IndexRoute component={MenuContainer} />
      </Route>
    </Router>
  );
};

export default getRouter;
