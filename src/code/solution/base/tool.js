
/**
 * @description 深拷贝
 * @param {RegExp|Error|Date|Function|Symbol|Map|Set|Array|Object} val
 * @param {WeakMap} [hash=new WeakMap()]
 * @return {RegExp|Error|Date|Function|Symbol|Map|Set|Array|Object}
 */
function deepCloneFns(val, hash = new WeakMap()) {
  if (!val) {
    return val;
  }
  if (hash.has(val)) return hash.get(val);
  const ctor = val.constructor;
  switch (ctor) {
    case RegExp:
      return new RegExp(val);
    case Error:
      return new Error(val.message);
    case Date:
      return new Date(val.getTime());
    case Function:
      return eval(`() => ${val.toString()}`)();
    case Symbol:
      return ctor(val.toString().replace(/^Symbol\((.*)\)$/, "$1"));
    case Map:
      return new Map([...val]);
    case Set:
      return new Set([...val]);
    case Array:
      return val.map((v) => {
        return deepClone(v, hash);
      });
    case Object:
      const obj = {};
      hash.set(val, obj);
      Object.keys(val).forEach((k) => {
        obj[k] = deepClone(val[k], hash);
      });
      return obj;
    default:
      return val;
  }
}

/**
 * @description 反转数字
 * @param {Number} n
 * @return {Number} 
 */
function reverseNumberFns(n) {
  if (!n) return
  const max = 2 ** 31 - 1
  const min = - (2 ** 31)
  const result = (n > 0 ? 1 : -1) * String(n).split('').filter((n) => n !== '-').reverse().join('')
  return result > max || result < min ? 0 : result
}

/**
 * @description 实现new字符
 * @param {*} ctor
 * @return {object} 
 */
function newFns(ctor) {
  if (typeof ctor !== 'function') return
  var obj = Object.create(ctor)
  var argArr = [].split(0, 1)
  var result = ctor.call(obj, argArr)
  var isObj = typeof result === 'object'
  var isFun = typeof result === 'function'
  if (isObj || isFun) {
    return result
  }
  return obj
}

/**
 * @description 报错继续执行次数
 * @param {Function} fn
 * @param {number} n
 * @return {Function} 
 */
function withRetryFns(fn, n) {
  let retryTime = 0
  const fnRetry = (...args) => {
    new Promise((resolve => resolve(fn(...args)))).catch(error =>
      ++retryTime > n
        ? Promise.resolve(error)
        : new Promise(resolve =>
          setTimeout(() => resolve(fnRetry(...args)), 1000)
        )
    )
  }
  return fnRetry
}


/**
 * @description 验证是否是回文字符串 
 * @param {*} s
 * @return {*} 
 */
function validPalindrome(s) {
  let len = s.length
  for (let i = 0; i < len; i++) {
    // 回文字符不相等
    if (s[i] !== s[len - i - 1]) {
      // 右移左指针
      if (s[i + 1] === s[len - i - 1]) {
        // let temp = s.split('')
        // temp.splice(i, 1)
        // return temp.join(',')
        return false
        // 左移右指针
      } else if (s[i] === s[len - i - 1 - 1]) {
        // let temp = s.split('')
        // temp.splice(len - i - 1, 1)
        // return temp.join(',')
        return false
      }
    }
  }
  return true
}