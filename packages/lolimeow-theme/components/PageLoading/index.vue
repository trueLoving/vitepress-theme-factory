<template>
  <div class="pageLoading">
    <div class="book">
      <div class="inner">
        <div class="left"></div>
        <div class="middle"></div>
        <div class="right"></div>
      </div>
      <ul>
        <li v-for="item in 18" :key="item"></li>
      </ul>
    </div>
  </div>
</template>
<style>
@import "./style.css";
</style>
