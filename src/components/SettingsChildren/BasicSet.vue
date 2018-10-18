<template>
<div>
  <div>
    <img src="/static/img/101.jpg"/>
    <b-button variant="outline-success sm" class="ghtx">更换头像</b-button>
  </div>
  <div class="nichen">
    <span>昵称</span>
    <input type="text" value="hhhhhh">
  </div><hr/>
  <div>
    <span>电子邮件</span>
    <b-button variant="outline-success sm" class="bd">点击绑定</b-button>
  </div><hr/>
  <div>
    <span>手机</span>
    <span class="sjh">181****3952&nbsp;&nbsp;&nbsp;√已验证</span>
  </div><hr/>
  <div>
    <span>常用编辑器</span>
    <b-form-group class="zuhe">
      <b-form-radio-group v-model="selected"
                          :options="options"
                          plain
                          name="plainInline" />
    </b-form-group>
    <span class="tishi">切换后对生成文章生效</span>
  </div><hr/>
  <div>
    <span>语言设置</span>
    <b-form-group class="zuhe">
      <b-form-radio-group v-model="selected"
                          :options="yuyan"
                          plain
                          name="yuyan" />
    </b-form-group>
  </div><hr/>
  <div>
    <span>接收谁的简信</span>
    <b-form-group class="zuhe">
      <b-form-radio-group v-model="selected"
                          :options="jianxin"
                          plain
                          name="jianxin" />
    </b-form-group>
  </div><hr/>
  <div>
    <span>提醒邮件通知</span>
    <b-form-group class="zuhe">
      <b-form-radio-group v-model="selected"
                          :options="email"
                          plain
                          name="email" />
    </b-form-group>
  </div>
  <div>
    <b-button variant="success" class="baocun">保存</b-button>
  </div>
  <div class="zuihou"></div>
</div>
</template>

<script>
    export default {
        name: "BasicSet",
      data () {
        return {
          selected: 'second',
          options: [
            { text: '富文本', value: 'first' },
            { text: 'Markdown', value: 'second' }
          ],
          yuyan:[
            {text:'中文繁体',value:'first'},
            {text:'中文简体',value:'second'}
          ],
          jianxin:[
            {text:'我关注的人，我发过简信的人',value:'first'},
            {text:'所有人',value:'second'}
          ],
          email:[
            {text:'每天未读汇总',value:'first'},
            {text:'所有动态',value:'second'},
            {text:'不接收',value:'third'}
          ]
        }
      }
    }
</script>

<style scoped>
img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
  .ghtx{
    border-radius: 15px;
    margin-left: 50px;
  }
  span{
    color: #A2A2A2;
  }
  .nichen{
    margin-top: 40px;
  }
  input{
    width: 200px;
    height: 35px;
    margin-left: 120px;
    border-radius: 10px;
  }
  .bd{
    border-radius: 15px;
    margin-left: 90px;
  }
  .sjh{
    margin-left: 120px;
  }
  .zuhe{
    margin-left: 160px;
    margin-top: -23px;
  }
  .tishi{
    margin-left: 160px;
    font-size: 13px;
  }
  .baocun{
    margin-top: 50px;
    width: 100px;
    border-radius: 15px;
  }
  .zuihou{
    margin-top: 40px;
  }
</style>
