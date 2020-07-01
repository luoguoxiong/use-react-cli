# React-Cli

> 1. React-cli 基于 Webpack4+搭建的React脚手架。
> 2. 支持TypeScript与JavaScript共存，解决项目向TS靠拢问题。
> 3. Css预处理已配置Less，可根据自己需求，配置Sass、Styuls。
> 4. 数据管理已配置Redux与Rematch、路由使用React-router-dom。

## Quick Start

```shell
git clone https://github.com/Peroluo/react-cli.git
cd react-cli
cnpm install
```

### npm run dev

> 开发模式运行程序
>
> 自动打开浏览器 [http://localhost:8080](http://localhost:8080) 
>
> 开发环境支持热更新，在构建过程中会提醒错误跟警告。

### npm run build

> 生成环境打包
>
> 已配置GZIP、资源压缩、缓存等构建最佳性能，请参考webpack相关配置。
>
> 构建完成后，将启动静态资源服务，打开浏览器 [http://localhost:8000](http://localhost:8000)

### npm run build --report

> 分析打包后的资源大小
>
> 自动打开浏览器 [http://localhost:8888](http://localhost:8888)