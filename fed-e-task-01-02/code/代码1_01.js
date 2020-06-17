//获取最后一条数据的属性值

const fp = require('lodash/fp')
const cars=[
    {name:'Ferrari',horsepower:660,dollar:70000,in_stock:true},
    {name:'Aston',horsepower:650,dollar:64800,in_stock:false},
    {name:'Jaguar',horsepower:525,dollar:12300,in_stock:false},
    {name:'Audi',horsepower:650,dollar:114200,in_stock:true},
]
const fn = fp.flowRight(fp.prop('in_stock',fp.last),fp.last(cars))
console.log(fn(cars))