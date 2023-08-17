import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  base: "/num-utils/",
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

  description: "A collection of number utilities.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/introduction" },
      { text: "Changelog", link: "/changelog" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/guide/introduction" },
            { text: "Quick Start", link: "/guide/quick-start" },
          ],
        },
        {
          text: "Basic Usage",
          collapsed: false,
          items: [
            {
              text: "Digit Chinese Uppercase",
              link: "/guide/digit-chinese-uppercase",
            },
            {
              text: "number to words",
              link: "/guide/number-to-words",
            },
            {
              text: "Math",
              link: "/guide/math",
            },
            // { text: "Finance", link: "/guide/finance" },
            // { text: "Format Currency", link: "/guide/format-currency" },
            { text: "Percentage", link: "/guide/percentage" },
            { text: "Thousand Separator", link: "/guide/thousand-separator" },
            { text: "Compute Expression", link: "/guide/compute-expression" },
            { text: "Unit Conversion", link: "/guide/unit-conversion" },
            { text: "Utils", link: "/guide/utils" },
            { text: "Validation", link: "/guide/validation" },
          ],
        },
        {
          text: "Element Plus Related",
          collapsed: false,
          items: [
            { text: "Input Formatter", link: "/guide/element-plus-formatter" },
            {
              text: "Form Validation",
              link: "/guide/element-plus-form-validation",
            },
            {
              text: "Table Summary Row",
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
