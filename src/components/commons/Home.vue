<template>
  <div>
    <v-head></v-head>
    <div class="container" id="home">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import vHead from './Header.vue';
  export default {
    name: "Home",
    components: {
      vHead
    },
  }
</script>

<style scoped>
#home{
  margin-top: 30px;
}
</style>
