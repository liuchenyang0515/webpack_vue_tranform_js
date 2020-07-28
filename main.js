import vue from 'vue'
import vueRouter from 'vue-router'
import Comp from './view/comp.vue'
// =========== 测试babel语法转换
let a = (a, b) => { }
new Promise((resolve) => {
    setTimeout(() => {
        console.log(123123);
        resolve();
    }, 2000);
});
// ===========
let vm = new vue({
    render: h => h(Comp)
}).$mount("#app")

window.My_Methods = {
    displayImg() {
        console.log(vm.$children);
        vm.$children[0].flag = true;
    }
}
