<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="3000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
      <!-- Slides with image only -->
      <b-carousel-slide v-for="image in imageList" :key="image.id"
                        :img-src="image.url">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        imageList: [
          {
            "id": 1,
            "url": "https://upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          },
          {
            "id": 2,
            "url": "https://upload.jianshu.io/admin_banners/web_images/4500/e20f8255334b480222e199011779eb8d0cdabd0e.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          },
          {
            "id": 3,
            "url": "https://upload.jianshu.io/admin_banners/web_images/4504/8f6fbad5108d79f95a0af380416da37da8263251.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          },
          {
            "id": 4,
            "url": "https://upload.jianshu.io/admin_banners/web_images/4501/572782ecf027e81f518edce85f98036e88beb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          },
          {
            "id": 5,
            "url": "https://upload.jianshu.io/admin_banners/web_images/4502/25b524b6d1d21c508b7ca6a6a0a77ead48eed1b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          }
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>

</style>
