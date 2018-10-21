<template>
    <div>
      <div class="row" v-for="article in articles" :key="article.id">
        <div class="col-md-8">
          <p v-text="article.title" class="title"></p>
          <p v-text="article.content" class="content"></p>
          <p v-text="article.nickname" class="nickname"></p>
        </div>
        <div class="col-md-4">
          <img v-bind:src="article.pic" class="picture"/>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          articles:[
            {
              id:1,
              title:"入职阿里巴巴两年工资才15k, 和领导谈完答应给我涨薪后我哭了",
              content:"在一家大企业工作时，所有人都希望自己可以升职加薪。但是当你发现和你同一级别的员工技术和你差不多，但是工资却比你的高，而且他的工作几乎和你的一样",
              pic:"//upload-images.jianshu.io/upload_images/13133049-07f0bc43dbe26300.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"IT智云编程"
            },
            {
              id:2,
              title:"曾经国内出现过的奇葩手机品牌，这些你知道吗？",
              content:"随着手机市场的发展，有兴起的手机市场，但也有没落的，在众多的手机市场中，那么这几款国内手机你知道吗？ 小辣椒 小辣椒是国内的一款手机品牌",
              pic:"//upload-images.jianshu.io/upload_images/11438883-c7806f68e520bb38?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"超逗的二哈少爷"
            },
            {
              id:3,
              title:"2018年Java程序员的现状，风光背后的危机！",
              content:"2018年，Java程序员面临更加激烈的竞争。 不得不承认，经历过行业的飞速发展期，互联网的整体发展趋于平稳。为什么这么说？ ",
              pic:"//upload-images.jianshu.io/upload_images/10297697-d647664a5dea4ec1?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"美的让人心动"
            },
            {
              id:4,
              title:"干掉Java后，Python薪酬榜第一了！（文末送书）",
              content:"如果你只能选读一门编程语言，那么除了 Python，还是 Python。 正文开始前，我们将共同解锁 2018 年主流的十大编程语言！",
              pic:"//upload-images.jianshu.io/upload_images/12988208-1da2afb257142957?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"python女神"
            },
            {
              id:5,
              title:"介绍10款最常用的代码编辑器",
              content:"通常操作系统和软件开发包中都包含文本编辑器，可以用来编辑配置文件，文档文件和源代码。 下面总结的 10 个最好的免费代码文本编辑器：",
              pic:"//upload-images.jianshu.io/upload_images/10878070-8b8b2609334ba1d9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"西安北大青鸟官微"
            },
            {
              id:6,
              title:"SQL注入的简单案例",
              content:"什么是SQL注入 SQL注入是现在普通使用的一种攻击手段，就是通过把非法的SQL命令插入到Web表单中或页面请求查询字符串中，最终达到欺骗服务器.",
              pic:"//upload-images.jianshu.io/upload_images/10027900-469b7fa7b6d61df7.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"敢想敢测"
            },
            {
              id:7,
              title:"Visual Studio Code 1.27 发布，新特性来袭",
              content:"来自：开源中国（oschina2013） Visual Studio Code 1.27 已发布，一些主要的更新亮点包括： Settings e..",
              pic:"//upload-images.jianshu.io/upload_images/1977282-4eac92105b1a9be5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"开源中国"
            },
            {
              id:8,
              title:"常用 Git 命令",
              content:"Git最常用的命令示意图 下面是我整理的常用 Git 命令清单。几个专用名词的译名如下。 Workspace：工作区 Index / Stage..",
              pic:"//upload-images.jianshu.io/upload_images/3256507-a01a24cee65fe713.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"InnocenceYWQ"
            },
            {
              id:9,
              title:"微信再次改版，内容运营该何去何从？",
              content:"就在今晚，微信6.7.3 iOS版正式更新了！ 作为每天都需要和微信打交道的产品狗，听到这个消息后，立马更新了最新版微信体验了一番。这篇文章主要.",
              pic:"//upload-images.jianshu.io/upload_images/6877825-7de349446dadbcd5.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"小凉柚"
            },
            {
              id:10,
              title:"程序员的修行-《1.高效chrome插件》",
              content:"介绍 在本篇文章中，我要向大家简单介绍如何通过插件打造个性化的chrome浏览器，方便程序员或者是其他依赖于互联网来工作的同学更加高效的工作学习..",
              pic:"//upload-images.jianshu.io/upload_images/1884963-38ee152a3bc2693d.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"wywincl"
            },
            {
              id:11,
              title:"Java中的多线程你只要看这一篇就够了",
              content:"如果对什么是线程、什么是进程仍存有疑惑，请先Google之，因为这两个概念不在本文的范围之内。 用多线程只有一个目的，那就是更好的利用cpu的资..",
              pic:"//upload-images.jianshu.io/upload_images/13372770-d0592e6dd0e4256c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"Java架构师那些事"
            },
            {
              id:12,
              title:"超级强大的vim配置(vimplus)",
              content:"An automatic configuration program for vim 安装(github地址：https://github.co...",
              pic:"//upload-images.jianshu.io/upload_images/4768590-2f11712764c12d56.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              nickname:"锐心凌志"
            }
          ]
        }
      },
        name: "Articles"
    }
</script>

<style scoped>
.picture{
  width: 130px;
  height: 100px;
}
  .title{
    font-size: 19px;
    font-weight: bold;
  }
  .content{
    font-size: 15px;
    color: grey;
  }
  .nickname{
    font-size: 11px;
    color: darkgray;
  }
</style>
