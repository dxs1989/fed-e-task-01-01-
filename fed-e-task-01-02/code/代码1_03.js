const fp = require('lodash/fp')
const cars=[
    {name:'Ferrari',horsepower:660,dollar:70000,in_stock:true},
    {name:'Aston',horsepower:650,dollar:64800,in_stock:false},
    {name:'Jaguar',horsepower:525,dollar:12300,in_stock:false},
    {name:'Audi',horsepower:650,dollar:114200,in_stock:true},
]

let _average = function (xs) {
    return fp.reduce(fp.add,0,xs) / xs.length
}
let dollar_values = fp.map(car => car.dollar_value , cars)
const averageDollarValue = fp.flowRight( _average , dollar_values)
console.log(averageDollarValue(cars))