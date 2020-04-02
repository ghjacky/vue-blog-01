import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import {router} from "@/router";
import locale from "element-ui/src/mixins/locale";
import  'element-ui/lib/theme-chalk/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTwitter, faFacebook, faQq, faWeibo, faWeixin } from "@fortawesome/free-brands-svg-icons";

library.add(faUserSecret, faGithub, faTwitter, faFacebook, faQq, faWeibo, faWeixin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(ElementUI, {locale})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

