/*!
 * name: @jswork/next-compact-object
 * description: Deep compact object for next.
 * homepage: https://github.com/afeiship/next-compact-object
 * version: 1.0.1
 * date: 2021-02-06 10:30:43
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_IS_EMPTY = function (value) {
    return value == null;
  };

  nx.compactObject = function (inObject, inIsEmpty) {
    var result = {};
    var isEmpty = inIsEmpty || DEFAULT_IS_EMPTY;
    nx.forIn(inObject, function (key, value) {
      if (value !== null && typeof value === 'object') {
        if (!isEmpty(value)) {
          result[key] = !Array.isArray(value)
            ? nx.compactObject(value, isEmpty)
            : nx.map(value, function (_, vValue) {
                return nx.compactObject(vValue, isEmpty);
              });
        }
      } else {
        !isEmpty(value) && (result[key] = value);
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compactObject;
  }
})();
