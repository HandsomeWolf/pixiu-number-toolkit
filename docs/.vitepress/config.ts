import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  base: "/num-utils/",
  title: "num-utils",

  description: "A collection of number utilities.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/introduction" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Quick Start", link: "/guide/quick-start" },
        ],
      },
      {
        text: "Element Plus Related",
        collapsed: false,
        items: [
          { text: "formatter", link: "/guide/element-plus-formatter" },
          {
            text: "form validation",
            link: "/guide/element-plus-form-validation",
          },
        ],
      },
    ],

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
