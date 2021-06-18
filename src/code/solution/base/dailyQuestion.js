/**
 * @description 实现指定时间后执行回调，返回 promise 包含 callback 返回值
 * @param {*} delay
 * @param {*} callback
 */
const wait = (delay = 0, callback) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(callback())
      }, delay)
    } catch (error) {
      reject(error)
    }
  })
}

const counter = (function () {
  let i = 0
  return (arr) => {
    return (i += arr.reduce((a, b) => a + b, 1))
  }
})()

/**
 * @description 早餐店刚出了一笼馒头，第一位顾客买了整笼的一半又额外多买了半个馒头，第二位顾客也买了剩下的馒头的一半且也是额外又多了半个馒头，第三位顾客刚好买了剩下的一半且额外多买了半个馒头，刚好把这一笼馒头卖完，请问，出笼的时候整笼有多少个馒头
 * x / 2 - 0.5 = 0 x = 1, (1 + 0.5) * 2 = 3, (3 + 0.5) * 2 = 7
 */
const getSum = (count, sum = 0) => {
  if (count === 0) return sum
  sum = (sum + 0.5) * 2
  return getSum(--count, sum)
}

console.log(wait, counter, getSum)

let n = 1
for (let i = 1; i < 10; i++) {
  n = (n + 1) * 2
}
