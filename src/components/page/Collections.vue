<template>
    <div class="container">
      <img src="https://cdn2.jianshu.io/assets/web/recommend-collection-58f8968955ecbeb8f8f3b4cd95ec76be.png"
      class="bt">
      <p class="rh">如何创建并玩转专题？</p>
      <div class="down">
        <b-tabs>
          <b-tab title=" 推荐" active>
            <br>
            <div class="row">
              <div class="col-md-4" v-for="topic in topicList" :key="topic.id">
                <b-card class="card">
                  <router-link :to=" '/c/'+topic.id ">
                    <img v-bind:src="topic.topicUrl" class="pic">
                    <p class="name">{{topic.topicName}}</p>
                    <p class="title">{{topic.topicInfo}}</p>
                  </router-link>
                  <b-button size="size" variant="success">关注</b-button>
                  <hr>
                  <span>{{topic.topicArticle}}篇文章</span>
                  <span> · {{topic.topicFans}}k人关注</span>
                </b-card>
              </div>
            </div>
          </b-tab>

          <b-tab title=" 热门" >
            <br>热门
          </b-tab>
          <b-tab title=" 城市">
            <br>城市
          </b-tab>
          <b-tab title=" 校园">
            <br>校园
          </b-tab>
        </b-tabs>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Collections",
      data(){
          return{
            topicList:[
              {
                id:1,
                'topicUrl':'https://upload.jianshu.io/collections/images/21/20120316041115481.jpg',
                'topicName':'简书电影',
                'topicInfo':'欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...',
                'topicArticle':89310,
                'topicFans':1868,
              },
              {
                id:2,
                'topicUrl':'https://upload.jianshu.io/collections/images/13/%E5%95%8A.png',
                'topicName':'旅行·在路上',
                'topicInfo':'邂逅一个国家，讲述一座城市，这里有你期待的诗与远方.1.投稿请查看....',
                'topicArticle':104217,
                'topicFans':2553.0,
              },
              {
                id:3,
                'topicUrl':'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg',
                'topicName':'手绘',
                'topicInfo':'欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...',
                'topicArticle':89310,
                'topicFans':1868,
              },
              {
                id:4,
                'topicUrl':'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg',
                'topicName':'读书',
                'topicInfo': '  投稿须知:读书专题仅收录与读书有关的书评、读书笔记...',
                'topicArticle':89310,
                'topicFans':1868,
              },
              {
                id:5,
                'topicUrl':'https://upload.jianshu.io/collections/images/95/1.jpg',
                'topicName':'故事',
                'topicInfo':'故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的虚构故...',
                'topicArticle':89310,
                'topicFans':1868,
              },
              {
                id:6,
                'topicUrl':'https://upload.jianshu.io/collections/images/83/1.jpg',
                'topicName':'摄影',
                'topicInfo':'欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...',
                'topicArticle':69565,
                'topicFans':1951.5,
              },
              {
                id:7,
                'topicUrl':'https://upload.jianshu.io/collections/images/76/12.jpg',
                'topicName':'自然科普',
                'topicInfo':'本专题仅收涉及自然科学(生物、天文、物理等)的科普、介绍、发现类文章，....',
                'topicArticle':5412,
                'topicFans':1116.0,
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .name{
    font-size: 20px;
    color: black;
  }
  .title{
    color: #3C3C3C;
  }
  .col-md-4 {
    text-align: center;
    float:left;
    margin-top: 80px;
  }
  .card{
    background-color: #EEEEEE;
  }
  .pic{
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin-top: -70px;
  }
  .down{
    margin-top: 80px;
  }
  .bt{
    width: 960px;
    height: 100px;
  }
  .rh{
    margin-left: 780px;
    margin-top: -62px;
    color: white;
  }
</style>
