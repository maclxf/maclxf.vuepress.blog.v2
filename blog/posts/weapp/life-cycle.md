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
### 1. APP 生命周期--也可以官方叫注册小程序

`onLaunch, onShow, onHide`
* `onLaunch`(Object object)小程序初始化完成时触发，全局只触发一次。参数也可以使用 wx.getLaunchOptionsSync 获取。
参数：与 wx.getLaunchOptionsSync 一致。只有在加载小程序的时候执行（加载包括 第一次进入小程序，小程序进程挂了重新进入时也会执行）
* `onShow`(Object object)小程序启动，或从后台进入前台显示时触发。也可以使用 wx.onAppShow 绑定监听。
参数：与 wx.onAppShow 一致
* `onHide`()小程序从前台进入后台时触发。也可以使用 wx.onAppHide 绑定监听。
* `onError`(String error)小程序发生脚本错误或 API 调用报错时触发。也可以使用 wx.onError 绑定监听。
参数：与 wx.onError 一致
* `onPageNotFound`(Object object)基础库 1.9.90 开始支持，低版本需做兼容处理。小程序要打开的页面不存在时触发。也可以使用 wx.onPageNotFound 绑定监听。注意事项请参考 wx.onPageNotFound。

![weapp-life-show](/images/weapp-life-show.jpg)
![weapp-life-cycle](/images/weapp-life-cycle.jpg)

### 2. 页面生命周期

`onLoad, onShow, onReady, onHide`
* `onLoad`(Object query) 页面加载时触发。一个页面只会调用一次，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
* `onShow`() 页面显示/切入前台时触发。
* `onReady`() 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
* >注意：对界面内容进行设置的 API 如wx.setNavigationBarTitle，请在onReady之后进行。详见生命周期
* `onHide`() 页面隐藏/切入后台时触发。 如 wx.navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。
* `onUnload`() 页面卸载时触发。如wx.redirectTo或wx.navigateBack到其他页面时。

![weapp-life-cycle-page](/images/weapp-life-cycle-page.jpg)

页面本质上其实是一个组件（components 构造器），当作为组件构造器存在的页面，在lifetimes中执行 create attach等时和执行methods中的 onload onshow等其实是一样的，我理解是类似于Behavior中被重复执行了。所以这里我把 lifetimes 、 和methods 同级的 created attach 以及 pagelifetime 等等当在 components 构造器 中时就不要声明这些值了
1. lifetimes就是组件的生命周期，但是这里是作为页面用因此在methods直接定义 onload等方法来做页面的生命周期更好，另外和methods同级的created attach这些函数会被 lifetime中的覆盖掉，lifetime都不要了所以更不需要;
2. pagelifetime 本身含义就是一些特殊的生命周期，它们并非与组件有很强的关联，但有时组件需要获知，以便组件内部处理。这样的生命周期称为“组件所在页面的生命周期”，在 pageLifetimes 定义段中定义

![weapp-life-cycle-compontent-constructor](/images/weapp-life-cycle-compontent-constructor.jpg)

### 3. 组件的生命周期
1. lifetimes
 * `created`	无	在组件实例刚刚被创建时执行，还不能是用 setData, data就是初始化的data，此时 只应该用于给组件 this 添加一些自定义属性字段。
 * `attached`	无	在组件实例进入页面节点树时执行	1.6.3 this.data 已被初始化为组件的当前值。这个生命周期很有用，绝大多数初始化工作可以在这个时机进行
 * `ready`	无	在组件在视图层布局完成后执行	1.6.3
 * `moved`	无	在组件实例被移动到节点树另一个位置时执行	1.6.3
 * `detached`	无	在组件实例被从页面节点树移除时执行	1.6.3 detached 生命周期被触发。退出一个页面时，如果组件还在页面节点树中，则 detached 会被触发。
 * `error`	Object Error	每当组件方法抛出错误时执行  2.4.1

2. pagelifetimes
 * `show`	无	组件所在的页面被展示时执行	2.2.3
 * `hide`	无	组件所在的页面被隐藏时执行	2.2.3
 * `resize`	Object Size	组件所在的页面尺寸变化时执行	2.4.0

## 从截图组件的生命周期有个特点是先于页面的生命周期
![weapp-life-cycle-compontent](/images/weapp-life-cycle-component.jpg)


## 补充关于
关于退出目前只看页面的话是
app onHide ---> page onHide


### 参考
- [页面生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page-life-cycle.html)
- [组件生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)



