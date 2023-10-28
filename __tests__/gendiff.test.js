import genDiff from '../src/index.js';
import { getFixturePath, readFile } from '../src/fileReader.js';

test.each([
  ['filejson1.json', 'filejson2.json', 'stylish', 'result/result1.txt'],
  ['filejson1.json', 'filejson2.json', 'plain', 'result/result2.txt'],
  ['filejson1.json', 'filejson2.json', 'json', 'result/result3.txt'],
  ['fileyml1.yml', 'fileyml2.yml', 'stylish', 'result/result1.txt'],
  ['fileyml1.yml', 'fileyml2.yml', 'plain', 'result/result2.txt'],
  ['fileyml1.yml', 'fileyml2.yml', 'json', 'result/result3.txt'],
])('Compare %p and %p with %s format', (file1, file2, format, result) => {
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), format))
    .toEqual(readFile(getFixturePath(result)));
});
