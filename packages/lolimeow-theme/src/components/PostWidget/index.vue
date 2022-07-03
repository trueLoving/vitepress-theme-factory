<template>
  <div
    class="post-list-view blog-border wow zoomIn animated"
    style="visibility: visible; animation-name: zoomIn"
  >
    <i class="post-hello-cat"></i>
    <div class="post-thumbnail featured-image">
      <a
        href="javascript:void(0)"
        :title="frontmatter.title"
        @click="navigatePage"
        class="post-overlay"
      >
        <img
          class="img-fluid"
          src="../../assets/images/banner/7.jpg"
          :alt="frontmatter.title"
      /></a>
    </div>
    <div class="post-list-content">
      <div class="post-list-header">
        <span class="category-meta">
          <a
            v-for="c in frontmatter.categories"
            href="javascript:void(0)"
            @click="navigateCategory"
            :title="`查看 ${c} 下的所有文章`"
            rel="category tag"
            style="margin-right: 5px"
          >
            <i class="fa fa-folder-o"></i>{{ c }}</a
          >
        </span>
        <h2 class="post-list-title">
          <a href="javascript:void(0)" @click="navigatePage">{{
            frontmatter.title
          }}</a>
        </h2>
      </div>
      <div class="post-list-text">
        {{ frontmatter.abstract }}
      </div>
      <div class="post-list-info">
        <div class="post-list-avatar">
          <img
            :src="frontmatter.avatar"
            class="avatar photo"
            width="50"
            height="50"
            alt="avatar"
          />
        </div>
        <div class="post-meta-info">
          <span class="list-post-date">
            <i class="fa fa-clock-o"></i>Post on {{ frontmatter.date }}</span
          >
          <span class="list-post-view">
            <i class="fa fa-street-view"></i>{{ frontmatter.views }}</span
          >
          <span class="list-post-comment">
            <i class="fa fa-comments-o"></i>{{ frontmatter.comments }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  post: {
    default: {
      frontmatter: {
        cover: "../../assets/images/banner/7.jpg",
        title: "自造简易php+mysql上传下载网盘/中转网盘/快传网盘程序",
        author: "喵笔记",
        avatar: "https://avatars.githubusercontent.com/u/44056372?v=4",
        abstract: `支持功能： 1.支持api上传，别的站可以对接接口上传文件 2.支持api取件，别的站可以对接接口取件下载 3.自定义允...`,
        date: "2022-01-12",
        views: "3.16k",
        comments: "17",
        categories: ["喵笔记", "abc", "edf"],
      },
      link: "https://www.boxmoe.com/576.html",
    },
  },
});

const { post } = props;
const { frontmatter } = post;

function navigatePage(event) {
  event.preventDefault(); // 阻止 a 标签跳转
  console.log("navigatePage");
}

function navigateCategory(event) {
  event.preventDefault(); // 阻止 a 标签跳转
  console.log("navigateCategory");
}

//
// TODO 设计组件的数据状态
// TODO 设计组件的交互响应
</script>
