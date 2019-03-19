function trigger () {
  let _fire;
  let _cancel;
  const trigger = new Promise((resolve, reject) => {
    _fire = resolve;
    _cancel = reject;
  });
  trigger.fire = _fire;
  trigger.cancel = _cancel;
  return trigger
}

export default trigger;
//# sourceMappingURL=index.mjs.map
