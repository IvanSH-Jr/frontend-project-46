const jsonCompareResult1 = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

const jsonEmptyResult2 = '{}';

const jsonCompareResult3 = `{
+ host: hexlet.io
+ timeout: 20
+ verbose: true
}`;

const yamlCompareResult1 = `{
  follow: false
  host: hexlet.io
  proxy: 123.234.53.22
  rule: no-rules
- timeout: 50
- type: 1000
+ type: 1200
}`;

const yamlEmptyResult2 = '{}';

const yamlCompareResult3 = `{
- follow: false
- host: hexlet.io
- proxy: 123.234.53.22
- rule: no-rules
- timeout: 50
- type: 1000
}`;

export {
  jsonCompareResult1,
  jsonEmptyResult2,
  jsonCompareResult3,
  yamlCompareResult1,
  yamlEmptyResult2,
  yamlCompareResult3,
};
