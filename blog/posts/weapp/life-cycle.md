---
title: 微信小程序生命周期
icon: 小程序
star: true
date: 2022-07-05
sticky: true
category:
  - 踩坑记
tag:
  - 介绍
# home: true
# footer: start footer
---

目的：整理目前为止遇到过的生命周期

<!-- more -->

## 微信小程序生命周期
![weapp-life-show](/images/weapp-life-show.jpg)
![weapp-life-cycle](/images/weapp-life-cycle.jpg)
![weapp-life-cycle-console](/images/weapp-life-cycle-console.jpg)
小程序的生命周期包含
1. APP 生命周期--也可以官方叫注册小程序
onLaunch, onShow, onHide
2. 页面生命周期
onLoad, onShow, onReady, onHide
> 页面本质上其实是一个组件（components 构造器），当作为组件构造器存在的页面，在lifetimes中执行 create attach等时和执行methods中的 onload onshow等其实是一样的，我理解是类似于Behavior中被重复执行了
![weapp-life-cycle-compontent-constructor](/images/weapp-life-cycle-compontent-constructor.jpg)
3. 组件的生命周期
待补充

## 补充关于
关于退出目前只看页面的话是
app onHide ---> page onHide


### 参考
- [页面生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page-life-cycle.html)
- [组件生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)



