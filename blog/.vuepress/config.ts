// https://v2.vuepress.vuejs.org/zh/
// https://vuepress-theme-hope.github.io/v2/zh/changelog.html
import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  //https://vuepress.vuejs.org/zh/guide/assets.html#基础路径
  // 主要是根据你打包的路径来如果不是跟路径就要把这个名字加上否则/即可
  base: "/maclxf.vuepress.blog.v2/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Theme Demo",
    //   description: "A demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "Maclxf Blog",
      description: "Maclxf Blog vuepress",
    },
  },

  themeConfig,
});
