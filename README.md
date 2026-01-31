# LLMPedia - 大模型面试知识库 📚

## 🎯 项目愿景

LLMPedia 旨在为大模型（LLM）相关岗位的求职者提供系统化的面试准备资料。不同于零散的知识点整理，本网站面向大模型领域高频面试场景与核心岗位需求，提供从基础理论到系统工程的完整知识体系。

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- pnpm 8+（推荐包管理器）

### 安装依赖
```bash
pnpm install
```

### 开发模式运行
```bash
pnpm run docs:dev
```
访问 http://localhost:8080 查看效果。

### 生产构建
```bash
pnpm run docs:build
```
构建产物位于 `src/.vuepress/dist` 目录。

## 📁 项目结构

```
llmpedia/
├── src/
│   ├── .vuepress/          # VuePress 配置
│   │   ├── config.ts       # 主题配置
│   │   └── navbar/         # 导航栏配置
│   ├── README.md           # 首页内容
│   ├── docs/               # 文档内容
│   │   ├── llm-architecture/      # LLM架构
│   │   ├── ai-system-engineering/ # AI系统与工程
│   │   ├── algorithm-optimization/ # 算法优化
│   │   ├── fundamentals/          # 基础理论
│   │   ├── llm-app/              # LLM应用
│   │   ├── llm-workflow/         # LLM工作流
│   │   ├── practice-interview/   # 面试实践
│   │   └── systems-networking/   # 系统与网络
│   └── about/              # 关于项目
└── package.json           # 项目配置
```

### 知识体系概览

```
📚 LLMPedia 知识体系
├── 🔴 LLM核心架构（Transformer、注意力机制、模型架构）
├── 🔴 AI系统与工程（GPU/CUDA、训练优化、推理优化）
├── 🟡 算法与优化（量化压缩、微调技术、RL对齐）
├── 🟡 基础理论（数学、机器学习、计算机网络）
├── 🟢 LLM应用（Prompt、RAG、Agent）
└── 🟢 实践面试（系统设计、HR面试、手撕题）
```

## 🤝 贡献指南

我们欢迎所有形式的贡献！无论是修正错别字、补充内容，还是新增章节。详情请见https://llmpedia.online/about/contribute.html

## 🙏 致谢

本项目在技术实现上参考了 [CSView](https://github.com/zijing2333/CSView) 项目的优秀实践，特此致谢。

同时感谢所有贡献者和用户的支持，让这个项目不断完善。

**LLMPedia - 让大模型面试准备更系统、更高效！** 🚀