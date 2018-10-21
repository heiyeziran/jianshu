<template>
  <div class="sign">
    <div class="logo"><a href="/"><img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="Logo"></a></div>
    <div class="main">


      <h4 class="title">
        <div class="normal-title">
          <a class="active" href="sign_in">登录</a>
          <b>·</b>
          <a id="js-sign-up-btn" class="register" href="sign_up">
            <span class="red">注册</span>
          </a>
        </div>
      </h4>
      <div class="js-sign-in-container">
        <form id="new_session" action="/sessions" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="5RK+HVp8if7enNxRWV5Pb1FyPQxP/hGZafuWVG7FTC/r25fM/OaBTUOfvjq4KRQ1MmSxgPf437fPiFvCTV7Odw==">

          <!-- 正常登录登录名输入框 -->
          <div class="demo-input-suffix">
            <el-input
              placeholder="你的昵称"
              prefix-icon="el-icon-yonghu"
              v-model="input21">
            </el-input>
          </div>

          <div class="demo-input-suffix">
            <el-input
              placeholder="手机号"
              prefix-icon="el-icon-shoujihao"
              v-model="input21">
            </el-input>
          </div>

          <div class="demo-input-suffix">
            <el-input
              placeholder="手机验证码"
              prefix-icon="el-icon-yanzhengma"
              suffix-icon=""
              v-model="input21">
            </el-input>
            <div class="aButton">发送验证码</div>
          </div>


          <div class="demo-input-suffix">
            <el-input
              type="password"
              placeholder="设置密码"
              prefix-icon="el-icon-mima"
              v-model="input21">
            </el-input>
          </div>

          <button class="sign-in-button" id="sign-in-form-submit-btn" type="button">
            <span id="sign-in-loading"></span>
            注册
          </button>

          <p class="sign-up-msg">点击 “注册” 即表示您同意并愿意遵守简书<br> <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a> 和 <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。</p>

        </form>
        <!-- 更多注册方式 -->
        <div class="more-sign">
          <h6>
            社交帐号直接注册
          </h6>
          <ul>
            <li>
              <a id="weixin" class="weixin" target="_blank">
                <img src="/static/img/微信.png">
              </a>
            </li>
            <li>
              <a id="qq" class="qq" target="_blank">
                <img src="/static/img/qq.png"/>
              </a>
            </li>
          </ul>

        </div>
      </div>

    </div>
  </div>
</template>
<script>


  export default {
    name: "Login"
  }
</script>


<style scoped>
  .sign {
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
    color: gray;

  }
  .logo {
    position: absolute;
    top: 56px;
    margin-left: 50px;
  }
  .sign .reset-title a, .sign .title a {
    padding: 10px;
    color: #969696;
  }
  .main {
    width: 400px;
    margin: 100px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
  }
  .title {
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
  }
  .register {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
    font-size: 20px;
  }

  .red{
    color: #ea6f5a;
  }

  .active{
    font-size: 20px;
  }
  form {
    margin-bottom: 30px;
  }

  .more-sign {
    margin-top: 50px;
  }

  .sign-in-button {
    background: RGB(66,192,46);
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
  .sign .more-sign h6 {
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
  }

  h6::before {
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 5px;
    left: 30px;
    box-sizing: border-box;
  }

  h6::after{
    content: "";
    border-top: 1px solid #b5b5b5;
    display: block;
    position: absolute;
    width: 60px;
    top: 5px;
    right: 30px;
    box-sizing: border-box;
  }
  .sign .more-sign ul {
    margin-bottom: 10px;
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    display: block;
  }
  .sign .more-sign ul li {
    margin: 0 5px;
    display: inline-block;
    line-height: 20px;
    text-align: -webkit-match-parent;
  }
  .sign .more-sign ul a {
    width: 50px;
    height: 50px;
    line-height: 50px;
    display: block;
    cursor: pointer;
  }
  .qq{
    width: 50px;
    height: 50px;
    line-height: 50px;
    display: block;
    cursor: pointer;
  }

  .sign .sign-up-msg {
    margin: 10px 0;
    padding: 0;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #969696;
  }
  .demo-input-suffix{
    position: relative;
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    font-size: inherit;
    line-height: inherit;
    padding: 4px 0 0 0;
  }
  .aButton{
    position: absolute;
    top: 7px;
    right: 7px;
    width: 100px;
    height: 36px;
    font-size: 13px;
    color: #fff;
    background-color: #42c02e;
    border-radius: 20px;
    line-height: 36px;

  }
</style>

