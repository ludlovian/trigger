# trigger
Promise you can fire at will

A simple version of a `defer`

## API

`t = new Trigger()`

Produces a trigger, which is an unresolved native `Promise`, with two methods attached for later resolution/rejection.
This allows you to schedule code as follows:

```
t = new Trigger()
t.then(<do something later>)
...
[some time later]
t.fire()
...
```

### .fire

`.fire(result)` resolves the promise with the result (fires the trigger)

### .cancel

`.cancel(reason)` rejects the promise with the reason
