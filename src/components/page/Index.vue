<template>
  <b-row>
    <b-col cols="8">
      <v-carousel></v-carousel>
      <v-topic class="tp"></v-topic><hr/>
      <v-article class="at"></v-article><hr/>
    </b-col>
    <b-col cols="4">
      <v-type></v-type>
      <v-author class="vau"></v-author>
    </b-col>
  </b-row>
</template>

<script>
  import vCarousel from '../module/Carousel';
  import vTopic from '../module/Topic';
  import vArticle from '../module/Articles';
  import vType from '../module/Type';
  import vAuthor from '../module/Author';

  export default {
    name: "Index",
    components: {
      vCarousel,
      vTopic,
      vArticle,
      vType,
      vAuthor
    }
  }
</script>

<style scoped>
.tp{
  margin-top: 30px;
  margin-left: 15px;
}
  .at{
    margin-left: 50px;
  }
  .vau{
    margin-top: 25px;
  }
</style>
