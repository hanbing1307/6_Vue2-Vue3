// 这样子不能直接运行，但是在脚手架创建项目下就可以运行
import App from './App.vue'

new Vue({
    el:'root',
    template:'<App></App>',
    components:{App},
})