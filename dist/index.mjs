class Trigger {
  constructor () {
    let fire;
    let cancel;
    const trigger = new Promise((resolve, reject) => {
      fire = resolve;
      cancel = reject;
    });
    trigger.fire = fire;
    trigger.cancel = cancel;
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

export default Trigger;
