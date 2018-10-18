<template>
    <div>
      <div class="row" v-for="circle in circles" :key="circle.id">
        <div class="col-md-8">
          <div>
            <img v-bind:src="circle.toux" class="tx"/>
            <p v-text="circle.name" class="name"></p>
          </div>
          <p v-text="circle.title" class="title"></p>
          <p v-text="circle.jianj" class="content"></p>
          <p v-text="circle.nick" class="nickname"></p>
        </div>
        <div class="col-md-4">
          <img v-bind:src="circle.pic" class="picture"/>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TimeLine",
      data(){
          return{
            circles:[
              {
                id:1,
                toux:'https://upload.jianshu.io/users/upload_avatars/7241612/80624018-6132-4d38-aeb6-6ea5519c1e90.jpg',
                name:'太湖浪子',
                pic:'https://upload-images.jianshu.io/upload_images/5812633-e588a45f79507124.jpg',
                title:'叶子',
                jianj:'叶子的心语总在摇曳里诉说无规则扑闪回应风的热烈静默独立一种态度绿眷着浓郁淡漠 雨点连绵急促溅起水雾期愿开花轻笑是肆意后的伪装顺流而下带...',
                nick:'浅浅是水'
              },
              {
                id:2,
                toux:'https://upload.jianshu.io/users/upload_avatars/7241612/80624018-6132-4d38-aeb6-6ea5519c1e90.jpg',
                name:'太湖浪子',
                pic:'https://upload-images.jianshu.io/upload_images/5204913-88f4eb6be708ea86.jpg',
                title:'当美丽的皮囊，碰到丑陋的心灵',
                jianj:'01 网上看到网红殴打孕妇的新闻，令人愤怒不已。 在社交平台上拥有300多万粉丝的网红Saya，因自己遛狗未牵绳，与一名孕妇发生冲突，...',
                nick:'程旻子'
              },
              {
                id:3,
                toux:'https://upload.jianshu.io/users/upload_avatars/7241612/80624018-6132-4d38-aeb6-6ea5519c1e90.jpg',
                name:'太湖浪子',
                pic:'https://upload-images.jianshu.io/upload_images/5204913-73cbc08c7ca8f3cf.jpg',
                title:'女神的圆满，靠自己的成全',
                jianj:'01 范冰冰事件，掀起了舆论的高潮。 有人扼腕痛惜，有人口诛笔伐；有人全方位360度地对女神进行剖析，对女神背后的男人施以鄙夷和谩骂。...',
                nick:'程旻子'
              },
              {
                id:4,
                toux:'https://upload.jianshu.io/users/upload_avatars/7241612/80624018-6132-4d38-aeb6-6ea5519c1e90.jpg',
                name:'太湖浪子',
                pic:'https://upload-images.jianshu.io/upload_images/11370292-e0d28086f65846c9.jpg',
                title:'【若有所思】学习雷锋好榜样',
                jianj:'昨日晚自习，听见预备铃声响起，就上教学楼去。楼下正在忙乎清洁的杨大姐一边收拾垃圾，一边哼唱着“集体主义闪光芒”。我这才听清楚楼上有一个...',
                nick:'古眼'
              },
              {
                id:5,
                toux:'https://upload.jianshu.io/users/upload_avatars/2755980/434aaab2-070e-45c8-98de-a192011ce8ec.jpg',
                name:'黄焕新',
                pic:'https://upload-images.jianshu.io/upload_images/13809128-08ccf8a54e5a6b10.jpg',
                title:'星空 田园',
                jianj:'星空是按照简书千漫千寻的小教程涂得 然后留白液的点点太大了<< 用小程序加上框自己看起来还挺好玩 嘿 田园是跟着书昨天画一半，今天画一...',
                nick:'瓜zei'
              },
              {
                id:6,
                toux:'https://upload.jianshu.io/users/upload_avatars/11132130/4ccca25d-98ff-491f-a7c4-fdda0be639b5.jpg',
                name:'米鹿米鹿',
                pic:'https://upload-images.jianshu.io/upload_images/5889454-4ee6737c6fadfadd.png',
                title:'这就是你避孕失败的下场',
                jianj:'今天的文章关于 90 后女孩，刚刚当了妈的那种。 我的同事们采访了十几个妈妈，关于这种身份变化，她们的最大感受几乎只有一个字：慌。 业...',
                nick:'新世相'
              },
              {
                id:7,
                toux:'https://upload.jianshu.io/users/upload_avatars/9167292/d6d9b8a6-e7e5-48a4-9878-0e992479f51d.jpg',
                name:'半樵玉涛',
                pic:'https://upload-images.jianshu.io/upload_images/7947669-6a6da96aefd3124e.jpg',
                title:'孙子兵法计谋篇·一',
                jianj:'孙子曰： 兵者，国之大事，死生之地，存亡之道，不可不察也。 故经之以五事，校之以计而索其情：一曰道，二曰天，三曰地，四曰将，五曰法。道...',
                nick:'苏白杞'
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .picture{
    width: 130px;
    height: 100px;
    margin-top: 20px;
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
  .tx{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    float: left;
  }
  .name{
    font-size: 13px;
    margin-left: 40px;
  }
</style>
