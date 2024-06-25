# vue3-vite-ts-element

## 介绍
整体框架由vue3、vite、pinia等主要技术构建。具体包含主要的第三方包如下：
1. vue3
2. vue-router
3. pinia
4. element-plus
5. axios

## 安装
### 先决条件
本工程需要安装pnpm，具体版本如下：
1. node版本：14.18.0 以上
2. pnpm版本：7.4.0 以上

### 执行安装
在项目根目录下执行如下代码即可完成安装操作
```
pnpm install
```
## 运行
开发运行工程：
```
pnpm run dev
```
运行成功后，使用 http://localhost:3000 访问工程

## 构建
构建工程：
```
pnpm run build
```

## 开发
### 目录结构
此处只介绍src目录下的内容
* api 存放各个模块请求接口的文件
* assets 存放静态文件
* components 存放通用组件的文件夹
* dict-center 存放字典项工具类和静态字典项的文件夹
* directives 存放自定义指令的文件夹
* hooks 存放自定义hook的文件
* locales 存放国际化文件的文件夹
* plugins 存放自定义插件
* router 存放路由文件
* store 存放pinia store
* styles 存放自定义style文件夹
* utils 存放工具类方法文件夹
* views 存放功能页面文件夹
