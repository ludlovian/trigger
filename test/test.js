'use strict'

import test from 'ava'
import Trigger from '../src'

const delay = x => new Promise(resolve => setTimeout(resolve, x))

test('create trigger', async t => {
  const trg = new Trigger()

  t.true(trg instanceof Promise)
  t.true(trg instanceof Trigger)
  t.is(typeof trg.fire, 'function')
  t.is(typeof trg.cancel, 'function')
})

test('firing with a value', async t => {
  const trg = new Trigger()
  let count = 0
  let value
  const cleanup = trg.then(v => {
    count++
    value = v
  })

  t.is(count, 0)

  trg.fire(17)

  await cleanup

  t.is(count, 1)
  t.is(value, 17)

  trg.fire(9)
  await trg

  t.is(count, 1)
  t.is(value, 17)

  trg.cancel()

  await trg
  t.is(count, 1)
})

test('cancel', async t => {
  const trg = new Trigger()

  let count = 0
  let reason

  const cleanup = trg.then(
    () => t.fail(),
    e => {
      count++
      reason = e
    }
  )

  const err = new Error('oops')
  trg.cancel(err)

  await cleanup
  t.is(count, 1)
  t.is(reason, err)

  await t.throwsAsync(() => trg)
})
