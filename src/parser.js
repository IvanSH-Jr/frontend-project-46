import yaml from 'js-yaml';

const fileParser = (file, ext) => {
  if (ext === '.json') return JSON.parse(file);

  if (ext === '.yaml' || ext === '.yml') {
    return yaml.load(file);
  }

  throw Error(`This type is unknown - ${ext}!`);
};

export default fileParser;
