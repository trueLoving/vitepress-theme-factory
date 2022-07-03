<template>
  <div class="boxmoe-blog-content">
    <div class="container-full">
      <div class="row">
        <div class="col-lg-10 mx-auto single">
          <div class="single-card mb-4">
            <div class="post-single">
              <div class="post-header">
                <p class="post-category">
                  <a
                    href="https://www.boxmoe.com/meownotes"
                    title="查看《喵笔记》下的所有文章 "
                    rel="category tag"
                    ><i class="fa fa-folder-o"></i>喵笔记</a
                  >
                </p>
                {{frontmatter}}
                <h3 class="post-title">
                  {{frontmatter.title}}
                </h3>
                <div class="post-meta thw-sept">
                  <div class="post-auther-avatar">
                    <img
                      src="https://q2.qlogo.cn/headimg_dl?dst_uin=504888738&amp;spec=100"
                      class="avatar avatar-50 photo"
                      width="50"
                      height="50"
                      alt="avatar"
                    />
                  </div>
                  <div class="post-meta-info">
                    <span class="post-date">
                      <i class="fa fa-clock-o"></i>Post on 2022-06-18</span
                    >
                    <span class="post-view">
                      <i class="fa fa-street-view"></i>105</span
                    >
                    <span class="post-comment">
                      <i class="fa fa-comments-o"></i>0</span
                    >
                  </div>
                </div>
              </div>
              <div class="post-content">
                <Content />
              </div>

              <div class="post-footer">
                <div class="post-tags">
                  <div class="article-categories"></div>
                </div>
              </div>
            </div>

            <nav class="post-navigation thw-sept">
              <div class="row no-gutters">
                <div class="col-12 col-md-6">
                  <div class="post-previous">
                    <span><i class="fa fa-angle-left"></i> Previous Post </span>
                    <h4>本文分类下已经是最后一篇文章了哦！</h4>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="post-next">
                    <a href="https://www.boxmoe.com/605.html" rel="prev"
                      ><span>Next Post <i class="fa fa-angle-right"></i></span>
                      <h4>
                        批量修改文件夹内图片名为数字 1.jpg 2.jpg 3.jpg…排序
                      </h4></a
                    >
                  </div>
                </div>
              </div>
            </nav>

            <div class="container postrelated mt-5">
              <div class="row">
                <div class="thw-sept"></div>
                <div class="col-lg-4">
                  <div class="card card-plain card-blog">
                    <div
                      class="card-image border-radius-lg position-relative cursor-pointer"
                    >
                      <div class="blur-shadow-image">
                        <a href="https://www.boxmoe.com/605.html"
                          ><img
                            class="img img-raised"
                            src="https://www.boxmoe.com/img/random.php?size=bmiddle&amp;p=?rsQ9e"
                            alt="批量修改文件夹内图片名为数字 1.jpg 2.jpg 3.jpg...排序"
                        /></a>
                      </div>
                    </div>
                    <div class="card-body px-0">
                      <p>批量修改文件夹内图片名为数字 …</p>
                      <a
                        href="https://www.boxmoe.com/605.html"
                        title="批量修改文件夹内图片名为数字 1.jpg 2.jpg 3.jpg…排序"
                        class="text-info icon-move-right"
                        >阅读更多<i class="fa fa-arrow-right text-sm ms-1"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card card-plain card-blog">
                    <div
                      class="card-image border-radius-lg position-relative cursor-pointer"
                    >
                      <div class="blur-shadow-image">
                        <a href="https://www.boxmoe.com/601.html"
                          ><img
                            class="img img-raised"
                            src="https://www.boxmoe.com/img/random.php?size=bmiddle&amp;p=?hQomu"
                            alt="php脚本多网站监控状态宕机或者错误QQ机器人通知"
                        /></a>
                      </div>
                    </div>
                    <div class="card-body px-0">
                      <p>php脚本多网站监控状态宕机或者…</p>
                      <a
                        href="https://www.boxmoe.com/601.html"
                        title="php脚本多网站监控状态宕机或者错误QQ机器人通知"
                        class="text-info icon-move-right"
                        >阅读更多<i class="fa fa-arrow-right text-sm ms-1"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="card card-plain card-blog">
                    <div
                      class="card-image border-radius-lg position-relative cursor-pointer"
                    >
                      <div class="blur-shadow-image">
                        <a href="https://www.boxmoe.com/584.html"
                          ><img
                            class="img img-raised"
                            src="https://www.boxmoe.com/img/random.php?size=bmiddle&amp;p=?3uCRU"
                            alt="php程序的安全加载，常量没有定义就不加载此文件"
                        /></a>
                      </div>
                    </div>
                    <div class="card-body px-0">
                      <p>php程序的安全加载，常量没有定…</p>
                      <a
                        href="https://www.boxmoe.com/584.html"
                        title="php程序的安全加载，常量没有定义就不加载此文件"
                        class="text-info icon-move-right"
                        >阅读更多<i class="fa fa-arrow-right text-sm ms-1"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";

const data = useData();
const { frontmatter } = data;
</script>

<style></style>
