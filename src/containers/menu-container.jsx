import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from '../components/menu';

const MenuContainer = () => (
  <Menu />
);

MenuContainer.propTypes = {
};

MenuContainer.defaultProps = {
};

export default connect(
  () => ({}),
  () => ({}),
)(MenuContainer);
