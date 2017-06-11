import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

// import css from './styles.css';
import MenuButton from '../menu-button';
import SingleButton from '../single-button';

const styles = {
  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

const Menu = ({ fruits, currentFruit, onChangeCard }) => {
  let singleFruit = null;
  if (currentFruit) {
    singleFruit = fruits.get(currentFruit);
  }
  return (
    <div style={styles.menu}>
      {currentFruit && <SingleButton
        points={singleFruit.get('points')}
        image={singleFruit.get('image').get('url')}
        onClick={() => onChangeCard('')}
      />}
      {fruits && !currentFruit && fruits.toSeq().map(fruit => (<MenuButton
        key={fruit.get('points')}
        points={fruit.get('points')}
        image={fruit.get('image').get('url')}
        onClick={() => onChangeCard(fruit.get('points'))}
      />))}
    </div>
  );
};

Menu.propTypes = {
  fruits: ImmutablePropTypes.map,
  currentFruit: PropTypes.string.isRequired,
  onChangeCard: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  fruits: null,
};

export default Menu;
