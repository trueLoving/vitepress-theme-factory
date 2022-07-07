<template>
  <div id="search">
    <span class="close">X</span>
    <form role="search" id="searchform" @submit="submit()">
      <div class="search_form_inner animate slideUp">
        <div class="search-bar">
          <i class="fa fa-search"></i>
          <input
            type="search"
            name="s"
            value="Hello World"
            placeholder="输入搜索关键词..."
          />
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
// @ts-nocheck
import { onMounted } from "vue";

function submit() {
  return false;
}

onMounted(() => {
  document
    .querySelector('a[href="#search"]')
    .addEventListener("click", function (event) {
      document.querySelector("#search").classList.add("open");
      document.querySelector('#search > form  input[type="search"]').focus();
      return false;
    });
  document
    .querySelector("#search .close")
    .addEventListener("click", function (event) {
      if (
        event.target == this ||
        event.target.className == "close" ||
        event.keyCode == 27
      ) {
        document.querySelector("#search").classList.remove("open");
      }
    });
});
</script>
