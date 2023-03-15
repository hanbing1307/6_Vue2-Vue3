# 脚手架是什么
# 1、说明
脚手架是Vue官方提供的标准化开发工具（开发平台）
cli:command line interface
最新版本是4.X
文档：https://cli.vuejs.org/zh/

# 2、使用具体步骤
第一步：（仅第一次执行）：全局安装@vue/cli
    npm install -g @vue/cli
第二步：切换到要创建的目录，使用命令创建项目
    vue create xxxx
第三步：启动项目
    yarn serve
    npm run serve
    npm run build  这是最后一次编译使用的

备注：
1. 如出现下载缓慢请配置 npm 淘宝镜像：npm config set registry
    https://registry.npm.taobao.org
2. Vue 脚手架隐藏了所有 webpack 相关的配置，若想查看具体的 webpakc 配置，
    请执行：vue inspect > output.js

babel 是将ES6转换成ES5规范的
eslint是做语法检查的

# 3、目录结构分析
├── node_modules
├── public
│ ├── favicon.ico: 页签图标
│ └── index.html: 主页面
├── src
│ ├── assets: 存放静态资源
│ │ └── logo.png
│ │── component: 存放组件
│ │ └── HelloWorld.vue
│ │── App.vue: 汇总所有组件
│ │── main.js: 入口文件
├── .gitignore: git 版本管制忽略的配置
├── babel.config.js: babel 的配置文件
├── package.json: 应用包配置文件
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
├── yarn.lock：包版本控制文件

# 4、ref属性
    - ref被用来给元素或子组件注册引用信息（id的替代者）
    - 应用在html标签上获取的是真实DOM元素，应用在组件标签上获取的是组件实例对象（vc）
    - 使用方式：
        打标识：<h1 ref="xxx"> ... </h1>
        获取：this.$refs.xxx
        
# 5、props
    1. 作用：用于父组件给子组件传递数据
    2. 读取方式一: 只指定名称
    props: ['name', 'age', 'setName']
    3. 读取方式二: 指定名称和类型
    props: {
    name: String, age: Number, setNmae: Function
    }
    4. 读取方式三: 指定名称/类型/必要性/默认值
    props: {
    name: {type: String, required: true, default:xxx}, }
