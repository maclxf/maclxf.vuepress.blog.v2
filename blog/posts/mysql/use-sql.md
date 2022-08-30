---
title: 用过的SQL
icon: Mysql
star: true
date: 2022-08-30
sticky: true
category:
  - 收集
tag:
  - 收集
# home: true
# footer: start footer
---

## 连表修改
修改 city 表 name 字段为 123 当 这些值对应的province 的 id = 1时
```mysql
update adi_city as c inner join adi_province as p ON p.id = c.province_id SET c.name = '123' where p.id = 1;
```

## 按照某字段的指定部分进行分组
```mysql
SELECT left(parcel_number, 2), Length(parcel_number), count(*) FROM `adi_invoic_record` GROUP by left(parcel_number, 2)
```
> left:返回最左边的n个字符的字符串str，或NULL如果任何参数是NULL。
> Length:返回字符串str的长度，以字节为单位。 一个多字节字符算作多字节。这意味着，对于包含五个二字节字符，length()返回10，而CHAR_LENGTH()返回5。



### 参考
[MySQL update join语句](https://www.yiibai.com/mysql/update-join.html)