import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "乐子集",
  description: "互联网乐子收集",
  lang: "zh-CN",
  themeConfig: {
    sidebar: [
      {
        text: "简介",
        link: "/",
      },
      {
        text: "九五至尊",
        link: "/95",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Redish101/lezi" },
    ],
    editLink: {
      pattern: "https://github.com/Redish101/lezi/edit/main/:path",
      text: "通过 GitHub 编辑此页",
    },
    lastUpdated: {
      text: "最后更新于",
    },
    outline: {
      label: "页面导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
});
