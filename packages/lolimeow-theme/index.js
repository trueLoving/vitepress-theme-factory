import Layout from './Layout.vue';
import NotFound from './views/NotFound.vue';
import './assets/css/style.css'; // 全局样式 

export default {
  Layout,
  NotFound,
  enhanceApp(context) {
    // console.log('context', context)
  }
}
