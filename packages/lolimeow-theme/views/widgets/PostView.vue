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
                <h3 class="post-title">
                  Linux 使用 systemctl 启动frp并设置开机自启
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
                <h2 class="section-title">
                  <span><i class="fa fa-gear"></i>安装systemctl</span>
                </h2>
                <pre
                  class="prettyprint linenums"
                ><div class="btn-copy"><span class="single-copy copy" data-clipboard-target="#copy0" title="点击复制本段代码"><i class="fa fa-files-o"></i> 复制代码</span></div><ol class="linenums" id="copy0"><li class="L0"><span class="pln">yum install systemd</span><span class="pun">-</span><span class="pln">sysv </span><span class="pun">&amp;&amp;</span><span class="pln"> reboot</span></li><li class="L1"><span class="pln">apt install systemd</span><span class="pun">-</span><span class="pln">sysv </span><span class="pun">&amp;&amp;</span><span class="pln"> reboot</span></li></ol></pre>
                <h2 class="section-title">
                  <span><i class="fa fa-gear"></i>文字</span>
                </h2>
                <p>
                  首先创建服务（ frps.service）：<br />
                  <code>/lib/systemd/system/frps.service</code><br />
                  在frps.service里写入以下内容
                </p>
                <pre
                  class="prettyprint linenums"
                ><div class="btn-copy"><span class="single-copy copy" data-clipboard-target="#copy1" title="点击复制本段代码"><i class="fa fa-files-o"></i> 复制代码</span></div><ol class="linenums" id="copy1"><li class="L0"><span class="pun">[</span><span class="typ">Unit</span><span class="pun">]</span></li><li class="L1"><span class="typ">Description</span><span class="pun">=</span><span class="pln">fraps service</span></li><li class="L2"><span class="typ">After</span><span class="pun">=</span><span class="pln">network</span><span class="pun">.</span><span class="pln">target network</span><span class="pun">-</span><span class="pln">online</span><span class="pun">.</span><span class="pln">target syslog</span><span class="pun">.</span><span class="pln">target</span></li><li class="L3"><span class="typ">Wants</span><span class="pun">=</span><span class="pln">network</span><span class="pun">.</span><span class="pln">target network</span><span class="pun">-</span><span class="pln">online</span><span class="pun">.</span><span class="pln">target</span></li><li class="L4"><span class="pln">&nbsp;</span></li><li class="L5"><span class="pun">[</span><span class="typ">Service</span><span class="pun">]</span></li><li class="L6"><span class="typ">Type</span><span class="pun">=</span><span class="pln">simple</span></li><li class="L7"><span class="pln">&nbsp;</span></li><li class="L8"><span class="com">#启动服务的命令（此处写你的frps的实际安装目录）</span></li><li class="L9"><span class="typ">ExecStart</span><span class="pun">=[/</span><span class="pln">your</span><span class="pun">/</span><span class="pln">path</span><span class="pun">]/</span><span class="pln">frps </span><span class="pun">-</span><span class="pln">c </span><span class="pun">[</span><span class="str">/your/</span><span class="pln">path</span><span class="pun">]/</span><span class="pln">frps</span><span class="pun">.</span><span class="pln">ini</span></li><li class="L0"><span class="pln">&nbsp;</span></li><li class="L1"><span class="pun">[</span><span class="typ">Install</span><span class="pun">]</span></li><li class="L2"><span class="typ">WantedBy</span><span class="pun">=</span><span class="pln">multi</span><span class="pun">-</span><span class="pln">user</span><span class="pun">.</span><span class="pln">target</span></li></ol></pre>
                <p>
                  启动<br />
                  frps sudo systemctl start frps<br />
                  打开自启动<br />
                  sudo systemctl enable frps
                </p>
                <h2 class="section-title">
                  <span><i class="fa fa-gear"></i>相关命令</span>
                </h2>
                <pre
                  class="prettyprint linenums"
                ><div class="btn-copy"><span class="single-copy copy" data-clipboard-target="#copy2" title="点击复制本段代码"><i class="fa fa-files-o"></i> 复制代码</span></div><ol class="linenums" id="copy2"><li class="L0"><span class="com">#启动 frps</span></li><li class="L1"><span class="pln">sudo systemctl start frps</span></li><li class="L2"><span class="com">#重启</span></li><li class="L3"><span class="pln">sudo systemctl restart frps</span></li><li class="L4"><span class="com">#停止 </span></li><li class="L5"><span class="pln">sudo systemctl stop frps</span></li><li class="L6"><span class="com">#查看应用日志</span></li><li class="L7"><span class="pln">sudo systemctl status frps</span></li></ol></pre>
                <p>
                  systemd的Unit放在目录<br />
                  Centos<br />
                  <code>/usr/lib/systemd/system</code><br />
                  Ubuntu debian<br />
                  <code>/etc/systemd/system</code>
                </p>
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

<script setup lang="ts"></script>

<style></style>
