# webpack_vue_tranform_js
手写简单webpack配置，写的vue文件转换为js文件提供给第三方引用，比如`<script src="我打包出来的js" />`
<br>
效果就是打包之后`test2.html`自动引入了`test.js`,这是模拟第三方引入
你写好的东西被打包成了js，别人引入就成了一个页面，比如你写的登录页面，第三方自己有网站，点击登录之后调用你的js就展示了你写的登录页面。
