const jsonCompareResult1 = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

const yamlCompareResult1 = `{
  follow: false
  host: hexlet.io
  proxy: 123.234.53.22
- timeout: 50
- type: 1000
+ type: 1200
  rule: no-rules
}`;

export { jsonCompareResult1, yamlCompareResult1 };
