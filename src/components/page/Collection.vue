<template>
  <div>
    <b-row>
      <b-col cols="8">
        <div class="main-top">
          <div class="avatar-collection">
            <img :src="topic.topicUrl" class="pic">
          </div>
          <a class="btn btn-success follow">
            <span>+关注</span>
          </a>
          <div class="btn btn-hollow js-contribute-button">
            投稿
          </div>
          <div class="title">
            <h3>{{topic.topicName}}</h3>
          </div>
          <div class="info">
            <p>
              <span>收藏了{{topic.articleCount}}篇文章,{{topic.fans}}人关注。</span>
            </p>
          </div>
        </div><hr/>
        <!--专题文章-->
        <div class="row" v-for="article in topic.articleList" :key="article.id">
          <div class="col-md-8">
            <router-link :to=" '/p/'+article.id ">
              <p v-text="article.title" class="title"></p>
              <p v-text="article.summary" class="content"></p>
            </router-link>
            <span v-text="article.nickname" class="nickname"></span>
            <span class="nickname">评论:{{article.comments}}</span>
            <span class="nickname">喜欢:{{article.likes}}</span>
          </div>
          <div class="col-md-4">
            <img v-bind:src="article.thumbnail" class="picture"/>
          </div>
        </div>
      </b-col>
      <b-col cols="4">
        <p class="greyFont">专题公告</p>
        <div class="discription">
          <p>{{topic.description}}</p>
          <p>
            <span class="greyFont">作者：{{topic.creator}}</span>
          </p>
        </div>
        <div>
          <div class="title greyFont">关注的人</div>
          <div class="list" v-for="fans in topic.fansList" :key="topic.fansList.authorId">
            <div>
              <a href="#" class="avatar">
                <img v-bind:src="fans.avatar">
              </a>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        topic: {},
        articleList: [],
        fansList:[]
      }
    },
    activated() {
      this.id = this.$route.params.id;
      if (this.id == 1) {
        var t = {
          "id": 1,
          "topicName": "简书电影",
          "topicUrl": "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
          "summary": "读书读书读书读书读书读书读书读书",
          "articleCount": 49535,
          "fans": 1601,
          "description":"读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。文中不得出现非简书的链接;" +
            "包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。 " +
            "文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。 ",
          "creator":"简书",
          "articleList":[
            {
              "id":1,
              "title":"《了不起的盖茨比》：了不起的爱",
              "summary":"我们继续奋力向前，逆水行舟，被不断地向后推，直至回到往昔岁月。 所有的光新靓丽都敌不过时间，并且一去不复返。 他们在最美的年华相遇相爱，带着梦幻...",
              "thumbnail":"//upload-images.jianshu.io/upload_images/13308516-ae2abb978f54cf38.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":2,
              "nickname":"茉莉先生",
              "comments":2,
              "likes":2
            },
            {
              "id":2,
              "title":"沦为“性奴”的3096天：不是你死便是我亡！",
              "summary":"“绑架”一直都是电影里的热门题材 而现实事件改编，更是吸引人 今天小编便推荐一部由真事改编的”地牢囚禁案” ——《3096天》 故事发生在奥地利...",
              "thumbnail":"//upload-images.jianshu.io/upload_images/2424569-2dc37af38acd62a9?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":3,
              "nickname":"电影有得聊",
              "comments":4,
              "likes":58
            },
            {
              "id":3,
              "title":"一段被外国人拍摄的中国历史，恐怕以后都不可能被超越了",
              "summary":"大家好，我是兔子 一个爱电影的文科男 1986年，意大利人贝纳尔多·贝托鲁奇带着一支“多国部队”，浩浩荡荡的开进了故宫。 他们是第一批授权进入故...",
              "thumbnail":"//upload-images.jianshu.io/upload_images/8965596-14fd7f817454f7ba?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":4,
              "nickname":"雪兔电影分享",
              "comments":7,
              "likes":28
            },
            {
              "id":4,
              "title":"上影节：姜文这回彻底火了一把",
              "summary":"第21届上海国际电影节，自6月16日开幕以来，一时群星璀璨、现场好不热闹。 而作为本届电影节评委会主席的姜文，最受瞩目。 其新作《邪不压正》，及..",
              "thumbnail":"//upload-images.jianshu.io/upload_images/2954739-db587840e1f657bb?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":5,
              "nickname":"电影夫人",
              "comments":1,
              "likes":7
            },
            {
              "id":5,
              "title":"豆瓣评分第一的电影《肖申克的救赎》你真的看懂了吗",
              "summary":"这部影片1994年在美国上映，讲述了20世纪40年代在美国发生的故事，故事的主人公安迪，因为被律师控告谋杀自己的妻子和妻子的情人，被法官判处无期...",
              "thumbnail":"//upload-images.jianshu.io/upload_images/2460789-ed4959cb843b2daa.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":6,
              "nickname":"陌颜oc",
              "comments":56,
              "likes":94
            },
            {
              "id":6,
              "title":"推荐7部容易被忽视的好电影，看过两部就算你厉害了！",
              "summary":"一、鳄鱼波鞋走天涯(1995) 9.1分 电影讲述了两个单亲家庭小男孩子在暑假的友情故事，其中一个因输血染上艾滋病，另一个因为缺少关爱而性格孤僻...",
              "thumbnail":"//upload-images.jianshu.io/upload_images/7040788-ca9a1b3e9c6ab9e5?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":7,
              "nickname":"七芒电影",
              "comments":14,
              "likes":134
            },
            {
              "id":7,
              "title":"喂！是不是欠了我一个妹妹啊！",
              "summary":"图|来源于微博，侵立删 文|陌尘 昨天看了《快把我哥带走》终于忍不住还是写了一篇文。已经近乎五个月未写文了，感觉简书都陌生了很多！（下文中对演员....",
              "thumbnail":"//upload-images.jianshu.io/upload_images/4381936-6683944c713a1a80.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":8,
              "nickname":"紫陌尘曦",
              "comments":3,
              "likes":4
            },
            {
              "id":8,
              "title":"富察皇后：有40位后妃的乾隆，却用72年独爱了她一人",
              "summary":"文/麦大人 01 她是乾隆的白月光 要问最近最红的一部电视剧，当然是于正监制的《延禧攻略》，虽然匆匆定档却收获意外之喜。 秦岚饰演的富察皇后，作..",
              "thumbnail":"//upload-images.jianshu.io/upload_images/2259045-34538bf15bdaa009?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":9,
              "nickname":"麦大人",
              "comments":35,
              "likes":195
            },
            {
              "id":9,
              "title":"你没看错，这才是周迅的15岁！",
              "summary":"（本文由小青蛙看电影原创：xqwkdy） 《如懿传》宣传就做了一年多， 上映后关于周迅45岁演15岁的小姑娘槽点满满。 不少人感叹：就不能找一个...",
              "thumbnail":"//upload-images.jianshu.io/upload_images/2321684-d7f20fcbce2d13d7?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId":10,
              "nickname":"小青蛙看电影",
              "comments":12,
              "likes":29
            },
          ],
          "fansList":[
            {
              "authorId":1,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/8857037/225fcf20-6063-4aa6-b77d-1a92b899cfde.jpg"
            },
            {
              "authorId":2,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/4942178/6e2a8315-5ce7-45f3-a89d-682d064eb481.jpg"
            },
            {
              "authorId":3,
              "avatar":"https://upload.jianshu.io/users/upload_avatars/1628531/dd3407d5-b59f-41e0-91b9-948e63c126b6.jpg"
            },
            {
              "authorId":4,
              "avatar":"https://cdn2.jianshu.io/assets/default_avatar/12-aeeea4bedf10f2a12c0d50d626951489.jpg"
            },
            {
              "authorId":5,
              "avatar":"https://cdn2.jianshu.io/assets/default_avatar/7-0993d41a595d6ab6ef17b19496eb2f21.jpg"
            },
            {
              "authorId":6,
              "avatar":"https://cdn2.jianshu.io/assets/default_avatar/3-9a2bcc21a5d89e21dafc73b39dc5f582.jpg"
            },
          ]
        };
        this.topic = t;
      } else {
        this.topic = {};
      }
    },
    computed: function () {
      return this.topic;
    }
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
    color: black;
  }
  .content{
    font-size: 15px;
    color: grey;
  }
  .nickname{
    font-size: 11px;
    color: darkgray;
  }
  .main-top{
    margin-bottom: 35px;
    box-sizing: border-box;
    display: block;
  }
  .main-top .avatar-collection{
    float: left;
    width: 100px;
    height: 100px;
  }
  .avatar-collection{
    display: block;
    cursor: pointer;
  }
  .pic{
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
  .main-top .title{
    padding: 10px 0 0 100px;
  }
  .title{
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,
    sans-serif;
  }
  .main-top .info{
    margin-top: 10px;
    padding-left: 100px;
    font-size: 14px;
    color: #969696;
  }
  .main-top .follow{
    padding: 8px 0;
    width: 100px;
  }
  .main-top .btn{
    float: right;
    margin: 23px 0 23px 16px;
    font-size: 15px;
  }
  .follow{
    border-color: #42c02e;
    font-weight: 400;
    line-height: normal;
    padding: 8px 22px;
  }
  .btn-success{
    border-radius: 40px;
    color: #fff;
    background-color: #42c02e;
  }
  .btn{
    display: inline-block;
    text-align: center;
    vertical-align: center;
    touch-action: manipulation;
    cursor: pointer;
    border: 1px solid transparent;
    white-space: nowrap;
    user-select: none;
  }
  .main-top .btn-hollow{
    padding: 8px 0;
    width: 90px;
  }
  .btn-hollow{
    border:1px solid rgba(59,194,29,.7);
    color: #42c02e!important;
    font-weight: 400;
    line-height: normal;
    border-radius: 40px;
    background: none;
  }
  .greyFont{
    color: #969696;
  }
  .avatar img {
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-left: -10px;
    width: 32px;
    height: 32px;
  }
  .list{
    float: left;
  }
</style>
