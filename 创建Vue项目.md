# 创建Vue项目
## 环境搭建
    node.js + vue环节 + 淘宝镜像
    版本查询命令行
        cnpm i -g vue @vue/cli  # 安装vue环境
        node -v                 #查询node版本
        npm -v                  #查询npm版本（安装node时默认一并安装）
        vue -v                  # 查询vue环境 vue/cli版本

## 目录结构分析
    node_modules    # 存放所有的依赖（第三方库、依赖）（不上传到github）
    public          # 
        favicon.ico # 浏览器左上角的图标来源
        index.html  # 
    src             # 根目录  （重点）
        assets      # 存放静态资源（图标、图片等）
        components  # 存放一般组件
        router      # 配置路由
        store       # 状态管理
        views       # 存放路由组件
        App.vue     # 根组件
        main.js     # 入口js文件
    
    .browserslistrc # 管理浏览器版本
    .gitignore      # git托管网站（不用管）
    babel.config.js # 配置babel的，转义js语法
    jsonfig.json    # 
    package.json    # 包管理文件
    vue.config.js   # vue配置文件
    yarn.lock       # 
