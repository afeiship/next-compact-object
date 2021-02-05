/*!
 * name: @jswork/next-compact-object
 * description: Deep compact object for next.
 * homepage: https://github.com/afeiship/next-compact-object
 * version: 1.0.0
 * date: 2021-02-05 22:51:04
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.compactObject = function (inObject) {
    var result = {};
    nx.forIn(inObject, function (key, value) {
      if (value !== null && typeof value === 'object') {
        result[key] = !Array.isArray(value)
          ? nx.compactObject(value)
          : nx.map(value, function (_, vValue) {
              return nx.compactObject(vValue);
            });
      } else {
        value != null && (result[key] = value);
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compactObject;
  }
})();
