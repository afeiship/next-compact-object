(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.compactObject = function(inObject) {
    var result = {};
    nx.forIn(inObject, function(key, value) {
      value && (result[key] = value);
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.compactObject;
  }
})();
