# ES6总结

##  一、概述

### 1、什么是 ECMA

### 2、什么是 ECMAScript

 ### 3、什么是 ECMA-262

### 4、ECMA-262 历史

### 5、谁在维护 ECMA-262
### 6、为什么要学习 ES6
### 7、ES6 兼容性

## 二、ES6 新特性

1. let 和 const 关键字
1.1 let
1.2 let 案例
1.3 const
1.4 解构赋值
2. 模板字符串
3. 对象的简化写法
4. 箭头函数
5. 函数参数默认值
6. rest参数
7. 扩展运算符
8. Symbol
9. 迭代器
10. 生成器
11. Promise
12. 集合
    12.1 Set
    12.2 Map
13. Class
    13.1 静态成员
    13.2 构造函数继承
    13.3 Class类继承
    13.4 子类对父类方法的重写
    13.5 get和set设置
    14 数值扩展
    15.对象方法扩展
16. 模块化
16.1 暴露语法
16.1.1. 统一暴露
16.1.2. 默认暴露(多变量暴露）
16.1.3 单变量暴露
16.2 引入语法
16.2.1. 通用导入方式
16.2.2. 解构赋值方式
16.2.3. 简便形式（只针对默认暴露）
16.3 模块化方式2

一、概述
1、什么是 ECMA
ECMA（European Computer Manufacturers Association）中文名称为欧洲计算机制造商协会，这个
组织的目标是评估、开发和认可电信和计算机标准。1994 年后该组织改名为 Ecma 国际；

2、什么是 ECMAScript
ECMAScript 是由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言
来自百度百科

3、什么是 ECMA-262
Ecma 国际制定了许多标准，而 ECMA-262 只是其中的一个，所有标准列表查看

4、ECMA-262 历史
ECMA-262（ECMAScript）历史版本查看网址

5、谁在维护 ECMA-262
TC39（Technical Committee 39）是推进 ECMAScript 发展的委员会。其会员都是公司（其中主要是浏
览器厂商，有苹果、谷歌、微软、因特尔等）。TC39 定期召开会议，会议由会员公司的代表与特邀专家
出席；

6、为什么要学习 ES6
ES6 的版本变动内容最多，具有里程碑意义；
ES6 加入许多新的语法特性，编程实现更简单、高效；
ES6 是前端发展趋势，就业必备技能；

7、ES6 兼容性
查看网址

参考地址：ECMAScript 6 入门 – 阮一峰


二、ES6 新特性
1. let 和 const 关键字
1.1 let
let 关键字用来声明变量，使用 let 声明的变量有以下几个特点：

let a; // 单个声明
let b,c,d; // 批量声明
let e = 100; // 单个声明并赋值
let f = 521, g = 'iloveyou', h = []  // 批量声明并赋值
1
2
3
4
不允许重复声明；
let a
let a = 12  // a已经声明，此处为错误用法！
1
2
块儿级作用域（局部变量）；
{
    let fruit='apple'
}
console.log(fruit) //error

// 在if()中同理
1
2
3
4
5
6
不存在变量提升；
// 什么是变量提升：就是在变量创建之前使用
//（比如输出：输出的是默认值），let不存在，var存在

console.log(people1)   // 可输出默认值
console.log(people2)  // 报错：Uncaught ReferenceError: people2 is not defined
var people1 = "Maria"  // 存在变量提升
let people2 = "Jim"  // 不存在变量提升
1
2
3
4
5
6
7
不影响作用域链；
// 什么是作用域链:
// 很简单，就是代码块内有代码块，跟常规编程语言一样，
// 上级代码块中的局部变量下级可用
{
let p = "Maria" 
function fn(){
console.log(p)  // 这里是可以使用的
}
fn() 
}
1
2
3
4
5
6
7
8
9
10
1.2 let 案例
需求：点击div更换背景颜色

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div  style="width: 50px;height: 50px; margin: 10px; border: 1px solid black; "></div>
    <div  style="width: 50px;height: 50px; margin: 10px; border: 1px solid green; "></div>
    <div  style="width: 50px;height: 50px; margin: 10px; border: 1px solid yellow;"></div>
<script>
    let items=document.getElementsByTagName("div");
    for (let i=0;i<items.length;i++){
        items[i].onclick=function (){
            items[i].style.backgroundColor='pink';
        }
    }
    console.log(windows.i)  //3 
    // 当var=3的时候，点击事件开始向外层作用域找，找不到，就是windows.i，此时是3，如果是let i，具有块级作用域，所以每一次触碰事件的i都是不同的。
</script>
</body>
</html>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22


1.3 const
const 关键字用来声明常量，const 声明有以下特点：
(常量的含义是指向的对象不能修改，但是可以改变对象内部的属性)

声明必须赋初始值
// const声明常量,一经声明，则不允许修改
// const fruit  // 未赋值，报错
const fruit = "apple" 
console.log(fruit) // "apple" 
1
2
3
4
标识符一般为大写（习惯）
const FRUIT = "apple" 
console.log(FRUIT) // "apple" 
1
2
不允许重复声明
const FRUIT = "apple" 
const FRUIT = "apple" // 报错，不可重复声明
1
2
值不允许修改
当我们修饰的标识符不会被再次赋值时，就可以使用const来保证数据的安全性

const FRUIT = "apple" 
FRUIT = "banana"  // 错误
1
2
注意：对数组元素的修改和对对象内部的修改是可以的（数组和对象存的是引用地址）

const FRUIT = ['apple', 'banana', 'peach', 'orange'];
FRUIT.push('watermalen'); //不报错，常量地址没有发生变化
1
2
块儿级作用域（局部）
{
	const FRUIT = "apple" 
	console.log(FRUIT) // "apple" 
}

console.log(FRUIT) // 错误，FRUIT未定义
1
2
3
4
5
6
1.4 解构赋值
ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。
使用场景：频繁使用对象方法、数组元素，就可以使用解构赋值形式；

数组的解构
const BOOKS = ['三体','海子的诗','西游记']
let [san,hai,xi] = BOOKS 
console.log(san) // '三体'
console.log(hai)  // '孩子的诗'
console.log(xi)  // '西游记'
1
2
3
4
5
对象的解构
const ZHANGSAN = {
	name : '张三',
	age :  23 ,
	gender : '男',
	speak : function() {
		console.log("Hello,I'm ZhangSan!")
	}
}

let {name,age,gender,speak} = ZHANGSAN
console.log(name)  // '张三'
console.log(age)  //   23 
console.log(gender)  //  '男'
console.log(speak)  //  function(){...}
speak()             //  "Hello,I'm ZhangSan!"
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
注意：

在let {name,age,gender,speak} = ZHANGSAN的 { } 中，里面的变量名需要和对象中的属性名相同
可以通过let {speak} = ZHANGSAN只获取里面的speak方法，之后也是通过speak()调用

2. 模板字符串
使用一对反引号 ` ` 声明的字符串，特性如下：

里面可以直接使用换行
let str = `<ul>
			<li>第一行</li>
			<li>第二行</li>
		   </ul>`
		   
let hello = `噢早上好呀，
			海绵宝宝~`
1
2
3
4
5
6
7
变量拼接（替换/插入）
使用${变量名}定位插入的元素位置

let name = '海绵宝宝' 
let hello = `早上好呀${name}，好久不见。` 
console.log(hello)  //  早上好呀海绵宝宝，好久不见 
1
2
3

3. 对象的简化写法
ES6允许在大括号里面，直接写入变量和函数，作为对象的属性和方法,这样的书写更加简洁

let name = '海绵宝宝'
let sayHello = function() {
	console.log('早上好呀，珊迪')
}
1
2
3
4
原来：

const hello = {
	name : name,
	sayHello : sayHello,
	sayBye : function() { console.log('再见，珊迪') }
}
1
2
3
4
5
ES6：

const hello = {
	name,
	sayHello,
	sayBye() { console.log('再见，珊迪') }
}
1
2
3
4
5

4. 箭头函数
ES6允许使用箭头 =>定义函数

函数声明：

//  let fn = function() {
// 		...
//  }

let fn = (a,b) => {
	return a + b
}
// 调用函数
console.log(fn(2,3))  // 5
1
2
3
4
5
6
7
8
9
特性：

this是静态的，this始终指向函数声明时所在作用域下的this的值
function getName1(){
    console.log(this.name)
}

let getName2 = () => {
    console.log(this.name) 
}

window.name = '蛙哈哈' 
const school = {
    name: 'wahaha'
}

//直接调用
getName1()   //蛙哈哈
getName2()   //蛙哈哈

//call
getName1.call(school)   //wahaha
getName2.call(school)   //蛙哈哈
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
不能作为构造函数实例化对象
let Person = (name,age) => {
	this.name = name
	this.age = age
}
let zhangsan = new Person('张三',20)  // 错误
1
2
3
4
5
不能使用arguments 变量
let fn = () => {
	console.log(arguments) // 错误
}
fn(1,2,3) 
1
2
3
4
箭头函数的简写
(1) 省略小括号，当形参有且只有一个的时候可以省略小括号。
// let add = (n) => {
// 	 console.log(n + n)
// }
// add(3)  // 6

// 简写：
let add = n => {
	console.log(n + n)
}
add(3)  // 6
1
2
3
4
5
6
7
8
9
10
(2) 省略花括号 { }，仅当函数语句只有一条语句时。此时，'return' 也需要省略，结果即是返回值

let pow = n => n * n
console.log(pow(8))    // 64
1
2

5. 函数参数默认值
ES6允许给函数参数赋值初始值

特性：

可以给形参赋初始值，一般位置要靠后（潜规则）
function add(a,b,c=12){
    return a+b+c; 
}
let result = add (1,2) 
console.log(result) // 15
1
2
3
4
5
如果上面代码没有给 形参c赋初始值，则执行add (1,2)时，形参c没有对应的参数，默认为NaN，所以add (1,2)的执行结果为NaN

与解构赋值结合
function ap({host='127.0.0.1', username, password, port}){
    console.log(host,username,password,port)    // 
}
ap({
	host: 'localhost',
    username:'admin',
    password:'000000',
    port:3000
 })
 // 执行结果：localhost admin 000000 3000
1
2
3
4
5
6
7
8
9
10

6. rest参数
ES6引入rest参数，用于获取函数的实参，用来代替arguments

rest参数：以...为前缀，例如下面的...args

function date(...args){
    console.log(args)
}
date(1,2,3,4,5,6,7)

// 执行结果：[1, 2, 3, 4, 5, 6, 7]
1
2
3
4
5
6
function date(a,b,c,...args){
    console.log(args)
}
date(1,2,3,4,5,6,7)

// 执行结果：[4, 5, 6, 7]
1
2
3
4
5
6

7. 扩展运算符
扩展运算符... ，能将数组转换为逗号分隔的参数序列

const tfboys=['易烊千玺','王源','王俊凯']
function show(){
    console.log(arguments) 
}
show(tfboys)    // 一个参数，数组：['易烊千玺', '王源', '王俊凯']
show(...tfboys) //0: "易烊千玺"  1: "王源" 2: "王俊凯"
1
2
3
4
5
6

应用：

数组的合并
const arr1 = ['aa','bb'] 
const arr2 = ['cc','dd'] 
// const arr = arr1.concat(arr2)  // ['aa', 'bb', 'cc', 'dd']
const arr = [...arr1, ...arr2] 
console.log(arr)                 // ['aa', 'bb', 'cc', 'dd']
1
2
3
4
5
数组的克隆
const arr1 = ['a','b','c'] 
const arr2 = [...arr1] 
console.log(arr2)              // ['a', 'b', 'c']
1
2
3
如果数组里面有引用类型的数据，则整个为浅拷贝 ；否则，就是完全拷贝

将伪数组转换为真正的数组
const divs = documents.querySelectorAll('div') 
const divArr = [...divs] 
console.log(divArr)        // [div,div,div]
1
2
3

8. Symbol
ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，是一种类似于字符串的数据类型。

Symbol的值是唯一的，用来解决命名冲突的问题

Symbol值不能与其他数据进行运算

Symbol定义的对象属性不能使用for…in循环遍历，但是可以使用Reflect.ownKeys来获取对象的所有键名

特性：

创建
let s1 = Symbol('aa') 
let s2= Symbol('aa') 
console.log(s1===s2)      //false

let s3 = Symbol.for('bb') 
let s4 = Symbol.for('bb') 
comsole.log(s3===s4)     //true

1
2
3
4
5
6
7
8
不能与其他数据进行运算（不可运算、比较）
let result = s + 100   //error
let result = s > 100   //error
let result = s + s     //error
1
2
3
应用：

给对象添加方法方式一：
let game = {
    name : '超级麻利'
}
let methods = {
    up:Symbol()
    down:Symbol()
}
game[methods.up]=function(){
    console.log('跳起来了！') 
}
game[methods.down]=function(){
    console.log('蹲下去了！') 
}
console.log(game)    // name: '超级麻利',Symbol(),Symbol()
1
2
3
4
5
6
7
8
9
10
11
12
13
14
给对象添加方法方式二：
let youxi = {,
    name: '狼人杀'
    [Symbol('say')]:function(){
        console.log('我可以发言')
    },
    [Symbol('close')]:function(){
        console.log('我可以闭眼')
    }
}
console.log(youxi)    // name:'狼人杀',Symbol(say)，Symbol(close)
1
2
3
4
5
6
7
8
9
10

9. 迭代器
迭代器( lterator)是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署lterator接口，就可以完成遍历操作。

ES6创造了一种新的遍历命令for…of循环，lterator接口主要供 for…of消费
原生具备iterator接口的数据(可用for of遍历)
for ... of 和 for ... in

let arr = ['a','b','c','d']

for(let n of arr) {
	console.log(n)   // a b c d
}

for(let n in arr) {
	console.log(n)   // 0 1 2 3
}
1
2
3
4
5
6
7
8
9
迭代器原理

创建一个指针对象，指向数据结构的起始位置
第一次调用next()方法，指针自动指向数据结构第一个成员
接下来不断调用next()，指针一直往后移动，直到指向最后一个成员
每次调用next()返回一个包含value和done属性的对象
const array = ['AA','BB','CC','DD'] 
// for(let v of array){
//     console.log(v)  // 'AA','BB','CC','DD' 
//     for in保存的是键名，for of保存的是键值
// }

let iterator = array[Symbol.iterator]() 

console.log(iterator.next())  // {{value:'AA'，done:false}}
console.log(iterator.next())  // {{value:'BB'，done:false}}
console.log(iterator.next())  // {{value:'CC'，done:false}}
console.log(iterator.next())  // {{value:'DD'，done:false}}
console.log(iterator.next())  // {{value:undefined，done:true}}
1
2
3
4
5
6
7
8
9
10
11
12
13
done的值为true的时候表示循环完成了
需要自定义遍历数组的时候，要想到迭代器

10. 生成器
生成器函数是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同，是一种特殊的函数

一个generator看上去像一个函数，但可以返回多次。
generator和函数不同的是，generator由function * 定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次。
function * generator (){    //函数名和function中间有一个 * 
    yield '耳朵'      //yield是函数代码的分隔符
    yield '尾巴' 
    yield '真奇怪' 
}
let iterator = generator() 
console.log(iteretor.next())  
//{value:'耳朵',done:false} next()  // 执行第一段，并且返回yield后面的值
console.log(iteretor.next())  //{value:'尾巴',done:false}
console.log(iteretor.next())  //{value:'真奇怪',done:false}
1
2
3
4
5
6
7
8
9
10
生成器函数的参数传递
function * gen(args){
    console.log(args) 
    let one = yield 111 
    console.log(one) 
    let two = yield 222 
    console.log(two) 
    let three = yield 333 
    console.log(three) 
}

let iterator = gen('AAA') 
console.log(iterator.next()) 
console.log(iterator.next('BBB'))   //next中传入的BBB将作为yield 111的返回结果
console.log(iterator.next('CCC'))   //next中传入的CCC将作为yield 222的返回结果
console.log(iterator.next('DDD'))   //next中传入的DDD将作为yield 333的返回结果
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
实例1：用生成器函数的方式解决回调地狱问题
function one(){
    setTimeout(()=>{
        console.log('111')
        iterator.next()
    },1000)
}
function two(){
    setTimeout(()=>{
        console.log('222')
        iterator.next() 
    },2000)
}
function three(){
    setTimeout(()=>{
        console.log('333')
        iterator.next() 
    },3000)
}

function * gen(){
    yield one() 
    yield two() 
    yield three() 
}

let iterator = gen() 
iterator.next() 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
实例2：模拟异步获取数据
function one(){
    setTimeout(()=>{
        let data='用户数据' 
        iterator.next(data)
    },1000)
}
function two(){
    setTimeout(()=>{
        let data='订单数据' 
        iterator.next(data)
    },2000)
}
function three(){
    setTimeout(()=>{
        let data='商品数据' 
        iterator.next(data)
    },3000)
}

function * gen(){
    let users=yield one() 
    console.log(users)
    let orders=yield two() 
    console.log(orders)
    let goods=yield three() 
    console.log(goods)
}

let iterator = gen() 
iterator.next() 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30

11. Promise
Promise是ES6引入的异步编程的新解决方案。语法上 Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

 const p = new Promise((resolve, reject) => {
        setTimeout(()=>{
            let data='数据库数据'
            // resolve(data) 
            reject(data) 
        })
    })

p.then(function (value){   // 成功则执行第一个回调函数
    console.log(value)
},function (reason){      // 失败则执行第二个
    console.error(reason)
})
1
2
3
4
5
6
7
8
9
10
11
12
13
Promise.then()方法

const p =new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('用户数据') 
    })
});

