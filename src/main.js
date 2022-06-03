import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import  "amfe-flexible";
import Vant from 'vant';
import 'vant/lib/index.css';
// 指令
import directives from './utils/directives';
// import './mock/index.js'
Vue.use(Vant);
Vue.config.productionTip = false


// keys values entries
Object.entries(directives).forEach(([id,define])=>{
  console.log(id,define)
  Vue.directive(id,define);
})
// 过滤器
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
