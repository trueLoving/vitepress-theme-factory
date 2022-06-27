<!-- .vitepress/theme/Layout.vue -->
<template>
  <!-- <Loading/> -->
  <Home />
  <Footer />
  <GoTop />
  <SearchBox />
</template>
<script setup>
import Home from "./views/Home.vue";
import Footer from "./views/Footer.vue";
import GoTop from "./components/GoTop/index.vue";
import SearchBox from "./components/SearchBox/index.vue";
// import Loading from './components/PageLoading/index.vue'
// TODO: 打包环境区分
// if (import.meta.env.SSR) {
// import("./components/Sakura/index.js");
// }
</script>
