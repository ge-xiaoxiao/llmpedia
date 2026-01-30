import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://llmpedia.online",

  author: {
    name: "LLMPedia",
    url: "https://llmpedia.online",
  },

  logo: "https://img.feria.eu.org/9c9ris.svg",

  repo: "ge-xiaoxiao/llmpedia",

  docsDir: "src",

  navbar: zhNavbar,

  sidebar: zhSidebar,

  displayFooter: true,

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: false,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: false,
    spoiler: false,
    stylize: [],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  plugins: {
    comment: {
      provider: "Giscus",
      repo: "your-repo/llmpedia-discussions",
      repoId: "",
      category: "Announcements",
      categoryId: "",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
