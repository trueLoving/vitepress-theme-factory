<template>
  <div class="boxmoe-blog-content">
    <div class="container-full">
      <div class="row">
        <!-- TODO  页面响应式 -->
        <!-- TODO  页面懒加载 -->
        <div class="col-lg-10 mx-auto">
          <Post v-for="item in 10" :key="item" />
          <Pagination :total="45" @page-change="pageChange" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Pagination from "../../components/Pagination/index.vue";
import Post from "../../components/PostWidget/index.vue";

const pageNumber = ref(1);

function pageChange(pn) {
  // update Post Data
  pageNumber.value = pn;
  window.scrollTo({
    top: 800,
    behavior: "smooth",
  });
}
</script>
