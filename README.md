# Passive Aggressor

Passive Aggressor is a passive voice obliterator for contracts in [Common Form](https://github.com/commonform). It is an annotator module for [commonform-critique](https://github.com/commonform/commonform-critique).

So far, Passive Aggressor relies on the simple [passive-voice](https://github.com/btford/passive-voice) module by [btford](https://github.com/btford).

License: Apache 2.0

## Tests

```javascript
var passiveAggressor = require('passive-aggressor')
var assert = require('assert')

assert.deepEqual(
  passiveAggressor( { content: [ 'Bob was hit by a bus, and the bird was fed a worm by its mother.' ] } ),
  [ { message: 'The phrase "was hit" is passive voice.',
      level: 'info',
      path: [ 'content', 0 ],
      source: 'passive-aggressor',
      url: null },
    { message: 'The phrase "was fed" is passive voice.',
      level: 'info',
      path: [ 'content', 0 ],
      source: 'passive-aggressor',
      url: null } ]
)
```

From [orrick-commonform/board-resolutions.commonform](https://github.com/commonform/commonform-orrick/blob/master/board-resolutions.commonform):

```javascript
assert.deepEqual(
  passiveAggressor( { content: [ "Resolved further: That each stock sale authorized in the above resolution shall be made pursuant to a stock purchase agreement in substantially the form attached hereto as {Form(s) Of Stock Purchase Agreement}." ] } ),
  [ { message: 'The phrase "be made" is passive voice.',
      level: 'info',
      path: [ 'content', 0 ],
      source: 'passive-aggressor',
      url: null } ]
)
```
