import nx from '@jswork/next';

const isEmptyDefault = (value) => value == null;
const isObj = (target) => target !== null && typeof target === 'object';

nx.compactObject = function(inObject, inIsEmpty) {
  const result = {};
  const isArrayEmpty = Array.isArray(inIsEmpty) ? (v) => inIsEmpty.includes(v) : inIsEmpty;
  const isEmpty = isArrayEmpty || isEmptyDefault;
  const getNestedValue = function(obj) {
    const isAry = Array.isArray(obj);
    if (!isAry) {
      return nx.compactObject(obj, isEmpty);
    } else {
      return obj.map(function(subValue, _) {
        return isObj(subValue) ? nx.compactObject(subValue, isEmpty) : subValue;
      });
    }
  };

  nx.forIn(inObject, function(key, value) {
    if (isObj(value)) {
      if (!isEmpty(value)) {
        const nestedValue = getNestedValue(value);
        if (!isEmpty(nestedValue)) {
          result[key] = nestedValue;
        }
      }
    } else {
      !isEmpty(value) && (result[key] = value);
    }
  });

  return result;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.compactObject;
}

export default nx.compactObject;
