import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import store from './store.js'

Vue.use(VueRouter);

const router = new VueRouter({
	routes
});
console.log(router)



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
