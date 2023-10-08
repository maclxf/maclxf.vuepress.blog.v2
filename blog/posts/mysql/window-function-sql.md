---
title: MYSQL窗口函数
icon: Mysql
star: true
date: 2023-03-24
sticky: true
category:
  - 收集
tag:
  - 收集
# home: true
# footer: start footer
---
## 特别注意仅支持MYSQL8.0
## 以下SQL可在https://sqlzoo.net/wiki/SELECT_basics执行
```
    SELECT name, population,continent , sum(population) over (PARTITION BY continent) total_population FROM world
    where continent = 'europe'
    SELECT name, population,continent , sum(population) over (PARTITION BY continent ORDER BY population DESC) total_population FROM world
    where continent = 'europe'
```
解释第一句话 查询欧洲各国人口数量以及该洲的人口总数，结果每一行除了展示国家名称，人口数量，大洲名称，还会展示该洲的人口总数，如果想对各国人口数排序要把 order by 加到外面
解释第二句话 查询欧洲各国人口数量以及该洲的人口总数，结果每一行除了展示国家名称，人口数量，大洲名称，还会展示累加每行国家的人口总数






### 参考
https://tonydong.blog.csdn.net/article/details/106306454
https://juejin.cn/post/7031157682434211853
https://sqlzoo.net/wiki/SELECT_basics