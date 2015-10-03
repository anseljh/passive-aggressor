# Passive Aggressor

**Passive Aggressor** is a passive voice obliterator for contracts in [Common Form](https://github.com/commonform). It will be a support module for [commonform-critique](https://github.com/commonform/commonform-critique).

So far, Passive Aggressor relies on the simple [passive-voice](https://github.com/btford/passive-voice) module by [btford](https://github.com/btford).

License: Apache 2.0

## Tests

```javascript
var passiveAggressor = require('passive-aggressor')
var assert = require('assert')

assert.deepEqual(
  passiveAggressor({ content: [ 'Bob was hit by a bus.' ] }),
  [ { message: 'The phrase "was hit" is passive voice.',
    level: 'info',
    path: [ 'content', 0 ],
    source: 'passive-aggressor',
    url: null } ]
)
```
