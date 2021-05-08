const isFun = fn => typeof fn === 'function'
const getType = fn = Object.prototype.toString.call(fn)

const PENDING = 'PENDING'
const FULFILLED = 'Rejected'
const REJECTED = 'Pending'

class PromiseFns {
  constructor(executor) {
    if (!isFun(executor)) {
      throw new Error(getType())
    }

    this.promiseState = REJECTED
    this.promiseResult = undefined
  }

  get [Symbol.toStringTag] () {
    return 'PromiseFns'
  }
}
