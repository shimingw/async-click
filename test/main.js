import Vue from 'vue'
import asyncClick from '../lib/index'
Vue.use(asyncClick)
// import "regenerator-runtime/runtime.js"
import App from "./demo.vue";

new Vue({
    render: h => h(App)
}).$mount('#app')