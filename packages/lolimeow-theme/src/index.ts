// @ts-nocheck
import { inBrowser, Theme } from 'vitepress';
import Layout from './Layout.vue';
import './assets/css/style.css'; // 全局样式 
import NotFound from './views/NotFound.vue';

const LWTheme: Theme = {
  Layout,
  NotFound,
  enhanceApp: async function ({ app }) {
    // TODO: 
    if (inBrowser) {
      import.meta.hot.on('hello', data => {
        console.log('data', data)
      })
    } else {
      console.log("data")
    }
  }
}

export default LWTheme
