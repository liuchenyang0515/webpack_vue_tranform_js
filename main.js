import vue from 'vue'
import vueRouter from 'vue-router'
import Comp from './view/comp.vue'

new vue({
    render : h=>h(Comp)
}).$mount('#app')