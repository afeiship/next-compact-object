(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var isArray = function(target) {
    return target instanceof Array;
  };

  nx.compactObject = function(inObject) {
    var result = {};
    nx.forIn(inObject, function(key, value) {
      if (value !== null && typeof value === 'object') {
        if (isArray(value)) {
          var arrayValue = [];
          nx.forEach(value, function(vValue) {
            arrayValue.push(nx.compactObject(vValue));
          });
          result[key] = arrayValue;
        } else {
          result[key] = nx.compactObject(value);
        }
      } else {
        value && (result[key] = value);
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compactObject;
  }
})();
