import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import genDiff from '../src/index.js';
import {
  jsonCompareResult1,
  yamlCompareResult1,
  nestedResult,
  plainResult,
  jsonResult,
} from '../__fixtures__/test-result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let jsonFile1;
let jsonFile2;
let jsonFile4;
let jsonFile5;

let yamlFile1;
let yamlFile2;
let yamlFile4;
let yamlFile5;

beforeAll(() => {
  jsonFile1 = getFixturePath('filejson1.json');
  jsonFile2 = getFixturePath('filejson2.json');
  jsonFile4 = getFixturePath('filejson4.json');
  jsonFile5 = getFixturePath('filejson5.json');

  yamlFile1 = getFixturePath('fileyml1.yml');
  yamlFile2 = getFixturePath('fileyml2.yml');
  yamlFile4 = getFixturePath('fileyml4.yml');
  yamlFile5 = getFixturePath('fileyml5.yml');
});
test('compare two json files', () => {
  expect(genDiff(jsonFile1, jsonFile2)).toEqual(jsonCompareResult1);
  expect(genDiff(jsonFile4, jsonFile5)).toEqual(nestedResult);
  expect(genDiff(jsonFile4, jsonFile5, 'plain')).toEqual(plainResult);
  expect(genDiff(jsonFile4, jsonFile5, 'json')).toEqual(jsonResult);
});

test('compare two yaml files', () => {
  expect(genDiff(yamlFile1, yamlFile2)).toEqual(yamlCompareResult1);
  expect(genDiff(yamlFile4, yamlFile5)).toEqual(nestedResult);
  expect(genDiff(yamlFile4, yamlFile5, 'plain')).toEqual(plainResult);
  expect(genDiff(yamlFile4, yamlFile5, 'json')).toEqual(jsonResult);
});
