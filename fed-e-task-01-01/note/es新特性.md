带标签的模板字符串
const name="tom"
const gender=true
function myTag(strings,name,gender){
return
}
const str = myTag`hello worls ${name},${gender}`



字符串的扩展方法
includes('a')  判断字符串中是否包含某个字符
startWith('a') 判断字符串是否以a 开头
endWith('a')  判断字符串结尾是否包含某个字符



参数默认值
没有传递实际参数时，传递的默认值
function foo(bar,enable=true){
XXXXX
}



剩余参数  ...
function(...args){  //参数必须出现在形参的最后一位
console.log(args)
}
foo(1,2,3,4)



展开数组 spread
const arr=[1,2,3,4]
console.log(...arr)



对象扩展方法
Object.assign(target对象，源对象)  
其返回值(全新对象）===目标对象
Object.is() 判断两个值是否相等


proxy
new Proxy(参数，{
get(target,property){}
set(target property,value){}
})

//Reflect API 内部封装api  统一操作对象
//Reflect.get()
//Reflect.has()拥有某个属性
//Reflect.deleteProperty()删除某个属性
//Reflect.ownKeys()所有属性名



Class 类
class Person{
constructor(name){
this.name=name
say(){
console.log('hi,i am ${this.name}')
}
static create(name){// 静态方法 static 关键词
return new Person(name)
}
}
}
const person1=new Person('tom')
person1.say()
const tom=Person.create('tom')
tom.say()



类的继承  extends
   class Stdudent extends Person{
        constructor(name,age){
            super(name)
            this.age=age
        }
        hell(){
        super.say()
        console.log(`my school number is ${this.number}`)
        }
    }
        const s =new Student('jack','100')
        s.hell()


Set 数据结构
       const s = new Set()
        s.add(1).add(2).add(3).add(2)
        s.forEach(i=>console.log(i))
        console.log(s.size) //数组长度
         console.log(s.delete(3))//删除某个元素
        console.log(s.clear)//清除集合里的全部元素
        //数组去重
        const arr=[1,2,3,4,5,4,1]
        const result=new Set(arr)
        console.log(result)


Map 数据结构
const m = new Map()
const tom = {
name: 'tom'
}
m.set(tom,90) //添加新值
console.log(m)
console.log(m.get(tom)) //获得新值
m.forEach((value,key)=>{
console.log(value,key)
})



Symbol---一种全新的原始数据类型，主要作用是为对象添加独一无二的属性。
Symbol()===Symbol()  //false
const obj={}
obj[Symbol()]='123'
obj[Symbol()]='aaa'
console.log(obj)
//Symbol 补充
const s1=Symbol.for('foo') 
const s2=Symbol.for('foo')
console.log(s1===s2)//true
Symbol.for(true)===Symbol.for('true') //true 会进行隐式转换



For of 循环
拿到数组中每个元素  for(const item of arr) 可以breake 终止循环

可迭代接口 Iterator
const set = new Set(['a','b','c'])
const interator = set[Symbol.iterator]()
console.log(interator.next())


生成器
     //惰性执行，调用一次才执行一行代码
   function * foo(){
       console.log('111')
       yield 100
       console.log('222')
       yield 200
   }
   const generator=foo()
   console.log(generator.next()) //111,{value:100,done:false}
   console.log(generator.next()) //111,{value:100,done:false}  222,{value:200,done:false}



ES2016概述(新增特性)
Arr.includes()  返回bool值，查询数组中是否包含某个元素
Console.log(2**10) //指数运算符



ES2017概述（新特性）
//Object.value ===========================
    console.log(Object.value(obj)) //返回对象的所有值['value1','value2']
    //Object.entries
    console.log(Object.entries(obj)) //以数组方式返回对象中所有键值对
    //Object.getOwnPropertyDescriptors

