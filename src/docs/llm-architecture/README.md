# LLM架构面试题

本章节涵盖大语言模型架构相关的面试题，包括Transformer、注意力机制、预训练与微调等核心知识点。

## 核心知识点

### 1. Transformer架构
- **自注意力机制**：原理、计算复杂度、多头注意力
- **位置编码**：绝对位置编码、相对位置编码、RoPE
- **前馈神经网络**：FFN结构、激活函数选择
- **层归一化**：Pre-LN vs Post-LN

### 2. 预训练与微调
- **预训练目标**：MLM、NSP、Span Masking
- **微调策略**：全参数微调、LoRA、P-Tuning
- **指令微调**：SFT、RLHF、DPO
- **领域适配**：持续预训练、领域自适应

### 3. 模型优化
- **模型压缩**：知识蒸馏、量化、剪枝
- **推理优化**：KV Cache、Flash Attention、Paged Attention
- **训练优化**：混合精度训练、梯度检查点、ZeRO优化器

## 常见面试题

### 基础题
1. **Q：请解释Transformer中的自注意力机制**
   A：自注意力机制允许模型在处理序列时关注输入序列的不同位置...

2. **Q：多头注意力有什么优势？**
   A：多头注意力可以让模型同时关注来自不同表示子空间的信息...

### 进阶题
1. **Q：对比不同位置编码方法的优缺点**
   A：绝对位置编码（如Sinusoidal）简单但泛化能力有限...

2. **Q：如何优化大模型的推理速度？**
   A：可以使用KV Cache减少重复计算，Flash Attention优化注意力计算...

## 实战问题

### 系统设计
1. **设计一个支持千亿参数模型推理的系统架构**
2. **如何实现高效的模型并行训练**

### 代码实现
```python
# 简化的注意力机制实现
def attention(query, key, value, mask=None):
    d_k = query.size(-1)
    scores = torch.matmul(query, key.transpose(-2, -1)) / math.sqrt(d_k)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    p_attn = F.softmax(scores, dim=-1)
    return torch.matmul(p_attn, value), p_attn