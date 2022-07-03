<template>
  <!-- <Loading/> -->
  <Home />
  <Footer />
  <GoTop />
  <SearchBox />
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Home from "./views/Home.vue";
import Footer from "./views/Footer.vue";
import GoTop from "./components/GoTop/index.vue";
import SearchBox from "./components/SearchBox/index.vue";

onMounted(() => {
  // @ts-ignore
  import("./components/Sakura/index.js");
});
</script>
