import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import Menu from '../components/menu';

import { getAllFruits } from '../stores/content-store';
import { getCurrentFruit, changeCard } from '../stores/card-display-store';

const MenuContainer = props => <Menu {...props} />;

MenuContainer.propTypes = {
  fruits: ImmutablePropTypes.map.isRequired,
  currentFruit: PropTypes.string.isRequired,
  onChangeCard: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    fruits: getAllFruits(state),
    currentFruit: getCurrentFruit(state),
  }),
  dispatch => ({
    onChangeCard: card => dispatch(changeCard(card)),
  }),
)(MenuContainer);
