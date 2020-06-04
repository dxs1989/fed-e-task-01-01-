// 3、结合es6新语法，用最简单的方法找出数组的最小值
(function(){
    var arr = [12,34,32,89,4]
    console.log(Math.min(...arr)); 
})()


// 9 改写成promise
(function(){
    function str1(){
        return new Promise(function(resolve){
            setTimeout(()=>{
                var a="hello"
                resolve(a)
            },10)
        })
    }
    function str2(){
        return new Promise(function(resolve){
            setTimeout(()=>{
                var b = "lagou"
                resolve(b)
            })
        },10)
    }
    function str3(){
        return new Promise(function(resolve){
            setTimeout(()=>{
                var c="l love you"
                resolve(c)
            },10)
        })
    }
    Promise.all(
        [
            str1(),
            str2(),
            str3()
        ]
    ).then(result=>{
        const arr =result
        let str=""
        for(let item of arr){
            str+=item
        }
        console.log(str)
    })
})()