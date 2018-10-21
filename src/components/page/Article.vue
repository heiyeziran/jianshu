<template>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <h2>{{article.articleTitle}}</h2>
        <div class="author">
          <img :src="article.authorAvatar" class="avatar"/>
          <span class="authorname">{{article.authorNick}}</span>
          <span>
          <b-button size="sm" variant="success" class="gz">关注</b-button>
        </span>
          <div class="info">
            <span>{{article.createTime}}</span>
            <span>字数{{article.workCount}}</span>
            <span>阅读{{article.lookCount}}</span>
            <span>评论{{article.comments}}</span>
            <span>喜欢{{article.like}}</span>
          </div>
        </div>
        <div>
          <img v-bind:src="article.pic" class="picture"/>
          <p class="content">{{article.word}}</p>
        </div>
        <div>
          <span class="pl">{{article.comments}}条评论</span>
          <span><b-button size="sm" variant="outline-secondary" class="zz">只看作者</b-button></span>
          <span class="px">按时间正序</span>
          <span>按时间倒序</span><hr/>
          <div v-for="comment in article.commentList" :key="comment.id">
            <div>
              <img :src="comment.userAvatar" class="userAvatar">
              <span class="usernick">{{comment.userNick}}</span>
              <span class="commenttime">{{comment.commentTime}}</span>
            </div>
            <div class="div2">
              <p>{{comment.commentContent}}</p>
            </div>
            <div>
              <span>赞</span>
              <span>回复</span>
            </div><hr/>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
</template>

<script>
    export default {
        name: "Article",
      data(){
          return{
            id:this.$route.params.id,
            article:{},
            commentList:[]
          }
      },
      activated(){
          this.id=this.$route.params.id;
          if(this.id==1){
            var a={
              "id":1,
              "articleTitle":"《了不起的盖茨比》：了不起的爱",
              "authorAvatar":"https://upload.jianshu.io/users/upload_avatars/13308516/34235e38-e906-4b29-859b-9ff2ea288018.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
              "authorNick":"茉莉先生",
              "createTime":"2018.10.20 20:14",
              "workCount":1821,
              "lookCount":141,
              "comments":2,
              "like":2,
              "pic":'https://upload-images.jianshu.io/upload_images/13308516-ae2abb978f54cf38.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000',
                  'word':'我们继续奋力向前，逆水行舟，被不断地向后推，直至回到往昔岁月。\n' +
                  '\n' +
                  '所有的光新靓丽都敌不过时间，并且一去不复返。 \n' +
                  '\n' +
                  '他们在最美的年华相遇相爱，带着梦幻般的色彩，一见倾心，一眼万年。某天，他弃她而去，追逐属于他们自己的未来生活，继续编织着梦幻般的生活......\n' +
                  '\n' +
                  '《不起的盖茨比》这本小说，曾经在人生的某些时刻，给予我很大的力量。\n' +
                  '\n' +
                  '所以我很难掩饰自己对这个故事个人化的喜爱\n' +
                  '\n' +
                  '在看这本书和电影的时候，感觉作者充满极强的警醒、冷漠与抽离，却有同时具备极深的感情、代入与同情。这种看似矛盾却交融的感觉，给人如梦似真的体验与感悟。\n' +
                  '\n' +
                  '电影用浓烈的色彩和让人炫目的奢华打造了一个熠熠生辉的上层社会的纽约，人物与故事有一种梦的感觉。\n' +
                  '\n' +
                  '年轻时的盖茨比并不富有，他是一个少校军官。他爱上了一位叫黛茜的姑娘，黛茜对他也情有所钟。后来第一次世界大战爆发，盖茨比被调往欧洲。似是偶然却也是必然，黛茜因此和他分手，转而与一个出身于富豪家庭的纨绔子弟汤姆结了婚。黛茜婚后的生活并不幸福，因为汤姆另有情妇。物欲的满足并不能填补黛西精神上的空虚。盖茨比痛苦万分，他坚信是金钱让黛茜背叛了心灵的贞洁，于是立志要成为富翁。几年以后，盖茨比终于成功了。他在黛茜府邸的对面建造起了一幢大厦。盖茨比挥金如土，彻夜笙箫，一心想引起黛茜的注意，以挽回失去的爱情。\n' +
                  '\n' +
                  '尼克为盖茨比的痴情所感动，便去拜访久不联系的远房表妹黛茜，并向她转达盖茨比的心意。黛茜在与盖茨比相会中时时有意挑逗。盖茨比昏昏然听她随意摆布，并且天真地以为那段不了情有了如愿的结局。\n' +
                  '\n' +
                  '然而真正的悲剧却在此时悄悄启幕。黛茜早已不是旧日的黛茜。黛茜不过将她俩的暖昧关系，当做一种刺激。尼克终于有所察觉，但为时已晚。一次黛茜在心绪烦乱的状态下开车，偏偏轧死了丈夫的情妇。盖茨比为保护黛茜，承担了开车责任，但黛茜已打定主意抛弃盖茨比。在汤姆的挑拨下，致使其情妇的丈夫开枪打死了盖茨比。盖茨比最终彻底成为了牺牲品。\n' +
                  '\n',
              'commentList':[
                {
                  'id':1,
                  "userAvatar":"https://upload.jianshu.io/users/upload_avatars/14414923/3bf99397-971c-4e2c-915d-8b14926ac91d?imageMogr2/auto-orient/strip|imageView2/1/w/114/h/114",
                  "userNick":"靈魂丶織舞",
                  "commentContent":"理想中的爱情",
                  "commentTime":"2018.10.21 12:51"
                },
                {
                  'id':2,
                  "userAvatar":"https://cdn2.jianshu.io/assets/default_avatar/9-cceda3cf5072bcdd77e8ca4f21c40998.jpg",
                  "userNick":"海边的曼彻斯特q",
                  "commentContent":"如果打算爱一个人，你要想清楚，是否愿意为了他，放弃如上帝般自由的心灵，从此心甘情愿有了羁绊。\n" +
                  "不愿意\n" +
                  "我们谁不是活在自己梦里的人 每时每刻",
                  "commentTime":"2018.10.21 13:41 "
                }
              ]
            };
            this.article=a;
          }else {
            this.article={};
          }
      },
      computed: function () {
        return this.article;
      }
    }
</script>

<style scoped>
  .usernick{
    margin-left: 10px;
  }
  .commenttime{
    color: #969696;
    font-size: 12px;
    margin-left: 50px;
  }
  .userAvatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .div2{
    margin-top: 10px;
  }
  .pl{
    font-weight: bold;
  }
  .px{
    margin-left: 400px;
  }
  .zz{
    border-radius: 20px;
    margin-left: 15px;
  }
  .content{
    margin-top: 30px;
  }
  .picture{
    width: 700px;
    height: 380px;
    margin-top: 35px;
  }
  .gz{
    width: 60px;
    height: 27px;
    border-radius: 10px;
    margin-top: -10px;
  }
  .author{
    margin-top: 30px;
    margin-left: 125px;
  }
  h2{
    text-align: center;
  }
  .avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .authorname{
    font-size: 20px;
    margin-left: 10px;
  }
  .info{
    margin-left:65px ;
    margin-top: -20px;
  }
  .info span{
    font-size: 13px;
    color: slategray;
  }
</style>
