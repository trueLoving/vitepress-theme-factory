<template>
  <header class="header-global">
    <nav
      id="navbar-main"
      class="navbar navbar-expand-lg navbar-light navbar-transparent headroom headroom--not-bottom headroom--pinned headroom--top"
    >
      <div class="container">
        <a
          class="logo navbar-brand font-weight-bold"
          href="/"
          title="boxmoe"
        >
          <img src="../assets/images/logo.png" alt="盒子萌" class="headerlogo"
        /></a>
        <button
          class="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon mt-2">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div
          class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
          id="navigation"
        >
          <ul class="navbar-nav navbar-nav-hover mx-auto">
            <li
              v-for="navItem in nav"
              :key="navItem.text"
              :class="geNavLiClass(navItem)"
            >
              <a
                :href="navItem.link"
                :class="geNavAClass(navItem)"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                ><i :class="`fa ${navItem.icon}`"></i>{{ navItem.text }}</a
              >
              <ul class="dropdown-menu depth_0" v-if="navItem.children">
                <li
                  class="nav-item"
                  v-for="navLink in navItem.children"
                  :key="navLink.text"
                >
                  <a :href="navLink.link" class="dropdown-item">{{
                    navLink.text
                  }}</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#search" class="nav-link"
                ><i class="fa fa-search"></i>Search</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useData } from "vitepress";
import Headroom from "headroom.js"; // 使用 headroom.js 来控制头部的显示与隐藏

const { theme } = useData();
const nav = computed(() => theme.value.nav);

const geNavLiClass = (navItem) => {
  return navItem.children ? "dropdown dropdown-hover nav-item" : "nav-item";
};

const geNavAClass = (navItem) => {
  return navItem.children ? "dropdown-toggle nav-link" : "nav-link";
};

onMounted(() => {
  const headroom = new Headroom(document.querySelector("#navbar-main"), {
    offset: 300,
    tolerance: {
      up: 30,
      down: 30,
    },
  });
  headroom.init();
});
</script>
