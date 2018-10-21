// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import  {library}  from '@fortawesome/fontawesome-svg-core'
import  {faCoffee}  from '@fortawesome/free-solid-svg-icons'
import  {FontAwesomeIcon}  from '@fortawesome/vue-fontawesome'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon/iconfont.css';


Vue.config.productionTip = false
Vue.use(jquery)
Vue.use(bootstrap)
Vue.use(ElementUI);
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
