import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMobileDetection from 'vue-mobile-detection'

Vue.use(VueMobileDetection)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
