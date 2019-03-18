'use strict'

//  trigger
//
//  a promise of a trigger you can fire
//
//  trigger() -> trigger
//  .fire()
//  .cancel()

export default function trigger () {
  let _fire
  let _cancel
  const trigger = new Promise((resolve, reject) => {
    _fire = resolve
    _cancel = reject
  })
  trigger.fire = _fire
  trigger.cancel = _cancel
  return trigger
}
