function pureDeepEqual(target) {
  target.prototype.shouldComponentUpdate = function(nextProps, nextState) {
    return !_deepEqual(this.props, nextProps) || !_deepEqual(this.state, nextState);
  };
}

function _deepEqual(o1, o2) {
  if (o1 === o2) return true;

  var arrA = Array.isArray(o1)
    , arrB = Array.isArray(o2)
    , i;

  if (arrA && arrB) {
    if (o1.length != o2.length) return false;
    for (i = 0; i < o1.length; i++)
      if (!_deepEqual(o1[i], o2[i])) return false;
    return true;
  }

  if (arrA != arrB) return false;

  if (o1 && o2 && typeof o1 === 'object' && typeof o2 === 'object') {
    var keys = Object.keys(o1);
    if (keys.length !== Object.keys(o2).length) return false;

    var dateA = o1 instanceof Date
      , dateB = o2 instanceof Date;
    if (dateA && dateB) return o1.getTime() == o2.getTime();
    if (dateA != dateB) return false;

    var regexpA = o1 instanceof RegExp
      , regexpB = o2 instanceof RegExp;
    if (regexpA && regexpB) return o1.toString() == o2.toString();
    if (regexpA != regexpB) return false;

    for (i = 0; i < keys.length; i++)
      if (!Object.prototype.hasOwnProperty.call(o2, keys[i])) return false;

    for (i = 0; i < keys.length; i++)
      if(!_deepEqual(o1[keys[i]], o2[keys[i]])) return false;

    return true;
  }

  return false;
}

module.exports = pureDeepEqual;