import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';

import Menu from '../components/menu';

import { getAllFruits } from '../stores/content-store';
import { showCardFront, flipCard, changeCard, getCurrentCard } from '../stores/card-display-store';

const MenuContainer = props => <Menu {...props} />;

MenuContainer.propTypes = {
  fruits: ImmutablePropTypes.map,
  showFront: PropTypes.bool.isRequired,
  onFlipCard: PropTypes.func.isRequired,
  onChangeCard: PropTypes.func.isRequired,
  card: PropTypes.string,
};

MenuContainer.defaultProps = {
  fruits: null,
  card: null,
};

export default connect(
  state => ({
    fruits: getAllFruits(state),
    showFront: showCardFront(state),
    card: getCurrentCard(state),
  }),
  dispatch => ({
    onFlipCard: card => dispatch(flipCard(card)),
    onChangeCard: card => dispatch(changeCard(card)),
  }),
)(MenuContainer);
