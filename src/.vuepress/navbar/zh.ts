import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "基础知识",
    icon: "book",
    prefix: "/docs/fundamentals/",
    children: [
      { text: "数学基础", link: "mathematics.md" },
      { text: "数据结构", link: "data-structure.md" },
      { text: "计算机系统基础", link: "cs-system-base.md" },
      { text: "计算机网络基础", link: "computer-network.md" },
      { text: "机器学习基础", link: "machine-learning.md" },
    ],
  },
  {
    text: "大模型架构",
    icon: "microchip",
    prefix: "/docs/llm-architecture/",
    children: [
      { text: "Transformer",  link: "transformer.md" },
      { text: "注意力机制变种", link: "attention-mechanisms.md" },
      { text: "主流模型架构", link: "model-architectures.md" },
    ],
  },
  {
    text: "LLM系统与工程",
    prefix: "/docs/ai-system-engineering/",
    children: [
      { text: "GPU/CUDA编程与优化", link: "gpu-cuda.md" },
      { text: "部署与系统运维", link: "systems-operations.md" },
      {
        text: "训练侧优化",
        icon: "graduation-cap",
        prefix: "training-optimization/",
        children: [
          { text: "分布式训练", link: "distributed-training.md" },
          { text: "训练框架", link: "training-frameworks.md" },
          { text: "性能分析", link: "performance-analysis.md" },
        ],
      },
      {
        text: "推理侧优化",
        icon: "rocket",
        prefix: "inference-optimization/",
        children: [
          { text: "推理框架", link: "inference-frameworks.md" },
          { text: "优化技术", link: "optimization-tech.md" },
          { text: "解码策略", link: "decoding-strategies.md" },
        ],
      },
    ],
  },
  {
    text: "算法与优化",
    icon: "algorithm",
    prefix: "/docs/algorithm-optimization/",
    children: [
      { text: "量化与压缩", link: "quantization-compression.md" },
      { text: "微调技术", link: "fine-tuning-techniques.md" },
      { text: "强化学习", link: "rl-alignment.md" },
    ],
  },
  {
    text: "系统与网络",
    icon: "network-wired",
    prefix: "/docs/systems-networking/",
    children: [
      { text: "分布式系统", link: "distributed-systems.md" },
      { text: "容器", link: "container.md" },
    ],
  },
  {
    text: "生态与工具链",
    icon: "tools",
    prefix: "/docs/llm-workflow/",
    children: [
      {text: "评估体系", link: "benchmark.md"}
    ],
  },
  {
    text: "LLM应用工程",
    icon: "puzzle-piece",
    prefix: "/docs/llm-app/",
    children: [
      {text: "Prompt工程", link: "prompt.md"},
      {text: "Rag", link: "rag.md"},
      {text: "Agent", link: "agent.md"}
    ]
  },
  {
    text: "实践与面试",
    icon: "user-tie",
    prefix: "/docs/practice-interview/",
    children: [
      { text: "常考手撕题", link: "coding-implementation.md" },
      { text: "系统设计题", link: "system-design.md" },
      { text: "HR面常问问题", link: "hr-interview.md" },
    ],
  },
  {
  text: "关于本站",
  prefix: "/about/",
  children: [
    { text: "开发日志", link: "roadmap.md" },
    { text: "贡献指南", link: "contribute.md" }
  ],
},
]);
