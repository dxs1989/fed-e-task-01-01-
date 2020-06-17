const fp = require('lodash/fp')
const {Maybe,Container} = require('./support')
let xs = Container.of(
    ['do','ray','me','fa','so','la','ti','do']
)
let ex2 = xs.map(
    fp.first(this._value)
  )
