# vue 生命周期分析
1) 初始化显示
* beforeCreate():   此时，无法通过vm访问到data中的数据、methods中的方法
* created()：       此时，可以通过vm访问到data中的数据、methods中的方法
* beforeMount()：   此时，1、页面呈现的是未经Vue编译的DOM结构
                        2、所有对DOM的操作，最终都不生效
* mounted()         此时，1、页面呈现的是经过Vue编译的DOM结构
                        2、对DOM的操作均有效（尽可能避免）
                        至此初始化过程结束，一般在此进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件等初始化操作

                        
2) 更新状态: this.xxx = value
这里会实时监听data数据的变化，如果有更新，那会就会先重新渲染虚拟DOM，然后再给对应位置更新数据
* beforeUpdate()   
* updated()
3) 销毁 vue 实例: vm.$destory()
* beforeDestory()   这里是vue实例被销毁之前执行的钩子函数
* destoryed()       这里是vue实例被销毁之后执行的钩子函数


# 常用的生命周期方法
1. mounted(): 发送 ajax 请求, 启动定时器等异步任务
2. beforeDestory(): 做收尾工作, 如: 清除定时器




Vue官网图