'use strict'

//  trigger
//
//  a promise of a trigger you can fire
//
//  trigger() -> trigger
//  .fire()
//  .cancel()

export default class Trigger {
  constructor () {
    let fire
    let cancel
    const trigger = new Promise((resolve, reject) => {
      fire = resolve
      cancel = reject
    })
    trigger.fire = fire
    trigger.cancel = cancel
    return trigger
  }

  static [Symbol.hasInstance] (obj) {
    return (
      obj instanceof Promise &&
      typeof obj.fire === 'function' &&
      typeof obj.cancel === 'function'
    )
  }
}
