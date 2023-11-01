import yaml from 'js-yaml';

const fileParser = (data, ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
      return yaml.load(data);
    case '.yml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown extention of file: '${ext}'!`);
  }
};

export default fileParser;
