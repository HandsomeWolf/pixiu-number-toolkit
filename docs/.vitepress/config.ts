import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "num-utils",
  description: "数字工具集",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "示例", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "安装",
        items: [
          { text: "vue3自定义指令", link: "/markdown-examples" },
          { text: "vue3Hooks", link: "/api-examples" },
          { text: "API", link: "/api-examples" },
        ],
      },
      {
        text: "示例",
        items: [
          { text: "vue3自定义指令", link: "/markdown-examples" },
          { text: "vue3Hooks", link: "/api-examples" },
          { text: "API", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/HandsomeWolf/num-utils" },
    ],
  },
});
