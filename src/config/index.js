import prodSettings from './prod';

const defaultSettings = {
  // contentfulProxyUrl: 'http://localhost:4001',
  contentfulProxyUrl: 'https://nick-fruit-proxy-s.herokuapp.com',
};

export default ((env) => {
  switch (env) {
    case 'production':
      return Object.assign({}, defaultSettings, prodSettings);
    default:
      return defaultSettings;
  }
})(process.env.NODE_ENV);
