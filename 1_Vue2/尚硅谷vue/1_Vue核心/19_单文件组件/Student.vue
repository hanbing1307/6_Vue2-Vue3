<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>

    </div>
</template>

<script>
    // 组件交互相关代码（数据、方法等）
    // 三种暴露方式 
    // 第一种暴露：export const school  分别暴露
     export default {
        name:'Student',
        data(){
            return{
                name:'孙悟空',
                age: 18
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