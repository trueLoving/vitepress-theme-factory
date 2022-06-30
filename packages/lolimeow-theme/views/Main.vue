<!-- .vitepress/theme/views/Home.vue -->
<template>
  <section class="boxmoe_blog">
    <!-- TODO:　singlepage or null -->
    <SiteMain />
    <!-- 如果当前 frontmatter.layout 值为 'home', 为 Home 否则就为 Content -->
    <Blog v-if="frontmatter.layout === 'home'" />
    <Category v-else-if="frontmatter.layout === 'category'" />
    <Tag v-else-if="frontmatter.layout === 'tag'" />
    <Content v-else />
  </section>
</template>
<script setup lang="ts">
import Blog from "./widgets/Blog.vue";
import Category from "./widgets/Category.vue";
import Tag from "./widgets/Tag.vue";
import SiteMain from "./SiteMain.vue";
import { useData } from "vitepress";
const { frontmatter } = useData();
</script>
