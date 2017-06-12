import React from 'react';

import animations from './animations.css';

const nickOne = require('./nick_one.jpg');

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
  },
  image: {
    borderRadius: '50%',
  },
};

const Loader = () => (
  <div style={styles.container}>
    <img
      className={animations.spinner}
      style={styles.borderRadius}
      alt=""
      src={nickOne}
    />
  </div>
);

export default Loader;
