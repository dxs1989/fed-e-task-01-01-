//sanitizeNames(["Hello World"] => ["hello_world"])
const fp = require('lodash/fp')
let _underscore = fp.replace(/\W+/g , '_')
const sanitizeNames = fp.flowRight(
    //这题思路不是很清晰，所以空着没写
)
console.log(sanitizeNames(['Hello World']))