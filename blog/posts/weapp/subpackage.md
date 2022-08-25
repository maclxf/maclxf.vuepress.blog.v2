---
title: 微信小程序调优笔记
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

目的：记录讲解过的 [课程中](https://developers.weixin.qq.com/community/business/course/000606628dc2e86dc0ddcbb115940d) 讲解的一些知识点。

<!-- more -->

## 分包

小程序有限制，主包超过2M将不能提交审核。为了避免这种情况小程序提供了分包以及独立分包机制只要单个代码包不超过2MB，总包大小不超过20MB即可
* 在`app.json`中声明 subpackages 节点，打包时将按照配置路径进行打包，节点包含 root，pages，independent。root 表示分包根目录（不能在另一个分包的目录内），该目录下的内容都将单独打包，independent ture 表示为独立分包否则为分包
* 同时存在分包A、分包B，分包A可以使用 主包的js等，但是用不上分包B的资源

## 独立分包
独立于主包和分包的内容，可以直接从独立分包进入小程序（这种不会下载主包）
* `app.json` 中 subpackages 开启 independent
* 独立分包 不能使用 主包和普通分包以及其他独立分包的资源
* 独立分包不能定义APP
* 独立分包启动时 APP 不一定被注册，那么 getApp() 可能是undefind，为了避免此类情况 新增了allowDefault字段`getApp({allowDefault: true})`
> 在 App 未定义时返回一个默认实现。当主包加载，App 被注册时，默认实现中定义的属性会被覆盖合并到真正的 App 中
```
独立分包中
const app = getApp({allowDefault: true}) // {}
app.data = 456
app.global = {}
app.js 中
App({
  data: 123,
  other: 'hello'
})

console.log(getApp()) // {global: {}, data: 456, other: 'hello'}
```
独立分包启动小程序，主包中的onLunch,onShow 会在首次进入主包时调用
由于独立分包中无法定义 App，小程序生命周期的监听可以使用 wx.onAppShow，wx.onAppHide 完成。App 上的其他事件可以使用 wx.onError，wx.onPageNotFound 监听。

## 分包预加载
通过配置当进入某个页面时，自动预下载可能需要的分包。独立分包也可预下载主包。
```
app.json

{
    preloadRule: {
        'package/index' : {
            packages: []// 进入页面后预下载分包的 root 或 name。__APP__ 表示主包。
            network: wifi all: 不限网络;wifi: 仅 wifi 下预下载
        }
    }
}

```
> preloadRule 中，key 是页面路径，value 是进入此页面的预下载配置，每个配置有以下几项：


## 分包异步化
除了非独立分包可以依赖主包外，分包之间不能互相使用自定义组件或进行 require。分包异步化就是为了解决部分跨分包的
* 跨分包自定义组件引用
    通过占位组件实现 { 'componentPlaceholder' : {}}
* 跨分包JS代码引用
    ```
    // subPackageA/index.js
    // 使用回调函数风格的调用
    require('../subPackageB/utils.js', utils => {
    console.log(utils.whoami) // Wechat MiniProgram
    }, ({mod, errMsg}) => {
    console.error(`path: ${mod}, ${errMsg}`)
    })
    // 或者使用 Promise 风格的调用
    require.async('../commonPackage/index.js').then(pkg => {
    pkg.getPackageName() // 'common'
    }).catch(({mod, errMsg}) => {
    console.error(`path: ${mod}, ${errMsg}`)
    })
    ```
    > 注意路径只能是相对路径


### 参考
- [小程序性能优化实践](https://developers.weixin.qq.com/community/business/course/000606628dc2e86dc0ddcbb115940d)
- [使用分包](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)
- [require](https://developers.weixin.qq.com/miniprogram/dev/reference/api/require)



