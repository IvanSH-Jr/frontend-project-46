//import yaml from 'js-yaml';

const fileParser = (fileData, extention) => {
  switch (extention) {
    case 'json':
      return JSON.parse(fileData);
    case 'yaml':
      return 'yaml';
    default:
      throw Error(`This type is unknown - ${extention}!`);
  }
};

export default fileParser;
