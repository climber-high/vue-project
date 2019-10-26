import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// import 'mint-ui/lib/style.css'
// import MintUI from 'mint-ui'
// Vue.use(MintUI)

import { Button ,Ceil} from 'mint-ui';
Vue.component(Button.name, Button);

// import { Button, Select } from 'element-ui';
// Vue.component(Button.name, Button);
// Vue.use(Button)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

