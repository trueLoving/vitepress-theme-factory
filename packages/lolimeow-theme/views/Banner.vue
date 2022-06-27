<template>
  <section
    class="section-blog-cover section-shaped my-0"
    :style="random_banner()"
  >
    <div class="separator separator-bottom separator-skew">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          ></use>
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          ></use>
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          ></use>
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"></use>
        </g>
      </svg>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { theme } = useData();
const banner = computed(() => theme.value.banner);

// 生成范围随机数 Min<=num<=Max
function RandomNumBoth(Min, Max) {
  const Range = Max - Min;
  const Rand = Math.random();
  const num = Min + Math.round(Rand * Range); //四舍五入
  return num;
}

// 生成随机banner的图片url地址，现在使用固定的图片
function random_banner() {
  // 生成随机下标，返回对应的banner地址
  const index = RandomNumBoth(0, banner.value.length);
  return `background-image: url(${banner.value[index]})`;
}
</script>
<style></style>
