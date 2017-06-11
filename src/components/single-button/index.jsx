import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  button: {
    fontSize: '30vmin',
    fontWeight: '900',
    width: '87vmin',
    height: '87vmin',
    backgroundSize: 'cover',
    WebkitTextFillColor: 'white',
    WebkitTextStroke: '1.5vmin black',
  },
};

const SingleButton = ({ onClick, points, image }) => {
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

export default SingleButton;

SingleButton.propTypes = {
  onClick: PropTypes.func,
  points: PropTypes.string,
  image: PropTypes.string,
};

SingleButton.defaultProps = {
  onClick: () => {},
  points: '0',
  image: '',
};
