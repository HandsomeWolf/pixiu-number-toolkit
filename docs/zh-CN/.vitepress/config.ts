import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  base: "/num-utils/zh-CN/",
  title: "num-utils",
  head: [
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?89e9ccd37dbd0d1c48650f38a861cee4";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],

  description: "数字工具集",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/introduction" },
      { text: "变更日志", link: "/changelog" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "入门",
          collapsed: false,
          items: [
            { text: "介绍", link: "/guide/introduction" },
            { text: "快速开始", link: "/guide/quick-start" },
          ],
        },
        {
          text: "基础用法",
          collapsed: false,
          items: [
            {
              text: "数字转中文",
              link: "/guide/digit-chinese-uppercase",
            },
            {
              text: "数字转文字",
              link: "/guide/number-to-words",
            },
            {
              text: "数学",
              link: "/guide/math",
            },
            // { text: "Finance", link: "/guide/finance" },
            // { text: "Format Currency", link: "/guide/format-currency" },
            { text: "百分比", link: "/guide/percentage" },
            { text: "千位分隔符", link: "/guide/thousand-separator" },
            { text: "计算表达式", link: "/guide/compute-expression" },
            { text: "单位转换", link: "/guide/unit-conversion" },
            { text: "工具", link: "/guide/utils" },
            { text: "校验", link: "/guide/validation" },
          ],
        },
        {
          text: "Element Plus 相关",
          collapsed: false,
          items: [
            { text: "输入框格式", link: "/guide/element-plus-formatter" },
            {
              text: "表单校验",
              link: "/guide/element-plus-form-validation",
            },
            {
              text: "表格行尾合计",
              link: "/guide/element-plus-table-summary-row",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/HandsomeWolf/num-utils" },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023 Handsome Wolf",
    },
    // TODO: Add search function
    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "8J64VVRP8K",
    //     apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
    //     indexName: "vitepress",
    //   },
    // },
    // TODO: Add carbon ads
    // carbonAds: {
    //   code: "CEBDT27Y",
    //   placement: "vuejsorg",
    // },
  },
});
