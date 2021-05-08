/**
 * @description 快速排序
 * @param {Array<number>} arr
 * @return {Array<number>} 
 */
const quickSort = (arr) => {
  const list = [...arr]
  if (list.length < 2) return list
  const pivotIndex = Math.floor(list.length / 2)
  const pivot = list[pivotIndex]
  const [lo, hi] = list.reduce(
    ([left, right], val, i) => {
      if (val < pivot || (val === pivot && i != pivotIndex)) {
        left.push(val)
      } else if (val > pivot) {
        right.push(val)
      }
      return [left, right]
    },
    [[], []]
  );
  return [...quickSort(lo), pivot, ...quickSort(hi)];
}

/**
 * @description 笛卡尔积
 * @param {Array[]} a
 * @param {Array[]} b
 * @returns {Array[]}
 */
const cartesianProduct = (a, b) => a.reduce((p, c) => [...p, ...b.map(y => [c, y])], [])

/**
 * @description 斐波那契
 * @param {number} n
 * @returns {Array[number]}
 */
const fibonacci = (n) => Array.from({ length: n }).reduce((acc, current, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), [])