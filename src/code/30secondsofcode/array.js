/**
 * @description 确保该值不是undefined或null使用Array.prototype.includes()
 * @description 比较constructor值上的属性type以检查提供的值是否属于指定的type
 * @param {*} type
 * @param {*} val
 */
export const is = (type, val) =>
  ![, null].includes(val) && val.constructor === type

is(Array, [1]) // true
is(ArrayBuffer, new ArrayBuffer()) // true
is(Map, new Map()) // true
is(RegExp, /./g) // true
is(Set, new Set()) // true
is(WeakMap, new WeakMap()) // true
is(WeakSet, new WeakSet()) // true
is(String, '') // true
is(String, new String('')) // true
is(Number, 1) // true
is(Number, new Number(1)) // true
is(Boolean, true) // true
is(Boolean, new Boolean(true)) // true

/**
 * @description 使用Array.from()以产生所需的长度的阵列，Array.prototype.fill()与期望的值来填充它。
 * @description 省略最后一个参数 ，val以使用默认值0
 * @param {*} n
 * @param {number} [val=0]
 */
export const initializeArrayWithValues = (n, val = 0) =>
  Array.from({ length: n }).fill(val)

initializeArrayWithValues(5, 2) // [2, 2, 2, 2, 2]

/**
 * @description 通过索引确定数组的执行元素
 * @description 如果索引是负数按照倒叙来访问
 * @param {*} list
 * @param {*} n
 * @return {*}
 */
export const nthArray = (list, n) => {
  if (n > 0) return list[n]
  let len = list.length
  return list[len + n]
}

/**
 * @description 判断数组是升序/降序，升序 1 降序 -1 其他 0
 * @param {*} arr
 */
const isSorted = (arr) => {
  if (arr.length <= 1) return 0
  const direction = arr[1] - arr[0]
  for (let i = 2; i < arr.length; i++) {
    console.log(arr[i] - arr[i - 1], direction, 'direction')
    if ((arr[i] - arr[i - 1]) * direction < 0) return 0
  }
  return Math.sign(direction)
}

isSorted([0, 1, 2, 2]) // 1
isSorted([4, 3, 2]) // -1
isSorted([4, 3, 5]) // 0
isSorted([4]) // 0

/**
 * @description 数组合集
 * @param {*} a
 * @param {*} b
 * @return {*}
 */
export const intersection = (a, b) => {
  const s = new Set(b)
  return [...new Set(a)].filter((x) => s.has(x))
}

intersection([1, 2, 3], [4, 3, 2]) // [2, 3]

/**
 * @description isDescending 升序/降序 找到对应的位置返回
 * @param {*} arr
 * @param {*} n
 */
export const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1]
  const index = arr.filter((t) => (isDescending ? t >= n : t <= n))
  return index === -1 ? arr[arr.length - 1] : dex
}

/**
 * @description 数组和除以长度
 * @param {*} arr
 */
export const average = (...arr) => arr.reduce((c, p) => c + p, 0) / arr.length

/**
 * @description 随机数组内索引位置
 * @param {*} [...arr]
 * @return {*}
 */
export const shuffle = ([...arr]) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}

/**
 * @description 数组差集/合集
 * @param {*} a
 * @param {*} b
 */
export const uniqueSymmetricDifference = (a, b) =>
  // [...a, ...b].filter((n) => !a.includes(n) || !b.includes(n))
  [...a, ...b].filter((n) => a.includes(n) && b.includes(n))

/**
 * @description 统计数组内某一个值出现的次数
 * @param {*} arr
 * @param {*} val
 */
export const countOccurrences = (arr, val) =>
  arr.reduce((p, c) => (c === val ? (p += 1) : p), 0)

/**
 * @description 矩阵
 * @param {*} w
 * @param {*} h
 * @param {*} val
 */
export const initialize2DArray = (w, h, val) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val))

/**
 * @description 按照指定长度分割数组
 * @param {*} arr
 * @param {*} n
 */
export const chunk = (arr, n) =>
  Array.from({ length: Math.ceil(arr.length / n) }, (_, i) =>
    arr.slice(i * n, i * n + n),
  )

/**
 * @description 数组比对是否相同
 * @param {*} a
 * @param {*} b
 * @return {*}
 */
export const haveSameContents = (a, b) => {
  for (const v of new Set(a, b)) {
    let aLen = a.filter((n) => n === v).length
    let bLen = b.filter((n) => n === v).length
    if (aLen !== bLen) return false
  }
  return true
}

/**
 * @description 根据传入 args 的值生成每一层的矩阵信息
 * @param {*} val
 * @param {*} args
 */
export const initializeNDArray = (val, ...args) => {
  console.log(args.length, args[0])
  let result =
    args.length === 0
      ? val
      : Array.from({ length: args[0] }).map(() =>
          initializeNDArray(val, ...args.slice(1)),
        )
  return result
}

/**
 * @description 判断 b 数组内 是否包含 a
 * @param {*} a
 * @param {*} b
 */
export const isContainedIn = (a, b) =>
  [...new Set([...a, ...b])].length === b.length
