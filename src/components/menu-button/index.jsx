import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  button: {
    fontSize: '5vmin',
    width: '29vmin',
    height: '29vmin',
    margin: '1vmin',
  },
};

const MenuButton = (props) => {
  const {
    onClick,
    points,
  } = props;

  return (
    <button
      onClick={onClick}
      style={styles.button}
    >
      {points}
    </button>
  );
};

export default MenuButton;

MenuButton.propTypes = {
  onClick: PropTypes.func,
  points: PropTypes.number,
};

MenuButton.defaultProps = {
  onClick: () => {},
  points: 0,
};
