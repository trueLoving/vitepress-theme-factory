<!-- .vitepress/theme/views/Home.vue -->
<template>
  <div class="boxmoe_global">
    <Header />
    <Banner />
    <Main />
  </div>
</template>
<script setup lang="ts">
import Header from "./Header.vue";
import Banner from "./Banner.vue";
import Main from "./Main.vue";
import { useData } from "vitepress";
const { frontmatter } = useData();
</script>
