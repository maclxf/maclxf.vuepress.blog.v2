---
title: 微信小程序调优笔记2
icon: 小程序
star: true
date: 2022-07-05
sticky: true
category:
  - 进阶
tag:
  - 整理
# home: true
# footer: start footer
---

1. onhide 后禁用setdata
2. 劫持page对象
3. App onUnhandledRejection
    onUnhandledRejection(Object object)
    基础库 2.10.0 开始支持，低版本需做兼容处理。
    小程序有未处理的 Promise 拒绝时触发。也可以使用 wx.onUnhandledRejection 绑定监听。注意事项请参考 wx.onUnhandledRejection。
    参数：与 wx.onUnhandledRejection 一致

