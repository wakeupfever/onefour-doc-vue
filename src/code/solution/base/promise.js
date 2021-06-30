const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<Promise>'),
    )
  }
  if (x instanceof PromiseFns) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

/**
 * 1.核心逻辑实现
 * 2.加入异步操作
 * 3.实现then方法多次调用
 * 4.实现then链式调用
 * 5.then链式调用识别promise
 * 6.捕获错误及then链式调用其他状态
 * @export
 * @class PromiseFns
 */
export class PromiseFns {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }

  static resolve(parameter) {
    if (parameter in PromiseFns) {
      return parameter
    }
    return new PromiseFns((resolve) => resolve(parameter))
  }

  static reject(reason) {
    return new PromiseFns((resolve, reject) => reject(reason))
  }

  // promise 的状态
  status = PENDING

  // 成功之后的值
  value = null

  // 失败之后的原因
  reason = null

  // 存储成功回调函数
  onFulfilledCallback = []

  // 存储失败回调函数
  onRejectedCallback = []

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value)
      }
    }
  }

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.status = reason
      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason)
      }
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }
    const promise = new PromiseFns((resolve, reject) => {
      if (this.status === FULFILLED) {
        queueMicrotask(() => {
          const x = onFulfilled(this.value)
          resolvePromise(promise, x, resolve, reject)
        })
      } else if (this.status === REJECTED) {
        onRejected(this.value)
      } else if (this.status === PENDING) {
        this.onFulfilledCallback.push(() => {
          queueMicrotask(() => {
            try {
              const x = onFulfilled(this.value)
              resolvePromise(promise, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        this.onRejectedCallback.push(() => {
          try {
            const x = onRejected(this.reason)
            resolvePromise(promise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
    })
    return promise
  }
}

console.log(PromiseFns)
