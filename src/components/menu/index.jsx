import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { browserHistory } from 'react-router';

// import css from './styles.css';
import MenuButton from '../menu-button';
import SingleButton from '../single-button';

const styles = {
  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  backButton: {
    fontSize: '5vmin',
    marginTop: '5vh',
    alignSelf: 'flex-start',
    padding: '5vmin 10vmin',
  },
};

const clickHandler = points => () => {
  browserHistory.push(points);
};

const Menu = ({ fruits, showFront, onFlipCard, params }) => {
  const currentFruit = params.points;
  let singleFruit = null;
  if (currentFruit && fruits) {
    singleFruit = fruits.get(currentFruit);
  }
  if (!singleFruit && params.points) {
    browserHistory.push('/');
    return null;
  }
  return (
    <div>
      <div style={styles.menu}>
        {singleFruit && <SingleButton
          points={singleFruit.get('points')}
          image={singleFruit.get('image').get('url')}
          showFront={showFront}
          onClick={() => onFlipCard()}
        />}
        {fruits && !singleFruit && fruits.toList().map(fruit => (<MenuButton
          key={fruit.get('points')}
          points={fruit.get('points')}
          image={fruit.get('image').get('url')}
          onClick={clickHandler(fruit.get('points'))}
        />))}
      </div>
      {singleFruit && <button
        style={styles.backButton}
        onClick={clickHandler('')}
      >
      Back
      </button>}
    </div>
  );
};

Menu.propTypes = {
  fruits: ImmutablePropTypes.map,
  showFront: PropTypes.bool.isRequired,
  onFlipCard: PropTypes.func.isRequired,
  params: PropTypes.objectOf(PropTypes.string),
};

Menu.defaultProps = {
  fruits: null,
  params: {},
};

export default Menu;
