var nx = require('next-js-core2');
require('../src/next-compact-object');

test('nx.compactObject', function() {
  var obj1 = { name: 'fei', str1: undefined, str2: false, active: false, test: 0, nillValue: null };
  var result = nx.compactObject(obj1);
  expect(result).toEqual({ name: 'fei' });
});
