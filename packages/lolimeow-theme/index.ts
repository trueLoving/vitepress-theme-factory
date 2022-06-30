import { Theme } from 'vitepress';
import Layout from './Layout.vue';
import NotFound from './views/NotFound.vue';
import './assets/css/style.css'; // 全局样式 

const LWTheme: Theme = {
  Layout,
  NotFound,
  enhanceApp: async function ({ app }) {
    // const result = await posts.fetchPosts()
    // console.log('result', result)
  }
}


export default LWTheme
