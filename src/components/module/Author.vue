<template>
  <div>
    <div class="H">
      <span>推荐作者</span>
      <span @click="replace" class="hyp">换一批</span>
    </div>
    <div>
      <div v-for="index in arr" class="row" style="margin-top: 15px">
        <div class="col-md-2">
          <router-link :to="'/ou/'+index">
            <img :src="authors[index].avatar" class="tx">
          </router-link>
        </div>
        <div class="col-md-8">
          <div>{{authors[index].name}}</div>
          <div class="jj">{{authors[index].info}}</div>
        </div>
        <div class="col-md-2"><span class="gz">关注</span></div>
      </div>
      <div>
        <router-link to="/users">
          <b-button variant="outline-secondary" class="qb">
            查看全部&nbsp;&nbsp;>
          </b-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Author",
      data(){
        return{
          authors:[
            {
              id:1,
              avatar:"https://upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg",
              name:"吴晓布",
              info:"写了593.9k字 · 14.8k喜欢"
            },
            {
              id:2,
              avatar:"https://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg",
              name:"十七楼的安素",
              info:"写了110.8k字 · 368喜欢"
            },
            {
              id:3,
              avatar:"https://upload.jianshu.io/users/upload_avatars/11557689/ed2ea7f3-9d7d-41fc-a05a-daebb8097b0c.jpg",
              name:"须僧",
              info:"写了277.2k字 · 4.4k喜欢"
            },
            {
              id:4,
              avatar:"https://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg",
              name:"格列柯南",
              info:"写了593.6k字 · 14.6k喜欢"
            },
            {
              id:5,
              avatar:"https://upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg",
              name:"lostdays",
              info:"写了159.6k字 · 1.2k喜欢"
            },
            {
              id:6,
              avatar:"https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg",
              name:"无限猴子",
              info:"写了81.7k字 · 264喜欢"
            },
            {
              id:7,
              avatar:"https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg",
              name:"念远怀人",
              info:"写了591k字 · 6.1k喜欢"
            },
            {
              id:8,
              avatar:"https://upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg",
              name:"宇文歡",
              info:"写了140.3k字 · 388喜欢"
            },
            {
              id:9,
              avatar:"https://upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png",
              name:"简书大学堂",
              info:"写了1207.4k字 · 23.2k喜欢"
            },
            {
              id:10,
              avatar:"https://upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg",
              name:"阿栈",
              info:"写了380.9k字 · 679喜欢"
            }
          ],
          arr:[0,1,2,3,4]
        }
      },
      methods:{
        replace(){
          var a = [];
          var j= 0;
          while(j<5){
            var b = Math.floor((Math.random()*this.authors.length));
            if(a.indexOf(b)==-1){
              a.push(b);
              j++;
            }
          };
          this.arr = a;
        }
      }
    }

</script>

<style scoped>
  .qb{
    margin-top: 15px;
    width: 270px;
    height: 35px;
  }
  .H{
    width: 280px;
    display: inline-block;
  }
  span{
    color: darkgray;
  }
  .hyp{
    color: darkgray;
    margin-left: 160px;
  }
  .gz{
    color: green;
    font-size: 15px;
    margin-left: -80px;
  }
  .jj{
    color: darkgray;
    font-size: 13px;
  }
  .tx{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>
