<template>
    <div class="container person">
      <div class="row">
        <b-col cols="8">
          <div class="main-top">
            <div class="avatar-collection">
              <img :src="author.avatar">
            </div>
            <a class="btn btn-success follow">
              <span>+关注</span>
            </a>
            <div class="btn btn-hollow js-contribute-button">
              投稿
            </div>
            <div class="title">
              <h3>{{author.name}}</h3>
            </div>
            <div class="info">
              <p>
                <span>{{author.info}}</span>
              </p>
            </div>
          </div>
          <v-article></v-article>
        </b-col>
        <b-col cols="4">
          <div>
            <img src="https://ws1.sinaimg.cn/large/00792MPDgy1fwfvktd36xj3080031q2t.jpg"/>
          </div>
          <p class="greyFont">个人介绍</p>
          <div class="discription">
            <p>
              {{author.description}}
            </p>
          </div>
        </b-col>
      </div>

    </div>
</template>

<script>
  import vArticle from "../module/Articles"

    export default {
      components:{
        vArticle
      },

      data() {
        return {
          id: this.$route.params.id,
          author: {},
        }
      },
      activated() {
        this.id = this.$route.params.id;
        console.log(this.id);
        if (this.id == 0) {
          var t = {
            "id":1,
            "avatar":"https://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg",
            "name":"吴晓布",
            "info":"写了593.9k字 · 14.8k喜欢",
            "description":"合抱之木，生于毫末；九层之台，起于累土。"
          };
          this.author = t;
        } else {
          this.author = {};
        }
      },
      computed: function () {
        return this.author;
      },
        name: "OtherUser"
    }
</script>
<style scoped>
  .greyFont{
    color: #969696;
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

  .avatar-collection img {
    width: 80px;
    height: 80px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-left: -10px;
  }
</style>
