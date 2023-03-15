# Vue内置指令与自定义指令
## 常用内置指令
1. v-text : 更新元素的 textContent
2. v-html : 更新元素的 innerHTML
3. v-if : 如果为 true, 当前标签才会输出到页面
4. v-else: 如果为 false, 当前标签才会输出到页面
5. v-show : 通过控制 display 样式来控制显示/隐藏
6. v-for : 遍历数组/对象
7. v-on : 绑定事件监听, 一般简写为@
8. v-bind : 绑定解析表达式, 可以省略 v-bind
9. v-model : 双向数据绑定
10. v-cloak : 防止闪现, 与 css 配合: [v-cloak] { display: none }

# 自定义指令
1. 注册全局指令
Vue.directive('my-directive', function(el, binding){
el.innerHTML = binding.value.toupperCase()
})
2. 注册局部指令
directives : {
'my-directive' : {
bind (el, binding) {
el.innerHTML = binding.value.toupperCase()
}
}
}
1) 使用指令
v-my-directive='xxx'