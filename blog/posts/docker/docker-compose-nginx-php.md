---
title: docker-compose 搭建 nginx-php
icon: docker
star: true
date: 2022-12-09
sticky: true
category:
  - 踩坑记
tag:
  - 介绍
  - 踩坑记一笔
# home: true
# footer: start footer
---

目的：尝试用它运行一个项目

<!-- more -->

## Docker-compose 踩坑记


### Docker-compose是什么
通过docker运行各种容器，但是一个项目往往要多个容器支持，多个容器的运行以及之间关系每次启动都要输入一堆命令过于复杂然后就有 docker-compose，编排各种docker容器的服务
> Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

### 过程
0. 文件结构
![docker-compose-file-flow](/images/docker-compose-file-flow.jpg)
1. 编写compose.yaml
2. 运行`docker-compose up -d` 启动

### docker-compose的命令
* `docker-compose up -d`       编排容器，参数-d 表示后台运行（不把启动日志输出出来）
* `docker-compose down`        停用并删除容器
* `docker-compose restart|start|stop xxx` 重启某个容器
* `docker-compose logs xxx`    View output from containers

### 附Compose.yaml
mysql在宿主机
```YAML
version: "3" # 指定compose版本， 目前主流版本3.x，支持docker1.13.0及以上的版本
services: # 定义服务信息
    nginx: # nginx和php: 用户自定义，表示服务名称
        image: nginx:latest # 使用的镜像
        container_name: "compose-nginx" # 容器名称
        # 定义重启策略
            # no：是默认的重启策略，在任何情况下都不会重启容器。
            # always：容器总是重新启动。
            # on-failure：在容器非正常退出时（退出状态非0），才会重启容器。
        restart: always
        ports: # 设置宿主机和容器之间的端口映射关系
            - "8001:80"
            - "4431:443"
        environment: # 设置环境变量(TZ=Asia/Shanghai:设置时区)
           - TZ=Asia/Shanghai
        depends_on: # 设置依赖关系，可以让docker-compose按依赖关系启动
           - "php"
        volumes: # 数据卷，定义映射关系,将目录或文件挂载到容器
           - "/home/docker-compose/nginx-php8/nginx/conf.d:/etc/nginx/conf.d"
           - "/home/docker-compose/nginx-php8/www:/usr/share/nginx/html"
           - "/home/docker-compose/nginx-php8/nginx/log:/var/log/nginx"
        networks: # 定义网络信息,详细的可以去这里看看https://deepzz.com/post/docker-compose-file.html#toc_31
           - net-app
    php:
        build: './php' # build 这里我理解为：指定build Dockerfile生成镜像的名称
        image: maclxf:php8.1.12-bc
        container_name: "compose-php"
        restart: always
        ports:
            - "9002:9000"
        environment:
            - TZ=Asia/Shanghai
        volumes:
            - "/home/docker-compose/nginx-php8/www:/usr/share/nginx/html"
        networks:
           - net-app

networks:
    net-app:
```
mysql在docker上
```YAML
version: "3"
services:
    nginx:
        image: nginx:latest
        container_name: "compose-nginx"
        restart: always
        ports:
            - "8001:80"
            - "4431:443"
        environment:
           - TZ=Asia/Shanghai
        depends_on:
           - "php"
        volumes:
           - "/home/docker-compose/nginx-php8/nginx/conf.d:/etc/nginx/conf.d"
           - "/home/docker-compose/nginx-php8/www:/usr/share/nginx/html"
           - "/home/docker-compose/nginx-php8/nginx/log:/var/log/nginx"
        networks:
           - net-app
    php:
        build: './php'
        image: maclxf:php8.1.12-bc
        container_name: "compose-php"
        restart: always
        ports:
           - "9002:9000"
        environment:
           - TZ=Asia/Shanghai
        volumes:
           - "/home/docker-compose/nginx-php8/www:/usr/share/nginx/html"
        networks:
           - net-app
    mysql:
        image: mysql:5.7
        container_name: "compose-mysql"
        restart: always
        ports:
           - "3307:3306"
        volumes:
           - "/home/docker-compose/nginx-php8/mysql/data:/var/lib/mysql"
           - "/home/docker-compose/nginx-php8/mysql/conf/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf"
        environment:
           - "MYSQL_ROOT_PASSWORD=111111"
        networks:
           - net-app
networks:
    net-app:
```

