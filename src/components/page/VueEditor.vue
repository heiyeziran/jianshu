<template>
<div>
  <div class="row">
    <div class="col-md-4">
      <b-nav vertical>
        <b-nav-item>
          <router-link to="/settings/basic">
            <div class="bat">
              <span>基础设置</span>
            </div>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/settings/profile">
            <div class="bat">
              <span>个人资料</span>
            </div>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/settings/weibo-auth">
            <div class="bat">
            <span>微博认证</span>
            </div>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/settings/blacklist">
            <div class="bat">
            <span>黑名单</span>
            </div>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/settings/reward-setting">
            <div class="bat">
            <span>赞赏设置</span>
            </div>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/settings/misc">
            <div class="bat">
            <span>账号管理</span>
            </div>
          </router-link>
        </b-nav-item>
      </b-nav>
    </div>
    <div class="col-md-8">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "VueEditor",
    }
</script>

<style scoped>
 .bat{
   width: 300px;
   height: 55px;
   background-color: #C4C4C4;
   border-radius: 5px;
 }
 .divOver{
   background-color: #B3B3B3;
 }
  span{
    color: #1A1A1A;
    font-size: 18px;
    margin-left: 60px;
    line-height: 50px;
  }
</style>
