import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "LLMPedia",
  description: "专注于大模型相关岗位面试八股题的集合网站，涵盖LLM架构、GPU/CUDA、计算机网络、神经网络等知识点",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
