<template>
    <div>
      <div class="row">
        <div class="col-md-4">
          <div class="top">
            <b-form-select v-model="selected" :options="options" class="xuan"/>
            <span class="gz">添加关注</span>
          </div>
          <div class="brand_col">
            <div class="brand_list">
              <div v-for="Follow in Follows" :key="Follow.id" style="margin-top: 15px">
                <router-link to="/subscriptions/timeline">
                  <img :src="Follow.avatar">
                  <span>{{Follow.name}}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    import VueEditor from "./VueEditor";
    export default {
      name: "Subscriptions",
      components: {VueEditor},
      data(){
          return{
            text:'',
            selected: 'f',
            options: [
              { value: 'f', text: '全部关注' },
              { value: 'a', text: '只看作者' },
              { value: 'b', text: '只看专题' },
              { value: 'c', text: '只看文集' },
              { value: 'd', text: '只看推送更新'}
            ],
            Follows:[
              {
                id:1,
                avatar:"https://cdn2.jianshu.io/assets/web/jianyouquan-2fb0cd72e35147c79d6507c3a3a2591b.png",
                name:"简友圈"
              },
              {
                id:2,
                avatar:"https://upload.jianshu.io/collections/images/95/1.jpg",
                name:"故事"
              },
              {
                id:3,
                avatar:"https://upload.jianshu.io/users/upload_avatars/2509688/e55553f1-0544-4bde-ad4d-48bcfc01e856.png",
                name:"阿里云云栖社区"
              },
              {
                id:4,
                avatar:"https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg",
                name:"@IT·互联网"
              },
              {
                id:5,
                avatar:"https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg",
                name:"手绘"
              },
              {
                id:6,
                avatar:"https://upload.jianshu.io/users/upload_avatars/7241612/80624018-6132-4d38-aeb6-6ea5519c1e90.jpg",
                name:"太湖浪子"
              },
              {
                id:7,
                avatar:"https://upload.jianshu.io/users/upload_avatars/5731803/3740b03a-e7ba-4e99-8b94-a4d4cfa5ec86.jpg",
                name:"笔点酷玩"
              },
              {
                id:8,
                avatar:"https://upload.jianshu.io/users/upload_avatars/2492401/f96af50f-0ed1-4a2d-9898-325dff891616.png",
                name:"牛客网"
              },
              {
                id:9,
                avatar:"https://upload.jianshu.io/users/upload_avatars/2755980/434aaab2-070e-45c8-98de-a192011ce8ec.jpg",
                name:"黄焕新"
              },
              {
                id:10,
                avatar:"//upload.jianshu.io/users/upload_avatars/9167292/d6d9b8a6-e7e5-48a4-9878-0e992479f51d.jpg",
                name:"半樵玉涛"
              },
            ]
          }
      }
    }
</script>

<style scoped>
  .xuan{
    width: 150px;
    height: 40px;
    margin-left: 30px;
  }
  .gz{
    margin-left: 60px;
    margin-top: -30px;
  }
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  span{
    color: black;
  }
  .brand_col {
    width: 188px;
    margin: 0 0 0 37px;
    display: block;
  }
  .brand_col .brand_list {
    width: 288px;
    height: 600px;
    margin: 0;
    display: block;
    overflow-y: scroll;
  }
</style>
