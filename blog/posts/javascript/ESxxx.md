---
title: ESxxx
icon: javascript
star: true
date: 2022-09-26
sticky: true
category:
  - 有用实践
tag:
  - 介绍
  - 有用实践
# home: true
# footer: start footer
---

目的：收集一些有用但是还未用的使用技巧，之所以叫 `ESxxx` 可能包含后续ES6-----ESXXX的各种函数以及使用技巧

<!-- more -->

## ESxxx


### 解构&赋值
```
let { a: a1, b = 1, c} = d || {}
```
1. 解构的对象要有默认值且不能为 undefined 和 null
2. 解构同时可以赋值,注意赋值是赋到后面那一个（a1）上
3. 解构可以给定默认值

### 数据合并
```
let a = [1, 2]
let b = [3, 4]
let c = a.contact(b)
// 可以这样，同时还去了重
// let c = [...new Set([...a, ...b])]

let a = {foo: 123}
let b = {bar: 456}
let obj = Object.assign({}, a, b);
// 可以这样
// let c = {...a, ...b}

```

### 字符串拼接
`${}`可以在里面写任意js表达式

### includes 使用
includes 返回 true false
```
let a = [1, 2, 3]
a.includes(2);

```

### find 找到后就不遍历数据
```
let foo = [1, 2, 3, 4, 5];foo.find(item => {console.log(item); return item == 2})
1
2
```

### flat 数组扁平化
```
const numbers = [1, 2, [3, 4, [5, 6]]];
// Considers default depth of 1
numbers.flat();
> [1, 2, 3, 4, [5, 6]]
// With depth of 2
numbers.flat(2);
> [1, 2, 3, 4, 5, 6]
// Executes two flat operations
numbers.flat().flat();
> [1, 2, 3, 4, 5, 6]
// Flattens recursively until the array contains no nested arrays
numbers.flat(Infinity)
> [1, 2, 3, 4, 5, 6]
```


### for...of 和 for...in
* for...of 用于遍历一个迭代器，如数组：
```
    let letters = ['a', 'b', 'c'];
    letters.size = 3;
    for (let letter of letters) {
        console.log(letter);
    }
    // 结果: a, b, c
```
* for...in 用来遍历对象中的属性：
```
    let stus = ["Sam", "22", "男"];
    for (let stu in stus) {
        console.log(stus[stu]);
    }
    // 结果: Sam, 22, 男
```


### ?. 获取对象属性值
> 可选链操作符使用  ?.  来表示，可以判断操作符之前属性是否有效，从而链式读取对象的属性或返回 undefined 。
作用与 . 操作符类似。不同的是 ?. 如果对象链上的引用是 null 或者 undefined 时， . 操作符会像前言中的例子抛出一个错误，而 ?. 操作符则会按照短路计算的方式进行处理，返回 undefined。可选链操作符也可用于函数调用，如果操作符前的函数不存在，也将会返回 undefined

```
const name = obj && obj.name;
// 可以这样
const name = obj?.name;
```

### ?? 空置合并运算符
`let a = b ?? 9`当b不为undefined或null,就使用??右侧的值

### ??= 空赋值运算符
`(x ??= y)` 仅在 x 是 null 或 undefined 时对其赋值



### 参考
- [你会用ES6，那倒是用啊！](https://juejin.cn/post/7016520448204603423#heading-0)
- [ES6可选链操作符](https://juejin.cn/post/7021056632406687757)
- [ES6中js的运算符（?.、?:、? ?、? ?=、）](https://www.jianshu.com/p/ac1787f6c50f)
- [【js】es6 可选链 ? . 和 空值合并 ? ? 运算符使对象多层判断更简洁](https://blog.csdn.net/ShIcily/article/details/121673976)



