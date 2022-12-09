---
title: docker以及DockerFile
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

目的：看了尝试了记录一下

<!-- more -->

## docker和DockerFile的关系
docker 通过 image 生成 container，但是官方的image并不是适用于每个人每个需求，只是提供了一个标准的镜像，实际情况是使用方还需要根据需求对镜像加工生成新的镜像，那么就有了DockerFile

## DockerFile 怎么写
参考下面的附


### docker 命令
* docker run
* docker exec
* docker build
* docker ps
* docker images
* docker rm
* docker rmi
* docker insecpt

### 附DockerFile
```DockerFile
# syntax=docker/dockerfile:1.4

FROM php:8.1.12-fpm

CMD php-fpm

RUN apt-get update && \
    apt-get install -y --no-install-recommends libicu-dev && \
    rm -r /var/lib/apt/lists/* && \
    docker-php-ext-install -j$(nproc) intl mysqli bcmath

CMD php-fpm
```

### 参考
- [docker image build](https://docs.docker.com/build/)
- [DOCKERFILE 文档](https://docs.docker.com/engine/reference/builder/)
- [Docker PHP 安装扩展汇总](https://www.jianshu.com/p/ce2a26f0c0d1)
- [runoob Docker Dockerfile](https://www.runoob.com/docker/docker-dockerfile.html)
- [Docker 从入门到实践](https://vuepress.mirror.docker-practice.com/image/pull/#)




