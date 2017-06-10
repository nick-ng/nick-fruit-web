import React from 'react';
import PropTypes from 'prop-types';

// import css from './styles.css';
import MenuButton from '../menu-button';

const styles = {
  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

const Menu = ({ changeCard }) => (
  <div style={styles.menu}>
    <MenuButton points={1} onClick={changeCard} />
    <MenuButton points={2} onClick={changeCard} />
    <MenuButton points={3} onClick={changeCard} />

    <MenuButton points={5} onClick={changeCard} />
    <MenuButton points={8} onClick={changeCard} />
    <MenuButton points={13} onClick={changeCard} />

    <MenuButton points={20} onClick={changeCard} />
    <MenuButton points={40} onClick={changeCard} />
    <MenuButton points={100} onClick={changeCard} />
  </div>
);

Menu.propTypes = {
  currentFruit: PropTypes.string.isRequired,
  changeCard: PropTypes.func.isRequired,
};

export default Menu;
