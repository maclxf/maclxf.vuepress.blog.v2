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
小程序的生命周期包含
1. APP 生命周期--也可以官方叫注册小程序
onLaunch, onShow, onHide
![weapp-life-show](/images/weapp-life-show.jpg)
![weapp-life-cycle](/images/weapp-life-cycle.jpg)
2. 页面生命周期
onLoad, onShow, onReady, onHide
![weapp-life-cycle-page](/images/weapp-life-cycle-page.jpg)
> 页面本质上其实是一个组件（components 构造器），当作为组件构造器存在的页面，在lifetimes中执行 create attach等时和执行methods中的 onload onshow等其实是一样的，我理解是类似于Behavior中被重复执行了。所以这里我把 lifetimes 、 和methods 同级的 created attach 以及 pagelifetime 等等当在 components 构造器 中时就不要声明这些值了
> 1. lifetimes就是组件的生命周期，但是这里是作为页面用因此在methods直接定义 onload等方法来做页面的生命周期更好，另外和methods同级的created attach这些函数会被 lifetime中的覆盖掉，lifetime都不要了所以更不需要;
> 2. pagelifetime 本身含义就是一些特殊的生命周期，它们并非与组件有很强的关联，但有时组件需要获知，以便组件内部处理。这样的生命周期称为“组件所在页面的生命周期”，在
![weapp-life-cycle-compontent-constructor](/images/weapp-life-cycle-compontent-constructor.jpg)

3. 组件的生命周期
### lifetimes
created	无	在组件实例刚刚被创建时执行，还不能是用 setData, data就是初始化的data，此时 只应该用于给组件 this 添加一些自定义属性字段。
attached	无	在组件实例进入页面节点树时执行	1.6.3 this.data 已被初始化为组件的当前值。这个生命周期很有用，绝大多数初始化工作可以在这个时机进行
ready	无	在组件在视图层布局完成后执行	1.6.3
moved	无	在组件实例被移动到节点树另一个位置时执行	1.6.3
detached	无	在组件实例被从页面节点树移除时执行	1.6.3 detached 生命周期被触发。退出一个页面时，如果组件还在页面节点树中，则 detached 会被触发。
error	Object Error	每当组件方法抛出错误时执行  2.4.1
### pagelifetimes
生命周期	参数	描述	最低版本
show	无	组件所在的页面被展示时执行	2.2.3
hide	无	组件所在的页面被隐藏时执行	2.2.3
resize	Object Size	组件所在的页面尺寸变化时执行	2.4.0

从截图组件的生命周期有个特点是先于页面的生命周期
![weapp-life-cycle-compontent](/images/weapp-life-cycle-component.jpg)




## 补充关于
关于退出目前只看页面的话是
app onHide ---> page onHide


### 参考
- [页面生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page-life-cycle.html)
- [组件生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)



