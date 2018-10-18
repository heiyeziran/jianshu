<template>
  <div>
    <b-row>
      <b-col cols="8">
        <div class="main-top">
          <div class="avatar-collection">
            <img :src="topic.topicUrl">
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
        <v-article></v-article>
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
  import vArticle from '../module/Article';

  export default {
    components: {
      vArticle
    },
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
      console.log(this.id);
      if (this.id == 1) {
        var t = {
          "id": 1,
          "topicName": "读书",
          "topicUrl": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
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
              "title":"测试文章",
              "summary":"测试文章测试文章测试文章测试文章测试文章...",
              "thumbnail":"1.png",
              "authorId":2,
              "nickname":"作者",
              "comments":1234,
              "likes":12
            }
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
