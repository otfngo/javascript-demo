// 尾递归
// 函数调用自身，称为递归
// 如果尾调用自身，就称为尾递归
//
// 递归非常耗费内存，因为需要同时保存成百上千个调用帧，很容易发生“栈溢出”错误
// 但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误

{
  // 下面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n)
  function factorial(n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
  }

  //如果改写成尾递归，只保留一个调用记录，复杂度 O(1)
  function factorial2(n, total = 1) {
    if (n === 1) return total
    return factorial2(n - 1, n * total)
  }
}

{
  // Fibonacci数列：1、1、2、3、5、8、13、21、34、……
  // 定义：F(1) = 1，F(2) = 1, F(n) = F(n-1) + F(n-2)（n>=3，n∈N*）

  // 下面代码是非尾递归的 Fibonacci 数列实现
  function Fabonacci(n) {
    if (n <= 2) return 1
    return Fabonacci(n - 1) + Fabonacci(n - 2)
  }

  // 下面代码是尾递归优化过的 Fibonacci 数列实现
  function Fabonacci2(n, ac1 = 1, ac2 = 1) {
    if (n <= 2) return ac2
    return Fabonacci2(n - 1, ac2, ac1 + ac2)
  }
}