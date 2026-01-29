import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "LLM架构",
    icon: "microchip",
    link: "/docs/llm-architecture/",
  },
  {
    text: "GPU/CUDA",
    icon: "bolt",
    link: "/docs/gpu-cuda/",
  },
  {
    text: "计算机网络",
    icon: "network-wired",
    link: "/docs/computer-network/",
  },
  {
    text: "神经网络",
    icon: "brain",
    link: "/docs/neural-network/",
  },
]);
