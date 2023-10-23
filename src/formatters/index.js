import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatter = (val, format) => {
  switch (format) {
    case 'stylish':
      return stylish(val);
    case 'plain':
      return plain(val);
    case 'json':
      return json(val);
    default:
      throw new Error(`This format is unknown - ${format}`);
  }
};

export default formatter;
