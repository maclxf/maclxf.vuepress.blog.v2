import { defineSidebarConfig } from "vuepress-theme-hope";
// 侧边栏配置
export const zh = defineSidebarConfig({
  "/": [
    "",

    //"home",
    //"slide",
    // {
    //   text: "如何使用",
    //   icon: "creative",
    //   prefix: "guide/",
    //   link: "guide/",
    //   children: "structure",
    // },
    {
      text: "文章",
      icon: "blog",
      prefix: "posts/",
      children: [
        {
          text: "Php",
          icon: "php",
          prefix: "php/",
          children: [],
        },
        {
          text: "WeApp",
          prefix: "weapp/",
          icon: "wechat",
          children: ['life-cycle'],
        },
        {
            text: "Github",
            prefix: "github/",
            icon: "github",
            children: ["github-action"],
          },
      ],
    },
  ],
});
