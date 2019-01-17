# next-compact-object
> Deep compact object for next.

## install:
```bash
npm install -S afeiship/next-compact-object --registry=https://registry.npm.taobao.org
```

## usage:
```js
var obj1 = {
  name: 'fei',
  age: 100,
  duature: 0,
  items: [
    { test: 123, arr1: 12, test: 0, fa: false },
    { name: 'fei', str1: undefined, str2: false, active: false, test: 0, nillValue: null }
  ]
};
var result = nx.compactObject(obj1);
/*
{
  name: 'fei',
  age: 100,
  items: [{ arr1: 12 }, { name: 'fei' }]
}
*/
```
