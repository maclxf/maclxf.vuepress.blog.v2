---
title: Github Action 踩坑记
icon: ci
star: true
date: 2022-03-31
sticky: true
category:
  - 踩坑记
tag:
  - 介绍
  - 踩坑记一笔
# home: true
# footer: start footer
---

目的：尝试它的CI

<!-- more -->

## Github Action 踩坑记


### Github Action是什么
Github Action 是 github 推出的持续集成工具；

持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions

如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合。这就是 GitHub Actions 最特别的地方。
> 在我看来这个跟 Gitlab Runner 是差不多的一个产品，有空整理一下 Gitlab Runner

### 基础概念
GitHub Actions 有一些自己的术语。

1. workflow （工作流程）：持续集成一次运行的过程，就是一个 workflow。
Workflow 是由一个或多个 job 组成的可配置的自动化过程。我们通过创建 YAML 文件来创建 Workflow 配置。
后面有我这个博客使用的 Workflow [可以参照](#附workflow)
2. job （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。
3. step（步骤）：每个 job 由多个 step 构成，一步步完成。
4. action （动作）：每个 step 可以依次执行一个或多个命令（action）。

### 我的步骤
1. 新建仓库
2. settings/tokens设置密钥
3. 在新建仓库中的 settings/repository-secrets 加入刚刚建的密钥 注意变量名要和 yaml中的匹配
4. 在文件夹.github/workflows/写入.yaml文件
5. 提交然后就等github action完成任务了

### 坑
1. 设置tokens出错，直接在 仓库中的 settings/repository-secrets 随便设置了个值
2. yaml 不熟悉
3. yaml 中的命令含义不清晰
4. uses 的 actions 不明白是个什么东西





### 附Workflow
```YAML
# name字段是 workflow 的名称
name: GitHub Actions Build and Deploy Demo
# on字段指定触发 workflow 的条件，通常是某些事件
# 这里的触发条件是push代码到master的时候触发
on:
  push:
    branches:
      - master
# workflow 文件的主体是jobs字段，表示要执行的一项或多项任务
jobs:
  # job-id
  main:
    # job-name 会显示在action中
    name: start
    # runs-on字段指定运行所需要的虚拟机环境。它是必填字段。目前可用的虚拟机如下：ubuntu-latest，windows-latest，macOS-latest
    runs-on: ubuntu-latest
    # steps字段指定每个 Job 的运行步骤，可以包含一个或多个步骤
    steps:
      # 获取源码，使用的 action 是actions/checkout
    - name: Checkout
      uses: actions/checkout@v2
      with:
        persist-credentials: false

    # react项目为npm run-script build，vue项目改为npm run build
    - name: Install and Build
      # 该步骤运行的命令或者 action。
      #构建脚本
      run: |
        npm install
        npm run docs:build

    # 构建和部署，使用的 action 是JamesIves/github-pages-deploy-action
    # react项目的FOLDER为build，vue项目改为dist
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@releases/v3
      with:
        # GitHub 密钥
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        # 发布分支
        BRANCH: gh-pages
        # 构建成果所在目录
        FOLDER: dist
    # 指定运行位置
    # - name: Clean temp directory
    #     run: rm -rf *
    #     working-directory: ./temp
    # 使用 shell 关键字，来指定特定的 shell：
    # - name: Display the path
    #    run: echo $PATH
    #    shell: bash

```

### 参考
- [Github Action 精华指南](https://zhuanlan.zhihu.com/p/164744104)
- [GitHub Actions 入门教程](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
- [GitHub Action实操之Vue Demo](https://wangdaodao.com/20200721/github-actions-demo.html)



