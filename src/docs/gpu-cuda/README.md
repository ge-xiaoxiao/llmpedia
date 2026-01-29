# GPU/CUDA面试题

本章节涵盖GPU并行计算、CUDA编程、显存优化等相关面试题。

## 核心知识点

### 1. CUDA编程基础
- **GPU架构**：SM、warp、线程层次结构
- **CUDA编程模型**：网格、块、线程的组织
- **内存层次**：全局内存、共享内存、寄存器、常量内存
- **同步机制**：__syncthreads()、原子操作

### 2. 性能优化
- **内存访问优化**：合并访问、bank conflict避免
- **计算优化**：指令级并行、warp调度
- **显存管理**：内存分配、数据传输优化
- **流与事件**：异步操作、重叠计算与传输

### 3. 高级特性
- **Tensor Core**：混合精度计算、矩阵运算加速
- **NVLink/NVSwitch**：多GPU通信
- **CUDA Graph**：计算图优化
- **MPS**：多进程服务

## 常见面试题

### 基础题
1. **Q：解释CUDA中的网格、块和线程的关系**
   A：在CUDA编程模型中，网格包含多个线程块...

2. **Q：什么是bank conflict？如何避免？**
   A：bank conflict发生在共享内存访问中...

### 进阶题
1. **Q：如何优化矩阵乘法的CUDA实现？**
   A：可以使用共享内存进行平铺优化...

2. **Q：解释CUDA中的异步操作和流**
   A：CUDA流允许并发执行多个操作...

## 实战问题

### 性能调优
1. **分析并优化一个CUDA核函数的性能**
2. **设计支持动态批处理的高性能推理引擎**

### 代码实现
```cpp
// 简单的向量加法CUDA核函数
__global__ void vectorAdd(float* A, float* B, float* C, int n) {
    int i = blockIdx.x * blockDim.x + threadIdx.x;
    if (i < n) {
        C[i] = A[i] + B[i];
    }
}