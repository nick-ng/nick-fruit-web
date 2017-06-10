import utils from '../utils';
import config from '../config';

const { contentfulProxyUrl } = config;

export const getAllEntries = async () => {
  const allEntries = await utils.get(`${contentfulProxyUrl}/fruit-list`);
  return allEntries;
};

export default {
  getAllEntries,
};