redis在docker上
```YAML
version: "3"
services:
    nginx:
        image: nginx:latest
        container_name: "compose-nginx"
        restart: always
        ports:
            - "8001:80"
            - "4431:443"
        environment:
           - TZ=Asia/Shanghai
        depends_on:
           - "php"
        volumes:
           - "/home/docker-compose/nginx-php8/nginx/conf.d:/etc/nginx/conf.d"
           - "/home/docker-compose/nginx-php8/www:/usr/share/nginx/html"
           - "/home/docker-compose/nginx-php8/nginx/log:/var/log/nginx"
        networks:
           - net-app
    php:
        build: './php'
        image: maclxf:php8.1.12-bc
        container_name: "compose-php"
        restart: always
        ports:
           - "9002:9000"
        environment:
           - TZ=Asia/Shanghai
        volumes:
           - "/home/docker-compose/nginx-php8/www:/usr/share/nginx/html"
        networks:
           - net-app
    mysql:
        image: mysql:5.7
        container_name: "compose-mysql"
        restart: always
        ports:
           - "3307:3306"
        volumes:
           - "/home/docker-compose/nginx-php8/mysql/data:/var/lib/mysql"
           - "/home/docker-compose/nginx-php8/mysql/conf/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf"
        environment:
           - "MYSQL_ROOT_PASSWORD=111111"
        networks:
           - net-app
    redis:
        image: redis:latest
        container_name: compose-redis
        restart: always
        command: redis-server --requirepass 111111
        ports:
            - "6380:6379"
        volumes:
            - "/home/docker-compose/nginx-php8/redis/data:/data"
        networks:
           - net-app
networks:
    net-app:
```


### 特别说明坑
#### 关于适用数据库有两种方式
方式一 使用宿主机的mysql
    我尝试的是这种方式用几个坑解决方式参考了这里 https://www.cnblogs.com/haiton/p/11064727.html
    1. 宿主机ip 和 容器的ip
        * 代码运行在容器中调用宿主的mysql 相当于就是访问远程的数据库（所以不用构建mysql的容器），那么容器中代码配置远程数据数据库的ip应该怎么填
        这里要用到两个命令 宿主机 `ifconfig` 找到 `docker0 172.17.0.1`，宿主机 `docker network inspect networknamexxxx` 找到 `Gateway 192.168.144.1`，代码配置中填入 172.17.0.1，宿主机允许 192.168.144.1 访问，那么这样就把mysql请求发出来了
        * 上面这种做法，我在重启过电脑之后就不行了（找不到），改了半天将代码配置填入 172.18.0.1，宿主机允许 172.18.0.2 就可以了
        ```json
            $ docker network inspect nginx-php8_net-app
            [
                {
                    "Name": "nginx-php8_net-app",
                    "Id": "68aac6a9843a4159efce63e8bb2c06b431da735f9cb24708a002c67818607967",
                    "Created": "2022-12-10T10:32:14.4382743+08:00",
                    "Scope": "local",
                    "Driver": "bridge",
                    "EnableIPv6": false,
                    "IPAM": {
                        "Driver": "default",
                        "Options": null,
                        "Config": [
                            {
                                "Subnet": "172.18.0.0/16",
                                "Gateway": "172.18.0.1"
                            }
                        ]
                    },
                    "Internal": false,
                    "Attachable": false,
                    "Ingress": false,
                    "ConfigFrom": {
                        "Network": ""
                    },
                    "ConfigOnly": false,
                    "Containers": {
                        "12ae94d5000117d726aeb90df3bc1a16a5c6c0a2fc2fd5ad9342ed843d022deb": {
                            "Name": "compose-nginx",
                            "EndpointID": "ab0abe224db399bc691f476cf1c7e78d0fcfd5e6e12a0451769d23213b816567",
                            "MacAddress": "02:42:ac:12:00:03",
                            "IPv4Address": "172.18.0.3/16",
                            "IPv6Address": ""
                        },
                        "94efe0e8b9d9f619655ea1562101a7887643f683a94d58bbeafc50ed0bb50a1d": {
                            "Name": "compose-php",
                            "EndpointID": "ef1c466d0a5cb4799cebce1118f7cf3bb9013fe6f23edb311f34b221b40fbd8b",
                            "MacAddress": "02:42:ac:12:00:02",
                            "IPv4Address": "172.18.0.2/16",
                            "IPv6Address": ""
                        }
                    },
                    "Options": {},
                    "Labels": {
                        "com.docker.compose.network": "net-app",
                        "com.docker.compose.project": "nginx-php8",
                        "com.docker.compose.version": "2.12.2"
                    }
                }
            ]
        ```
        > 上面这段json可以看出 Containers 12ae94d5000117d726aeb90df3bc1a16a5c6c0a2fc2fd5ad9342ed843d022deb 对应 compose-nginx 94efe0e8b9d9f619655ea1562101a7887643f683a94d58bbeafc50ed0bb50a1d 对应 94efe0e8b9d9f619655ea1562101a7887643f683a94d58bbeafc50ed0bb50a1d，读数据的请求从 compose-php 的ip 172.18.0.2给到 172.18.0.1，由这个在统一发出去到外部（过程是我猜的只做参考）
        https://m.tongfu.net/home/35/blog/513305.html
        https://m.tongfu.net/home/35/blog/513355.html
    2. 注意要去掉 /etc/mysql/mysql.conf/mysql.cof中bind address 127.0.0.1否则会被mysql拒绝
    3. grant all privileges on *.* to 'root'@'172.17.0.1' identified by 'pswd' with grant option;
