<template>
  <transition name="fade">
    <div class="lolijump" @click="goUp" v-if="isShow">
      <img src="../../assets/images/top/lemon.gif" />
    </div>
  </transition>
</template>
<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";

let isShow = ref(false);

function showGoUp() {
  const scrollTop = document.documentElement.scrollTop;
  isShow.value = scrollTop >= 100;
}

onMounted(() => {
  window.addEventListener("scroll", showGoUp);
});
// 当组件卸载时移除挂在时注册的 window 事件
onUnmounted(() => {
  window.removeEventListener("scroll", showGoUp);
});
function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
<style>
.lolijump {
  position: fixed;
  bottom: 40px;
  right: 120px;
  width: 65px;
  height: 65px;
  z-index: 999;
}
.lolijump img {
  max-width: 100% !important;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
</style>
