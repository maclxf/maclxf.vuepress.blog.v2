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
      icon: "note",
      prefix: "posts/",
      children: [
        {
          text: "php",
          icon: "php",
          collapsable: true,
          prefix: "php/",
          //children: ["article1", "article2", "article3", "article4"],
          children: [],
        },
        {
          text: "weapp",
          prefix: "weapp/",
          icon: "wechat",
          children: [
            // {
            //   text: "文章 5-8",
            //   icon: "note",
            //   collapsable: true,
            //   prefix: "article/",
            //   children: ["article5", "article6", "article7", "article8"],
            // },
            // {
            //   text: "文章 9-12",
            //   icon: "note",
            //   children: ["article9", "article10", "article11", "article12"],
            // },
          ],
        },
      ],
    },
  ],
});
