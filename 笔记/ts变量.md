<!--
 * @Author: your name
 * @Date: 2020-09-14 09:26:09
 * @LastEditTime: 2020-09-14 14:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\笔记\ts变量.md
-->
# TypeScript 变量

### TypeScript 数据类型
TypeScript中为了让我们的编程更规范，增加了类型校验，ts中主要有以下数据类型：
+ number:数值型
    
+ string:字符串
+ boolean:布尔类型
+ symbol:符号类型 标识唯一对象
+ any:任意类型
+ object:对象类型(数组,元组,类,接口,函数等)
+ any:任意值 用来表示允许赋值为任意类型 谨慎使用
+ to be continue ^^

### 常量

const 是定义变量的关键词
const name:type = value

```
const dbsql:string = 'ip=192.168.1.10;port=5432'
```