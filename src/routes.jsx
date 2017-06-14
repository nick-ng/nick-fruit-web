import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import AppContainer from './containers/app-container';
import MenuContainer from './containers/menu-container';

import { getAllFruits, updateFruits } from './stores/content-store';
import { getCurrentCard } from './stores/card-display-store';

const loadFruits = ({ getState, dispatch }) => {
  const allFruits = getAllFruits(getState());
  if (allFruits === null) {
    dispatch(updateFruits());
  }
};

const checkChosen = ({ getState }) => {
  const chosenFruit = getCurrentCard(getState());
  if (!chosenFruit) {
    browserHistory.push('');
  }
};

const getRouter = (store) => {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Router history={history}>
      <Route path="/" component={AppContainer} onEnter={() => loadFruits(store)}>
        <IndexRoute component={MenuContainer} />
        <Route
          path="/:points"
          component={MenuContainer}
          onEnter={() => {
            loadFruits(store);
            checkChosen(store);
          }}
        />
      </Route>
    </Router>
  );
};

export default getRouter;
