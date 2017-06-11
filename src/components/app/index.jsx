import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  appStyle: {
    padding: '0',
    margin: '0',
    fontSize: '1rem',
    fontFamily: 'Comic Sans MS',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    padding: '0',
    margin: '0',
    fontSize: '10vmin',
  },
};

export default function App({ children }) {
  return (
    <div style={styles.appStyle}>
      <h1 style={styles.title}>Fruit Chooser</h1>
      <div>{children}</div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};
