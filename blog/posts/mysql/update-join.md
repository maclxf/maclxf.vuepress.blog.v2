update-join.md

```mysql
update adi_city as c inner join adi_province as p ON p.id = c.province_id SET c.name = '123' where p.id = 1;
```

### 参考
[MySQL update join语句](https://www.yiibai.com/mysql/update-join.html)