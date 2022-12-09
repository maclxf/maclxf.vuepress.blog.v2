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
### 不明白
* networks 如何使用不明白

### 参考
- [Docker ComposeOverview](https://docs.docker.com/compose/)
- [compose.yaml 文档](https://docs.docker.com/compose/compose-file/)
- [compose.yaml 怎么写](https://deepzz.com/post/docker-compose-file.html)
- [docker-compose搭建nginx+php环境](https://www.cnblogs.com/trblog/p/14065905.html)
- [docker-compose搭建nginx+php环境](https://www.jianshu.com/p/0561d3cfccda)
- [Docker 微服务教程](http://www.ruanyifeng.com/blog/2018/02/docker-wordpress-tutorial.html)



