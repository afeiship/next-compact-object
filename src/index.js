import nx from '@jswork/next';

const DEFAULT_IS_EMPTY = function (value) {
  return value == null;
};

nx.compactObject = function (inObject, inIsEmpty) {
  const result = {};
  const isEmpty = inIsEmpty || DEFAULT_IS_EMPTY;
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

export default nx.compactObject;
