import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  //https://vuepress.vuejs.org/zh/guide/assets.html#基础路径
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
