const jsonCompareResult1 = `{
....-follow: false
.... host: hexlet.io
....-proxy: 123.234.53.22
....-timeout: 50
....+timeout: 20
....+verbose: true
}`;

const jsonEmptyResult2 = '{}';

const jsonCompareResult3 = `{
....+host: hexlet.io
....+timeout: 20
....+verbose: true
}`;

const nestedResult = `{
.... common: {
........+follow: false
........ setting1: Value 1
........-setting2: 200
........-setting3: true
........+setting3: null
........+setting4: blah blah
........+setting5: {
............ key5: value5
........}
........ setting6: {
............ doge: {
................-wow: 
................+wow: so much
............}
............ key: value
............+ops: vops
........}
....}
.... group1: {
........-baz: bas
........+baz: bars
........ foo: bar
........-nest: {
............ key: value
........}
........+nest: str
....}
....-group2: {
........ abc: 12345
........ deep: {
............ id: 45
........}
....}
....+group3: {
........ deep: {
............ id: {
................ number: 45
............}
........}
........ fee: 100500
....}
}`;

const yamlCompareResult1 = `{
.... follow: false
.... host: hexlet.io
.... proxy: 123.234.53.22
.... rule: no-rules
....-timeout: 50
....-type: 1000
....+type: 1200
}`;

const yamlEmptyResult2 = '{}';

const yamlCompareResult3 = `{
....-follow: false
....-host: hexlet.io
....-proxy: 123.234.53.22
....-rule: no-rules
....-timeout: 50
....-type: 1000
}`;

export {
  jsonCompareResult1,
  jsonEmptyResult2,
  jsonCompareResult3,
  yamlCompareResult1,
  yamlEmptyResult2,
  yamlCompareResult3,
  nestedResult,
};
