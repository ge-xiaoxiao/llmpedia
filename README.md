# LLMPedia - 大模型面试知识库 📚

> 大模型相关岗位八股题面试准备指南，系统整理LLM领域高频面试知识点与实战经验

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

## 🛠 技术实现

### 技术栈
- **前端框架**: VuePress 2.0 + Vue 3
- **构建工具**: Vite
- **开发语言**: TypeScript + Markdown
- **样式处理**: Sass
- **包管理器**: pnpm

### 主题配置
- 使用 `vuepress-theme-hope` 主题
- 支持深色/浅色模式切换
- 响应式设计，移动端友好
- 内置搜索功能

### 文档规范
- 使用Markdown编写，支持VuePress扩展语法
- 章节结构清晰，层级分明
- 代码块支持语法高亮
- 支持数学公式渲染

## 🤝 贡献指南

我们欢迎所有形式的贡献！无论是修正错别字、补充内容，还是新增章节。

### 如何贡献
1. Fork 本仓库
2. 创建你的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

### 文档编写规范
- 使用中文编写，专业术语可保留英文
- 遵循现有的三色重要性标注系统
- 每个章节应包括：核心概念、常见面试题、实战示例
- 代码示例应简洁明了，附有详细注释

### 讨论交流
- 如有问题或建议，可通过 Issues 页面提出
- 欢迎分享学习心得和使用体验

## 🙏 致谢

本项目在技术实现上参考了 [CSView](https://github.com/zijing2333/CSView) 项目的优秀实践，特此致谢。

同时感谢所有贡献者和用户的支持，让这个项目不断完善。

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系

- 项目主页: [GitHub仓库](https://github.com/ge-xiaoxiao/llmpedia)
- 问题反馈: [Issues页面](https://github.com/ge-xiaoxiao/llmpedia/issues)

---

**LLMPedia - 让大模型面试准备更系统、更高效！** 🚀