<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{ schoolName }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">点我显示学校名</button>
    </div>
</template>

<script>
    // 组件交互相关代码（数据、方法等）
    // 三种暴露方式 
    // 第一种暴露：export const school  分别暴露
     export default {
        name:'School',
        data(){
            return{
                schoolName:'尚硅谷',
                address:'北京市'
            }
        },
        methods: {
            showName(){
                alert(this.schoolName)
            }
        },
    }
    // 第二种暴露：统一暴露 export {school}
    // 第三种暴露：默认暴露 export default school
</script>

<style>
    /* 组件样式 */
    .demo{
        background-color: blue;
    }
</style>