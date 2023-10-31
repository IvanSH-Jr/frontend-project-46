import * as fs from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const makePath = (pathToFile) => path.resolve(process.cwd(), pathToFile);
const readFile = (pathToFile) => fs.readFileSync(makePath(pathToFile), 'utf8');

test.each([
  ['file1.json', 'file2.json', 'stylish', 'result/result1.txt'],
  ['file1.json', 'file2.json', 'plain', 'result/result2.txt'],
  ['file1.json', 'file2.json', 'json', 'result/result3.txt'],
  ['file1.yml', 'file2.yml', 'stylish', 'result/result1.txt'],
  ['file1.yml', 'file2.yml', 'plain', 'result/result2.txt'],
  ['file1.yml', 'file2.yml', 'json', 'result/result3.txt'],
])('Compare %p and %p, result in %s format', (file1, file2, format, result) => {
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), format))
    .toEqual(readFile(getFixturePath(result)));
});