//then（）函数返回的实际也是一个Promise对象
//1.当回调后，返回的是非Promise类型的属性时，状态为fulfilled，then（）函数的返回值为对象的成功值，如reutnr 123，返回的Promise对象值为123，如果没有返回值，是undefined

//2.当回调后，返回的是Promise类型的对象时，then（）函数的返回值为这个Promise对象的状态值

//3.当回调后，如果抛出的异常，则then（）函数的返回值状态也是rejected
let result = p.then(value => {
    console.log(value)
    // return 123 
    // return new Promise((resolve, reject) => {
    //     resolve('ok')
    // })
    throw 123
},reason => {
    console.log(reason)
})
console.log(result) 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
Promise.catch()方法

const p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject('出错啦')
    },1000)
})

p.catch(reason => {
    console.log(reason)
})
1
2
3
4
5
6
7
8
9
发送AJAX请求

//ajax请求返回一个promise
function sendAjax(url){
    return new Promise((resolve, reject) => {

        //创建对象
        const x = new XMLHttpRequest() 
    
        //初始化
        x.open('GET',url) 
    
        //发送
        x.send() 
    
        //时间绑定
        x.onreadystatechange = ()=> {
            if(x.readyState === 4 ){
                if(x.status >= 200 && x.status < 300){
                    //成功
                    resolve(x.response)
                }else {
                    //失败
                    reject(x.status)
                }
            }
        }
    })
}

