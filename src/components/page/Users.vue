<template>
  <div class="container">
    <img src="https://cdn2.jianshu.io/assets/web/recommend-author-03cc8798d5cc3f986e49cbcb2eb63079.png"
         class="bt">
    <p class="rh">如何成为签约作者？</p>
    <div class="down">
      <div class="row">
        <div class="col-md-4" v-for="user in userList" :key="user.id">
          <b-card class="card">
            <router-link :to=" '/ou/'+user.id ">
              <img v-bind:src="user.userAvatar" class="pic">
              <p class="name">{{user.userNick}}</p>
              <p class="title">{{user.userInfo}}</p>
            </router-link>
            <b-button size="size" variant="success">关注</b-button><hr>
            <p class="work">{{user.userWork1}}</p>
            <p class="work">{{user.userWork2}}</p>
            <p class="work">{{user.userWork3}}</p>
          </b-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Users",
      data(){
          return{
            userList:[
              {
                id:1,
                userAvatar:'https://upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg',
                userNick:'lostdays',
                userInfo:'僕を好きだと言う君が大嫌い。',
                userWork1:'。',
                userWork2:'日出之城',
                userWork3:'七2018-10-16'
              },
              {
                id:2,
                userAvatar:'https://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg',
                userNick:'格列柯南',
                userInfo:'经济学本科，哲学硕士，博士攻读历史，现研习演...',
                userWork1:'朋友不止于挠挠痒：重复博弈下的互惠利他',
                userWork2:'传统中国何以不需要神？孔子与达尔文的对话',
                userWork3:'“己所不欲，勿施于人”的博弈论解析'
              },
              {
                id:3,
                userAvatar:'https://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg',
                userNick:'遛遛心情的溜妈',
                userInfo:'溜爸，简书签约作者，舞枪弄棒、舞文弄墨的计算...',
                userWork1:'［奇幻］唐朝那些猫事儿（88）',
                userWork2:'孩子说，书中自有好朋友',
                userWork3:'［奇幻］唐朝那些猫事儿（87）'
              },
              {
                id:4,
                userAvatar:'https://upload.jianshu.io/users/upload_avatars/3884693/b425c707-d998-46a6-98b1-9b1e241513c3.jpg',
                userNick:'王诗翔',
                userInfo:'合抱之木，生于毫末九层之台，起于垒土千里...',
                userWork1:'【r<-fun|♡ 】用字符画出Z的曲线',
                userWork2:'PBS脚本一些重要参数',
                userWork3:'【r<-模型】使用purrr和broom处理多个模型'
              },
              {
                id:5,
                userAvatar:'https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg',
                userNick:'乔汉童',
                userInfo:'已出版小说《不夜谈系列》，目前全国各大书店均...',
                userWork1:'不夜谈之玲珑骰（第六幕）神山归藏',
                userWork2:'不夜谈之玲珑骰（第五幕）青色烟雨',
                userWork3:'不夜谈之玲珑骰（第四幕）百步之外'
              },
              {
                id:6,
                userAvatar:'https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg',
                userNick:'胡七筒',
                userInfo:'码代码，码文字，从不偷工减料。他有着一副...',
                userWork1:'程序猿生存指南-23 自娱自乐',
                userWork2:'程序猿生存指南-22 老潘归来',
                userWork3:'程序猿生存指南-21 全民编程'
              },
              {
                id:7,
                userAvatar:'https://upload.jianshu.io/users/upload_avatars/8972166/bd7164e9-2272-4ecf-91d0-f4903a150d4f.jpg',
                userNick:'冰千里',
                userInfo:'私人执业心理咨询师重度孤独爱好者...',
                userWork1:'【听心理】 规则，有时会让孩子画地为牢',
                userWork2:'“健康”的内疚，是孩子获取责任心的重要方式',
                userWork3:'【听心理】国庆假期后的三种心理状态'
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .work{
    font-size: 13px;
  }
  .bt{
    width: 1080px;
    height: 100px;
  }
  .name{
    font-size: 20px;
    color: black;
  }
  .title{
    color: #3C3C3C;
  }
  .card{
    background-color: #EEEEEE;
    height: 330px;
  }
  .col-md-4 {
    text-align: center;
    float:left;
    margin-top: 80px;
  }
  .rh{
    margin-left: 780px;
    margin-top: -62px;
    color: white;
  }
  .down{
    margin-top: 50px;
  }
  .pic{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: -70px;
  }
</style>
