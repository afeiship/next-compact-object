import nx from '@jswork/next';

const isEmptyDefault = (value) => value == null;
const isObj = (target) => target !== null && typeof target === 'object';

nx.compactObject = function (inObject, inIsEmpty) {
  const result = {};
  const isArrayEmpty = Array.isArray(inIsEmpty) ? (v) => inIsEmpty.includes(v) : inIsEmpty;
  const isEmpty = isArrayEmpty || isEmptyDefault;

  nx.forIn(inObject, function (key, value) {
    if (isObj(value)) {
      if (!isEmpty(value)) {
        const isAry = Array.isArray(value);
        result[key] = !isAry
          ? nx.compactObject(value, isEmpty)
          : nx.map(value, function (_, vValue) {
              const isobj = typeof vValue === 'object';
              return isobj ? nx.compactObject(vValue, isEmpty) : vValue;
            });
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
