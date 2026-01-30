import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 基础理论侧边栏
  "/docs/fundamentals/": [
    "",
    {
      text: "数学基础",
      icon: "calculator",
      link: "mathematics.md",
    },
    {
      text: "数据结构",
      icon: "laptop-code",
      link: "data-structure.md",
    },
    {
      text: "计算机系统基础",
      icon: "desktop",
      link: "cs-system-base.md",
    },
    {
      text: "计算机网络",
      icon: "network-wired",
      link: "computer-network.md",
    },
    {
      text: "机器学习基础",
      icon: "brain",
      link: "machine-learning.md",
    },
  ],
  
  "/docs/llm-architecture/": [
    "",
    {
      text: "Transformer深度解析",
      icon: "code",
      link: "transformer.md",
    },
    {
      text: "注意力机制变种",
      icon: "eye",
      link: "attention-mechanisms.md",
    },
    {
      text: "主流模型架构",
      icon: "cubes",
      link: "model-architectures.md",
    },
  ],
  // AI系统与工程侧边栏
  "/docs/ai-system-engineering/": [
    "",
    {
      text: "GPU/CUDA编程与优化",
      icon: "bolt",
      link: "gpu-cuda.md",
    },
    {
      text: "训练侧优化",
      icon: "graduation-cap",
      prefix: "training-optimization/",
      children: [
        {
          text: "分布式训练",
          icon: "server",
          link: "distributed-training.md",
        },
        {
          text: "训练框架",
          icon: "tools",
          link: "training-frameworks.md",
        },
        {
          text: "性能分析",
          icon: "chart-line",
          link: "performance-analysis.md",
        },
      ],
    },
    {
      text: "推理侧优化",
      icon: "rocket",
      prefix: "inference-optimization/",
      children: [
        {
          text: "推理框架",
          icon: "play",
          link: "inference-frameworks.md",
        },
        {
          text: "优化技术",
          icon: "magic",
          link: "optimization-tech.md",
        },
        {
          text: "解码策略",
          icon: "key",
          link: "decoding-strategies.md",
        },
      ],
    },
    {
      text: "部署与系统运维",
      icon: "server",
      link: "systems-operations.md",
    },
  ],
  
  // 算法与优化侧边栏
  "/docs/algorithm-optimization/": [
    "",
    {
      text: "量化与压缩",
      icon: "compress",
      link: "quantization-compression.md",
    },
    {
      text: "微调技术",
      icon: "adjust",
      link: "fine-tuning-techniques.md",
    },
    {
      text: "强化学习",
      icon: "robot",
      link: "rl-alignment.md",
    },
  ],
  
  // 系统与网络侧边栏
  "/docs/systems-networking/": [
    "",
    {
      text: "分布式系统",
      icon: "project-diagram",
      link: "distributed-systems.md",
    },
    {
      text: "容器",
      icon: "wrench",
      link: "container.md",
    },
  ],

  // 生态与工具链侧边栏
  "/docs/llm-workflow/": [
    "",
    {
      text: "评估体系",
      icon: "chart-bar",
      link: "benchmark.md",
    },
  ],

  // LLM应用工程
  "/docs/llm-application-engineering/": [
    "",
    {
      text: "Prompt工程",
      icon: "lightbulb",
      link: "prompt.md",
    },
    {
      text: "RAG",
      icon: "book-open",
      link: "rag.md",
    },
    {
      text: "Agent",
      icon: "robot",
      link: "agent.md",
    },
  ],
  // 实践与面试侧边栏
  "/docs/practice-interview/": [
    "",
    {
      text: "常考手撕题",
      icon: "code",
      link: "coding-implementation.md",
    },
    {
      text: "系统设计题",
      icon: "project-diagram",
      link: "system-design.md",
    },
    {
      text: "HR面常问问题",
      icon: "comments",
      link: "hr-interview.md",
    },
  ],
});
