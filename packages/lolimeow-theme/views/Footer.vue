<!-- .vitepress/theme/views/Footer.vue -->
<!-- 待完善 -->
<template>
  <footer class="footer pb-3 pt-3 position-relative">
    <div class="container">
      <hr class="horizontal dark" />
      <div class="row">
        <div class="col-lg-3">
          <h6 class="font-weight-bolder mb-lg-4 mb-3">
            <i class="fa fa-sign-language"></i>
            {{ theme.author }}
          </h6>
        </div>
        <div class="col-lg-6 text-center">
          <p class="mb-0 copyright">
            Copyright©2022
            <a href="#" target="_blank">盒子萌</a>
            | Theme by
            <a href="https://www.boxmoe.com" target="_blank">LoLiMeow</a>'
          </p>
        </div>
        <div class="col-lg-3 text-end">
          <a
            v-for="(value, key) in theme.links"
            :href="value ? value : '#'"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            :title="key"
            target="_blank"
            data-fancybox="images"
            data-fancybox-group="button"
            class="text-secondary me-xl-4 me-4"
          >
            <i :class="`fa fa-${key}`"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useData } from "vitepress";
const { theme } = useData();
</script>
