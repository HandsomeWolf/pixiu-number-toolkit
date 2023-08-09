import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import DefaultTheme from "vitepress/theme";
import App from "./App.vue";
import "./style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus);
  },
};
