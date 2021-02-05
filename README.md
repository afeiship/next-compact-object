# next-compact-object
> Deep compact object for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-compact-object
```

## usage
```js
import '@jswork/next-compact-object';

const obj1 = {
  name: 'fei',
  age: 100,
  duature: 0,
  items: [
    { test: 123, arr1: 12, test: 0, fa: false },
    { name: 'fei', str1: undefined, str2: false, active: false, test: 0, nillValue: null }
  ]
};

nx.compactObject(obj1);

/*
{
  name: 'fei',
  age: 100,
  duature: 0,
  items: [
    { test: 123, arr1: 12, test: 0, fa: false },
    { name: 'fei', str2: false, active: false, test: 0 }
  ]
}
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-compact-object/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-compact-object
[version-url]: https://npmjs.org/package/@jswork/next-compact-object

[license-image]: https://img.shields.io/npm/l/@jswork/next-compact-object
[license-url]: https://github.com/afeiship/next-compact-object/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-compact-object
[size-url]: https://github.com/afeiship/next-compact-object/blob/master/dist/next-compact-object.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-compact-object
[download-url]: https://www.npmjs.com/package/@jswork/next-compact-object
