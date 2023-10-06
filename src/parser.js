import yaml from 'js-yaml';

const fileParser = (fileData, extention) => {
  if (extention === 'json') return JSON.parse(fileData);

  if (extention === 'yaml' || extention === 'yml') {
    return yaml.load(fileData);
  }

  throw Error(`This type is unknown - ${extention}!`);
};

export default fileParser;
