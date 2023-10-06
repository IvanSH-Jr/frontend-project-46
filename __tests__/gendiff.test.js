import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import genDiff from '../src/index.js';
import {
  jsonCompareResult1,
  jsonEmptyResult2,
  jsonCompareResult3,
  yamlCompareResult1,
  yamlEmptyResult2,
  yamlCompareResult3,
} from '../__fixtures__/test-result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let jsonFile1;
let jsonFile2;
let jsonFile3;

let yamlFile1;
let yamlFile2;
let yamlFile3;

beforeAll(() => {
  jsonFile1 = getFixturePath('filejson1.json');
  jsonFile2 = getFixturePath('filejson2.json');
  jsonFile3 = getFixturePath('filejson3.json');

  yamlFile1 = getFixturePath('fileyml1.yml');
  yamlFile2 = getFixturePath('fileyml2.yml');
  yamlFile3 = getFixturePath('fileyml3.yml');
});
test('compare two json files', () => {
  expect(genDiff(jsonFile1, jsonFile2)).toEqual(jsonCompareResult1);
  expect(genDiff(jsonFile3, jsonFile3)).toEqual(jsonEmptyResult2);
  expect(genDiff(jsonFile3, jsonFile2)).toEqual(jsonCompareResult3);
});

test('compare two yaml files', () => {
  expect(genDiff(yamlFile1, yamlFile2)).toEqual(yamlCompareResult1);
  expect(genDiff(yamlFile3, yamlFile3)).toEqual(yamlEmptyResult2);
  expect(genDiff(yamlFile1, yamlFile3)).toEqual(yamlCompareResult3);
});
