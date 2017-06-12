import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import App from '../components/app';
import Loader from '../components/loader';

import { getAllFruits } from '../stores/content-store';

const AppContainer = ({ gameId, children, fruits }) => (
  <App
    gameId={gameId}
  >
    {fruits ? children : <Loader />}
  </App>
);

AppContainer.propTypes = {
  gameId: PropTypes.string,
  children: PropTypes.node,
  fruits: ImmutablePropTypes.map,
};

AppContainer.defaultProps = {
  gameId: null,
  children: null,
  fruits: null,
};

export default connect(
  state => ({
    fruits: getAllFruits(state),
  }),
  () => ({}),
)(AppContainer);
