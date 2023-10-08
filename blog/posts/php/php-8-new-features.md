---
title: PHP8新特性
icon: php
star: true
date: 2023-03-06
sticky: true
category:
  - 收集
tag:
  - 收集
# home: true
# footer: start footer
---

## PHP8 features

### 命名参数

```php
function say(string $name, int $age) {
echo $name, $age;
}

// 结果都是 李四19
say(name:'李四', age:19);
say(age:19, name:'李四');
```
* 简单地说，就是可以在调用函数或方法传递参数时，可以给参数取一个与函数参数或方法一样的名字；
* 调用函数或方法时，位置就可以随意放置了；
* 不向前兼容；
* 必选参数不能跳过；


## PHP8.1 features


## PHP8.2 features


### 参考
