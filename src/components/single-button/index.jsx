import React from 'react';
import PropTypes from 'prop-types';

const mysteryPineapple = require('./mystery_pineapple.gif');

const styles = {
  button: {
    fontSize: '30vmin',
    fontFamily: 'Comic Sans MS',
    fontWeight: '900',
    width: '90vmin',
    height: '90vmin',
    backgroundSize: 'cover',
    WebkitTextFillColor: 'white',
    WebkitTextStroke: '1.5vmin black',
  },
};

const SingleButton = ({ onClick, points, showFront, image }) => {
  const smallImage = `${image}?fm=jpg&fl=progressive&w=600&h=600&fit=thumb`;
  const buttonStyle = Object.assign({}, styles.button, { backgroundImage: `url("${mysteryPineapple}")` });
  if (showFront) {
    Object.assign(buttonStyle, { backgroundImage: `url("${smallImage}")` });
  }
  return (
    <button
      onClick={onClick}
      style={buttonStyle}
    >
      {showFront ? points : '?'}
    </button>
  );
};

export default SingleButton;

SingleButton.propTypes = {
  onClick: PropTypes.func,
  points: PropTypes.string,
  showFront: PropTypes.bool.isRequired,
  image: PropTypes.string,
};

SingleButton.defaultProps = {
  onClick: () => {},
  points: '?',
  image: '',
};
