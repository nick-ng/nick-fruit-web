import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  button: {
    fontSize: '10vmin',
    fontFamily: 'Comic Sans MS',
    fontWeight: '900',
    width: '29vmin',
    height: '29vmin',
    margin: '1vmin',
    backgroundSize: 'cover',
    WebkitTextFillColor: 'white',
    WebkitTextStroke: '0.5vmin black',
  },
};

const MenuButton = ({ onClick, points, image }) => {
  const smallImage = `${image}?fm=jpg&fl=progressive&w=600&h=600&fit=thumb`;
  return (
    <button
      onClick={onClick}
      style={Object.assign({}, styles.button, { backgroundImage: `url("${smallImage}")` })}
    >
      {points}
    </button>
  );
};

export default MenuButton;

MenuButton.propTypes = {
  onClick: PropTypes.func,
  points: PropTypes.string,
  image: PropTypes.string,
};

MenuButton.defaultProps = {
  onClick: () => {},
  points: '0',
  image: '',
};
