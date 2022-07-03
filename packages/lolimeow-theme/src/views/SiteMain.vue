<template>
  <div class="container">
    <div class="site-main">
      <h1 class="main-title">
        <i class="fa fa-heartbeat"></i>
        <span id="hitokoto"
          >错误可不是为了别人才改的过来的，要为了自己才能改正。</span
        >
      </h1>
    </div>
    <div class="section-head">
      <span>{{ Layout }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useData } from "vitepress";
import { computed, onMounted } from "vue";
const { frontmatter } = useData();
const Layout = computed(() => frontmatter.value.layout || "Single");
</script>
