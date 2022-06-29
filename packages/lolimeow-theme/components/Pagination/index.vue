<template>
  <div class="col-lg-12 col-md-12 pagenav">
    <nav class="d-flex justify-content-center">
      <ul class="pagination" v-if="maxPage <= 5">
        <li
          class="page-item"
          v-for="item in maxPage"
          :key="item"
          :class="`${item === currentPage ? 'active' : ''}`"
        >
          <a class="page-link" href="#" @click="pageChange(item)">{{ item }}</a>
        </li>
      </ul>
      <ul class="pagination" v-else>
        <li class="page-item" v-if="currentPage !== 1">
          <a class="page-link" href="#"
            ><i class="fa fa-angle-double-left"></i
          ></a>
        </li>
        <li class="page-item" v-if="currentPage !== 1">
          <a class="page-link">···</a>
        </li>
        <!-- TODO: 逻辑待完善 -->
        <li
          class="page-item"
          v-for="item in 7"
          :key="item"
          :class="`${currentPage + item - 1 === currentPage ? 'active' : ''}`"
        >
          <a
            class="page-link"
            href="#"
            v-if="currentPage + item - 1 <= maxPage"
            @click="pageChange(currentPage + item - 1)"
            >{{ currentPage + item - 1 }}</a
          >
        </li>
        <li class="page-item">
          <a class="page-link" v-if="currentPage !== maxPage && maxPage > 7"
            >···</a
          >
        </li>
        <li class="page-item" v-if="currentPage !== maxPage && maxPage > 7">
          <a class="page-link" href="#"
            ><i class="fa fa-angle-double-right"></i
          ></a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

const emits = defineEmits(["pageChange"]);

const props = defineProps({
  total: {
    required: true,
    type: Number,
  },
});

// 默认分页10页
const currentPage = ref(1); // 当前页数，默认第一页
const limit = 10; // 一页多少条数
const { total } = props; // 总数，外部传入
const maxPage = computed(() => Math.ceil(total / limit)); // 最大页数

function pageChange(pageNumber) {
  console.log(pageNumber);
  currentPage.value = pageNumber;
  emits("pageChange", pageNumber); // 事件向上抛出
}
</script>
