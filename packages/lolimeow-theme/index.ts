import { Theme } from 'vitepress';
import './assets/css/style.css'; // 全局样式 
import Layout from './Layout.vue';
import NotFound from './views/NotFound.vue';


const LWTheme: Theme = {
  Layout,
  NotFound,
  enhanceApp: async function ({ app }) {
    // TODO: 
  }
}

export * as markdown from './markdown/index'

export default LWTheme
