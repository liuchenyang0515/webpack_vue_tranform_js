# webpack_vue_tranform_js
手写简单webpack配置，写的vue文件转换为js文件提供给第三方引用，比如`<script src="我打包出来的js" />`
<br>
效果就是打包之后`test2.html`自动引入了`test.js`,这是模拟第三方引入, 但是第三方引入你的`test.js`并不想立马渲染页面。比如你写的登录页面，第三方自己有网站，点击按钮之后调用你的js就展示了你写的登录页面。(看起来就是vue展示的页面打包变成了js文件，你引入后，调用初始化方法渲染一下就出来了一个页面)
<br>
**我遇到过的难点:**<br>
这里需要处理的就是点击按钮显示，然后**关闭之后**如何再次显示的问题。我遇到的问题是关闭后无法再次打开。
<br>

其实仅仅是挂载一次，但是我们要操作一个标志位来控制是否显示，但是这个标志位如何从`main.js`操作`vue`组件的`data`里面的变量值来控制`v-show`逻辑，具体见`main.js`，我这里new Vue只渲染了`comp.vue`，所以`vm`只有一个子节点`[Vuecomponent]`，打印`vm.$children[0]`就可以看到`data`里面的变量值和`methods`里面的方法，操作`data`里面的`flag`**就可以操作标志位了**

<br>
这并不是一个好例子，只是为了验证webpack打包的正确性