//测试
sendAjax("https://api.apiopen.top/getJoke").then(value => {
    console.log(value)
},reason => {
    console.log(reason)
})
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34

12. 集合
12.1 Set
ES6提供了新的数据结构set(集合）。它类似于数组，但成员的值都是唯一的，集合实现了iterator接口，所以可以使用「扩展运算符』和「 for…of…』进行遍历

集合的属性和方法:

.size返回集合的元素个数
.add()增加一个新元素，返回当前集合
.delete()删除元素，返回boolean值
.has()检测集合中是否包含某个元素，返回boolean值
let s = new Set();
let s2 = new Set(['A','B','C','D'])

//元素个数
console.log(s2.size) 

//添加新的元素E
s2.add('E') 

//删除元素A
s2.delete('A')

//检测是否有 C
console.log(s2.has('C')) 

//清空
s2.clear()

console.log(s2) 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
应用：

let arr = [1,2,3,4,5,4,3,2,1]

//1.数组去重
let result = [...new Set(arr)]
console.log(result) 

//2.交集
let arr2=[4,5,6,5,6]
let result2 = [...new Set(arr)].filter(item => new Set(arr2).has(item))
console.log(result2) 

//3.并集
let result3=[new Set([...arr,...arr2])]
console.log(result3) 

//4.差集
let result4= [...new Set(arr)].filter(item => !(new Set(arr2).has(item)))
console.log(result4) 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
12.2 Map
ES6提供了Map数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map也实现了iterator接口，所以可以使用『扩展运算符』和「for…of…』进行遍历。

Map的属性和方法:

.size 获取Map的键值对数量（最外层）
.set(key,value) 添加键值对
.delete(key) 删除键为key的键值对
.get(key) 获取键为key的值
for...of 遍历里面的每一个键值对

let m = new Map() 
m.set('name','ran') 
m.set('change',()=>{
    console.log('改变！')
})
let key={
    school:'atguigu'
}
m.set(key,['成都','西安']) 

//size
console.log(m.size) 

//删除键为name的键值对，会返回修改后的Map集合
m.delete('name') 

//获取
console.log(m.get('change')) 

//清空
// m.clear()

//遍历里面的每一个键值对
for(let v of m){
    console.log(v) 
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27

13. Class
ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

class shouji {
    constructor(brand,price) {   // 构造器
        this.brand=brand 
        this.price=price
    }

    call(){
        console.log('我可以打电话')
    }
}

let A = new shouji('1+',1999) 
console.log(A)
1
2
3
4
5
6
7
8
9
10
11
12
13
结果：


13.1 静态成员
class Person{
    static name='手机'  // 声明静态成员变量
}
let nokia = new Person() 
console.log(nokia.name)   // undefined
1
2
3
4
5
13.2 构造函数继承
function Phone(brand,price){
    this.brand=brand 
    this.price=price 
}
Phone.prototype.call=function (){
    console.log("我可以打电话") 
}
function SmartPhone(brand,price,color,size){
    Phone.call(this,brand,price) 
    this.color=color 
    this.size=size 
}

//设置子级构造函数原型
SmartPhone.prototype=new Phone 
SmartPhone.prototype.constructor=SmartPhone 

//声明子类方法
SmartPhone.prototype.photo = function (){
    console.log('我可以玩游戏') 
}
const chuizi = new SmartPhone('锤子',2499,'黑色','5.5inch')
console.log(chuizi) 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
结果：


13.3 Class类继承
class Phone{
    constructor(brand,price) {
        this.brand=brand 
        this.price=price 

    }
    //父类的成员属性
    call(){
        console.log('我可以打电话')
    }
}
class SmartPhone extends Phone{
    constructor(brand,price,color,size) {
        super(brand,price) 
        this.color=color 
        this.size=size 
    }
    photo(){
        console.log('拍照') 
    }

    playGame(){
        console.log('打游戏') 
    }
}
const xiaomi=new SmartPhone('小米',1999,'黑色','4.7inch')
xiaomi.call() 
xiaomi.photo() 
xiaomi.playGame() 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
结果：


13.4 子类对父类方法的重写
class Phone{
    constructor(brand,price) {
        this.brand=brand 
        this.price=price 

    }
    //父类的成员属性
    call(){
        console.log('我可以打电话')
    }
}
class SmartPhone extends Phone{
    constructor(brand,price,color,size) {
        super(brand,price) 
        this.color=color 
        this.size=size 
    }
    photo(){
        console.log('拍照') 
    }

    playGame(){
        console.log('打游戏') 
    }
    
    //重写！
    call(){
        console.log('我可以进行视频通话')
    }
}
const xiaomi=new SmartPhone('小米',1999,'黑色','4.7inch')
xiaomi.call() 
xiaomi.photo() 
xiaomi.playGame() 
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
结果：


13.5 get和set设置
class Phone{
    get price(){
        console.log("价格被读取了")
        return 'I LOVE YOU'
    }

    set price(val){
        console.log('价格被修改了')
        return val 
    }
}

//实例化对象
let s = new Phone() 
s.price=12  
console.log(s.price)   //其实是调用price方法
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
结果：



14 数值扩展
// Number.EPSILON是 JavaScript的最小精度，属性的值接近于 2.22044...E-16
function equal(a,b){
    if(Math.abs(a-b) < Number.EPSILON){
        return true 
    }else {
        return false 
    }
}

console.log(equal(0.1 + 0.2 === 0.3))  //false
console.log(equal(0.1+0.2,0.3))  //true

//二进制和八进制
let b = 0b1010  //2进制
let o = 0o777   //8进制
let d = 100     //10进制
let x = 0xff    //16进制
console.log(x)   //255

//检测一个数是否为有限数
console.log(Number.isFinite(100))   //true
console.log(Number.isFinite(100/0))   //false
console.log(Number.isFinite(Infinity))   //false

//检测一个数值是否为NaN
console.log(Number.isNaN(123))  //false

//字符串转整数
console.log(Number.parseInt('5213123love')); //5213123
console.log(Number.parseFloat('5.123123神器')); //5.123123

//判断是否为整数
console.log(Number.isInteger(5))  //true
console.log(Number.isInteger(2.5))  //false

//将小数部分抹除
console.log(Math.trunc(3.45345345345)) //3

//检测一个数到底是正数、负数、还是0
console.log(Math.sign(100)) //1
console.log(Math.sign(0))  //0
console.log(Math.sign(-123)) //-1
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
结果：



15.对象方法扩展
//1.Object.is 判断两个值是否完全相等
console.log(Object.is(120,120))  //true
console.log(Object.is(NaN,NaN))  //false

//2.Object.assign 对象的合并
const a = {
    name:'ran',
    age:12
}
const b = {
    pass:'i love you'
}
console.log(Object.assign(a,b))   //{name:'ran',age:'12',pass:'i love you'}

//3.Object.setPrototypeOf 设置原型对象 Object.getPrototypeof
const school = {
    name:'哆啦A梦'
}
const cities = {
    xiaoqu:['北京','上海']
}
Object.setPrototypeOf(school,cities)
console.log(Object.getPrototypeOf(school))  //{xiaoqu: Array(2)}
console.log(school)  //{name: "哆啦A梦"}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
结果：



16. 模块化
模块化是指将一个大的程序文件,拆分成许多小的文件，然后将小文件组合起来。

1. 模块化的好处：

防止命名冲突
代码复用
高维护性
模块化规范产品
2. ES6之前的模块化规范有：

CommonJS ====> NodeJS、Browserify
AMD ====> requireJS
CMD ====> seaJS
3. 语法：

模块功能主要有两个命令构成：export和import
export命令用于规定模块的对外接口
import命令用于输入其他模块提供的功能

// 下面js代码放在./src/js/m1.js文件中
export let school = '哆啦A梦'
export function teach(){
    console.log('教技能')
}
1
2
3
4
5
6
<!-- html代码 -->

<script type="module">  
    import * as m1 from "./src/js/m1.js" 
	console.log(m1) 
</script>
1
2
3
4
5
6
打开方式和结果：


16.1 暴露语法
16.1.1. 统一暴露
let school = '清华大学';
function findjob(){
    console.log('找工作吧');
}
//统一暴露
export {school, findjob}
1
2
3
4
5
6
<script type="module">  
    import * as m1 from "./src/js/m1.js" 
    console.log(m1) 
    console.log(m1.school)
    console.log(m1.findJob())
</script>
1
2
3
4
5
6
结果：


16.1.2. 默认暴露(多变量暴露）
//默认暴露 export default
export default {
    school:'清华大学',
    change:function(){
        console.log('可以改变人的一生！')
    }
}
1
2
3
4
5
6
7
<script type="module">  
        import * as m1 from "./src/js/m1.js" 
        console.log(m1.default) 
        console.log(m1.default.school)
        console.log(m1.default.change())
</script>
1
2
3
4
5
6
结果：


16.1.3 单变量暴露
// a.js
function add(a, b) {
    return a + b;
}
module.exports = add;
1
2
3
4
5
//  引入a.js
const add = require('./a.js');
console.log(add(10, 20));
1
2
3
16.2 引入语法
16.2.1. 通用导入方式
import * as m1 from "./src/js/m1.js"
import * as m2 from "./src/js/m2.js"
import * as m3 from "./src/js/m3.js"
1
2
3
16.2.2. 解构赋值方式
import {school,teach} from "./src/js/m1.js"
import {school as s,findJob} from "./src/js/m2.js"
import {default as m3 } from "./src/js/m3.js"
1
2
3
16.2.3. 简便形式（只针对默认暴露）
import m3 from "./src/js/m3.js"
1
16.3 模块化方式2
<script src="./src//js/app.js" type=modeule></script>
