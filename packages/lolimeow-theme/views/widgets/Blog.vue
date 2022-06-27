<template>
  <div class="boxmoe-blog-content">
    <div class="container-full">
      <div class="row">
        <!-- TODO  页面响应式 -->
        <!-- TODO  页面懒加载 -->
        <div class="col-lg-10 mx-auto">
          <Post v-for="item in 1" :key="item" />
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Pagination from "../../components/Pagination/index.vue";
import Post from "../../components/PostWidget/index.vue";

onMounted(()=>{
  // const instance = getCurrentInstance()
  // console.log(instance)
});
</script>
