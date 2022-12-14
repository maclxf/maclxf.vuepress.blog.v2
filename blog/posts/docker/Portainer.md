---
title: Portainer
icon: docker
star: true
date: 2022-12-10
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

## Portainer是什么
[Portainer](https://www.portainer.io/) 是一款轻量级的应用，它提供了图形化界面，用于方便地管理Docker环境，包括单机环境和集群环境。


## 安装
`docker pull portainer/portainer`

```
    docker run -p 9000:9000 -p 8000:8000 --name portainer \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /mydata/portainer/data:/data \
    -d portainer/portainer
```

## 使用
1. 创建用户
2. 选择环境 local

## 坑
app template 不能展示
- 发现是 https://raw.githubusercontent.com/portainer/templates/master/templates.json 不能获取
- 官方提供了构建自定义的template https://docs.portainer.io/advanced/app-templates/build
- 构建好镜像后，设置 App Templates url就可以了，但是如果你也是用的docker构建的那请用这个地址 http://172.17.0.3/templates.json
- 用了上面的地址可以获取了但是发现获取出来的值又不能加载出来，于是换成了 templates.2.0.json 就可以了



### 参考
- [Portainer](https://www.portainer.io/)
- [Portainer文档](https://docs.portainer.io/)
- [图形化工具 Portainer](https://zhuanlan.zhihu.com/p/371592044)
- [官方的template](https://github.com/portainer/templates)
---
- [NAS专用的template](https://github.com/Qballjos/portainer_templates)





