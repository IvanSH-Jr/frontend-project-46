import stylish from './stylish.js';
import plain from './plain.js';

const formatter = (val, format) => {
  console.log(format)
  switch(format) {
    case 'stylish':
        return stylish(val);
    case 'plain':
        return plain(val);
    default:
        throw new Error(`This format is unknown - ${format}`);
  }
};

export default formatter;