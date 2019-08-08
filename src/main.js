import Vue from 'vue';
import App from './App.vue';
// import { MdField } from 'vue-material/dist/components';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-light.css';

Vue.use(VueMaterial);

Vue.config.productionTip = false;
Vue.material.locale.dateFormat = 'dd/MM/yyyy';

new Vue({
  render: h => h(App),
}).$mount('#app')
