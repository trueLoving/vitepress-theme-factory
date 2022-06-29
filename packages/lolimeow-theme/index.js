import Layout from './Layout.vue';
import NotFound from './views/NotFound.vue';
import './assets/css/style.css'; // 全局样式 
import * as posts from './composables/posts';

export default {
  Layout,
  NotFound,
  enhanceApp: async function (context) {
    const result = await posts.fetchPosts()
    console.log('result', result)
  }
}
