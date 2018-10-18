<template>
    <div>
      <div class="row">
        <div class="col-md-4">
          <b-nav vertical>
            <b-nav-item>
              <router-link to="/notifications/comments">
                <div class="bat">
                  <span>评论</span>
                </div>
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/notifications/chats">
                <div class="bat">
                  <span>简信</span>
                </div>
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/notifications/requests">
                <div class="bat">
                  <span>投稿请求</span>
                </div>
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/notifications/likes">
                <div class="bat">
                  <span>喜欢和赞</span>
                </div>
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/notifications/follows">
                <div class="bat">
                  <span>关注</span>
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
        name: "Notifications"
    }
</script>

<style scoped>
  .bat{
    width: 300px;
    height: 55px;
    background-color: #C4C4C4;
    border-radius: 5px;
  }
  span{
    color: #1A1A1A;
    font-size: 18px;
    margin-left: 60px;
    line-height: 50px;
  }
</style>
