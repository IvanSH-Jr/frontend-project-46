import * as fs from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const makePath = (pathToFile) => path.resolve(process.cwd(), pathToFile);
const readFile = (pathToFile) => fs.readFileSync(makePath(pathToFile), 'utf8');

const getFileExt = (pathToFile) => {
  const extention = pathToFile.includes('/') ? path.extname(pathToFile.split('/').at(-1)) : path.extname(pathToFile);
  return extention;
};

export { getFixturePath, readFile, getFileExt };
