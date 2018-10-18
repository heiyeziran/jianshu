<template>
<div>
  <div>
    <span>性别</span>
    <b-form-group class="zuhe">
      <b-form-radio-group v-model="selected"
                          :options="options"
                          plain
                          name="plainInline" />
    </b-form-group>
  </div><hr/>
  <div>
    <span>个人简介</span>
    <b-form-textarea id="textarea1"
                     v-model="text"
                     placeholder="填写你的个人简介"
                     :rows="4"
                     :max-rows="4">
    </b-form-textarea>
  </div><hr/>
  <div>
    <span>个人网站</span>
    <b-form-input v-model="text1"
                  id="grwz"
                  type="text"
                  placeholder="http://你的网址">
    </b-form-input>
    <span class="wzts">填写后会在个人主页显示图标</span>
  </div><hr/>
  <div>
    <span>微信二维码</span>
    <b-button variant="outline-success sm" class="bd">更换图片</b-button>
    <span class="wxts">上传后会在个人主页显示图标</span>
  </div><hr/>
  <div class="row">
    <div class="col-md-2">
      <span>社交账号</span>
    </div>
    <div class="col-md-10">
      <div>
        <p class="ts">你可以通过绑定的社交帐号登录简书。出于安全因素, 你最初用来创建账户的社交帐号不能移除。</p>
        <p class="ts">如果帐号被占用，你可以在
          <a href="https://www.jianshu.com/p/eea64a29cf9d">简书帐号绑定解绑相关问题汇总</a>
          中获得相关帮助。</p>
      </div>
      <div>
        <img src="/static/img/微博.png"/>
        <span class="tb" style="margin-left: 50px">绑定微博&nbsp;></span>
      </div><hr/>
      <div>
        <img src="/static/img/微信.png">
        <span style="margin-left: 50px">√已绑定</span>
      </div><hr/>
      <div>
        <img src="/static/img/qq.png"/>
        <span style="margin-left: 50px">√已绑定</span>
      </div><hr/>
      <div>
        <img src="/static/img/豆瓣.png"/>
        <span class="tb" style="margin-left: 50px">绑定豆瓣&nbsp;></span>
      </div><hr/>
      <div>
        <img src="/static/img/Google+.png"/>
        <span class="tb" style="margin-left: 35px">绑定Google+&nbsp;></span>
      </div>
    </div>
  </div>
  <div>
    <b-button variant="success" class="baocun">保存</b-button>
  </div>
</div>
</template>

<script>
    export default {
        name: "PersonSet",
      data(){
          return{
            selected: 'third',
            text:'',
            text1:'',
            options: [
              { text: '男', value: 'first' },
              { text: '女', value: 'second' },
              {text:'保密',value:'third'}
            ]
          }
      }
    }
</script>

<style scoped>
  span{
    color: #A2A2A2;
  }
  .baocun{
    margin-top: 50px;
    width: 100px;
    border-radius: 15px;
  }
  .zuhe{
    margin-left: 150px;
    margin-top: -25px;
  }
  #textarea1{
    width: 500px;
    background-color: #DDDDDD;
    margin-left: 150px;
    margin-top: -20px;
  }
  #grwz{
    width: 500px;
    background-color: #DDDDDD;
    margin-left: 150px;
    margin-top: -25px;
  }
  .bd{
    border-radius: 15px;
    margin-left: 90px;
  }
  .wzts{
    font-size: 13px;
    margin-left: 480px;
  }
  .wxts{
    font-size: 13px;
    margin-left: 480px;
  }
  .ts{
    font-size: 14px;
    color: #A2A2A2;
  }
  .tb{
    color: black;
  }
</style>
