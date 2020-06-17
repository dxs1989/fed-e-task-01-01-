const fp = require('lodash/fp')
const {Maybe,Container} = require('./support')
let maybe = Maybe.of([5,6,1])
let ex1 = Maybe
    .map(
        fp.map(i => console.log(i),this._value)
    )
    .map(
        fp.add(fp.map,1)
    )
console.log(ex1)