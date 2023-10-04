import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

import genDiff from '../src/index.js';
import { jsonCompareResult1 } from '../__fixtures__/test-result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

let jsonFile1;
let jsonFile2;

beforeAll(() => {
  jsonFile1 = getFixturePath('file1.json');
  jsonFile2 = getFixturePath('file2.json');
});
test('compare to json files, files have common structure', () => {
  expect(genDiff(jsonFile1, jsonFile2)).toEqual(jsonCompareResult1);
});
