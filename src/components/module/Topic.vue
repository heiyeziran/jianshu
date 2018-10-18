<template>
    <div class="t_collection">
      <a class="collection" v-for="topic in topics" :key="topic.id">
        <router-link :to=" '/c/'+topic.id ">
          <img v-bind:src="topic.url" class="pic">
          <div class="tt" v-text="topic.title"></div>
        </router-link>
      </a>
      <router-link to="/collections">
        <a style="color: lightslategrey">更多热门专题&nbsp;></a>
      </router-link>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          topics:[
            {
              id: 1,
              url:"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              title:"简书电影 "
            },
            {
              id: 2,
              url:"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              title:"手绘 "
            },
            {
              id: 3,
              url:"//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              title:"摄影 "
            },
            {
              id: 4,
              url:"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              title:"自然科普 "
            },
            {
              id: 5,
              url:"//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              title:"@IT·互联网 "
            },
            {
              id: 6,
              url:"//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              title:"读书 "
            },
            {
              id: 7,
              url:"//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
              title:"故事 "
            }
          ]
        }
      },
        name: "Topic"
    }
</script>

<style scoped>
  .t_collection{
  margin-bottom: 20px;
  }
  .tt{
    display: inline-block;
    color: black;
  }
  .collection {
    display: inline-block;
    margin: 0 18px 18px 0;
    min-height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    vertical-align: top;
    overflow: hidden;
  }
  .pic{
    width: 35px;
    height: 35px;
  }
</style>
