const fp = require('lodash/fp')
const {Maybe,Container} = require('./support')
let safeProp = fp.curry(function (x,o){
    return Maybe.of(o[x])
})
let user = {id:2,name:'albert'}
let ex3  // 这题没有思路，不会写