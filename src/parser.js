import yaml from 'js-yaml';
import { readFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';

const createPath = (file) => resolve(process.cwd(), file);
const readContent = (file) => readFileSync(createPath(file), 'utf-8');
const getFileExt = (file) => {
  const extention = file.includes('/') ? extname(file.split('/').at(-1)) : extname(file);
  return extention;
};

const fileParser = (fileName) => {
  const pathToFile = createPath(fileName);
  const fileExt = getFileExt(pathToFile);

  if (fileExt === '.json') return JSON.parse(readContent(pathToFile));

  if (fileExt === '.yaml' || fileExt === '.yml') {
    return yaml.load(readContent(pathToFile));
  }

  throw Error(`This type is unknown - ${fileExt}!`);
};

export default fileParser;
