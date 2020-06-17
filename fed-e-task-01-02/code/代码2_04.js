const fp = require('lodash/fp')
const {Maybe,Container} = require('./support')
let ex4 = function (n){
try {
    return Maybe.of(n)
    }catch (error){
    return isNothing.of({error:error.message})
    }
}
    