开放所有权限给root,当root以pswd(不一定是root登录密码,仅作为情景下登录的密码)密码从 172.17.0.1 登入的时候,允许其操作所有数据库下的所有表(也可以将 *.* 改成特定数据库下的特定表,这个随意).
    4. 宿主机这种至少在wsl2的docker访问主机的mysql上会慢一点
    https://www.cnblogs.com/haiton/p/11064727.html
    https://blog.csdn.net/xs18952904/article/details/106518424
    https://blog.csdn.net/u010953609/article/details/89445367
    https://www.jianshu.com/p/3e1fd311ba87
    https://www.jianshu.com/p/0561d3cfccda
方式二 使用容器的mysql
    见上面yaml

#### 使用composer
方式一 [参考的网页](https://blog.csdn.net/dfsgwe1231/article/details/105993717)
直接在yaml中加入如下
#
# composer:
#     image: composer:latest
#     container_name: "compose-composer"
#     depends_on: # 设置依赖关系，可以让docker-compose按依赖关系启动
#        - "php"
#     volumes:
#        - "/home/docker-compose/nginx-php8/www/ci4:/app" # 必须要将composer.json 所在文件夹挂到 /app 上否则报找不到composer.json
#     command: ["composer", "install"] # 执行composer install命令
这里有个弊端即使用了 depends_on 让php启动后在执行，但是php启动到安装好依赖依旧有段时间，导致在 up 时，一直报错，说没得intl等php 插件
所以这里只好放弃
后续找了个方法及方法四还没有试过，可以尝试以下



方式二
笨办法办法来安装composer

进入composer-php，但是不妥，各种差东西
```
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php
mv composer.phar /usr/local/bin/composer
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/
composer selfupdate
cd /usr/shared/nginx/html/ci4
composer install
```

方式三
再编排一个容器

方式四
使用wait-for-it
https://www.jianshu.com/p/9446f210e327

#### redis 安装
问题主要集中在php 安装 redis扩展上
本来是希望用 predis 但是最后决定用php的redis扩展，目前的问题是死活安不上扩展
https://blog.csdn.net/weixin_39873598/article/details/123088978
https://www.cnblogs.com/Kuju/p/15977101.html


### 不明白
* networks 如何使用不明白

### 参考
- [Docker ComposeOverview](https://docs.docker.com/compose/)
- [depends_no 的使用](https://docs.docker.com/compose/compose-file/#depends_on)
- [compose.yaml 文档](https://docs.docker.com/compose/compose-file/)
- [compose.yaml 怎么写](https://deepzz.com/post/docker-compose-file.html)
- [docker-compose搭建nginx+php环境](https://www.cnblogs.com/trblog/p/14065905.html)
- [docker-compose搭建nginx+php环境](https://www.jianshu.com/p/0561d3cfccda)
- [Docker 微服务教程](http://www.ruanyifeng.com/blog/2018/02/docker-wordpress-tutorial.html)
- [这一份docker-compose说明更详细](https://blog.csdn.net/weixin_47032745/article/details/117034496)


