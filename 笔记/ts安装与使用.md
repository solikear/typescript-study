# TypeScript 安装

```
npm install -g typescript
tsc -v  查看tsc版本
tsc --help  查看指令集
```

# TypeScript 编译
```
tsc xxx.ts
```

但是这种情况下会直接编译在当前文件目录下，对项目结构影响大。
可使用以下命令进行输出
```
tsc --outDir dist ./src/helloworld.ts
```
把编译完成的JS文件放入dist文件夹

***但是这样每次运行调试时候都很不方便 要打长串的指令***

我们可以使用以下指令来初始化项目
 ```
tsc --init
```  
这样项目文件夹下会出现一个tsconfig.json  
修改其中的outDir(输出文件夹) rootDir(项目源代码)  
使用tsc指令便会快速生成到对应文件夹内  

## TypeScript 动态监视
```
tsc -w
``` 
会动态监视代码变化 方便进行开发