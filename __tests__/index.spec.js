(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.compactObject : pure object', function () {
      var obj1 = {
        name: 'fei',
        str1: undefined,
        str2: false,
        active: false,
        test: 0,
        nillValue: null
      };
      var result = nx.compactObject(obj1);
      expect(result).toEqual({
        name: 'fei',
        str2: false,
        active: false,
        test: 0
      });
    });

    test('nx.compactObject : with array', function () {
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
      // console.log(result);
      expect(result).toEqual({
        name: 'fei',
        age: 100,
        duature: 0,
        items: [
          { test: 123, arr1: 12, test: 0, fa: false },
          { name: 'fei', str2: false, active: false, test: 0 }
        ]
      });
    });

    test('customize is emtpy should be worked', () => {
      var obj = {
        name: '1',
        test: {},
        abc: true
      };
      var isEmpty = function (value) {
        if (typeof value === 'object') {
          return !Object.keys(value).length;
        }
        return false;
      };

      expect(nx.compactObject(obj, isEmpty)).toEqual({
        name: '1',
        abc: true
      });
    });

    test('A value is primitve array', () => {
      const obj = {
        multiple: true,
        value: [1, 3]
      };

      const res = nx.compactObject(obj);
      expect(res).toEqual(obj);
    });

    test('compact if value has -1', () => {
      const obj = {
        n1: 0,
        n2: 100,
        n3: -1
      };
      const res = nx.compactObject(obj, (v) => v === -1);
      expect(res).toEqual({ n1: 0, n2: 100 });
    });

    test('compact if isEmptyFn is an array', () => {
      const obj = {
        n1: 0,
        n2: 100,
        n3: -1,
        n4: null,
        n5: undefined,
        n6: true
      };

      const cptIf = nx.compactObject(obj, [null, undefined, -1]);
      expect(cptIf).toEqual({ n1: 0, n2: 100, n6: true });
    })
  });
})();
