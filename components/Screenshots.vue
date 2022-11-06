<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
  <div>
    <div class="flex items-center justify-center">
      <div class="text-white-hex font-bold text-4xl my-16">Screenshots</div>
    </div>
    <div class="flex items-center justify-center carousel"></div>
    <div class="swiper ssSwiper">
      <div class="swiper-wrapper">
        <div
          v-for="(screenshot, i) in screenShots"
          :key="i"
          class="swiper-slide"
        >
          <v-img :src="require(`@/static/Screenshots/${screenshot}`)" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.css'
export default {
  data() {
    return {
      screenShots: [
        'SS2.png',
        'SS3.png',
        'SS4.png',
        'SS5.png',
        'SS6.png',
        'SS7.png',
        'SS8.png',
        'SS9.png',
        'SS1.png',
        'SS2.png',
        'SS3.png',
        'SS4.png',
        'SS5.png',
        'SS6.png',
        'SS7.png',
        'SS8.png',
        'SS9.png',
      ],
      active: 3,
      max_visibility: 2,
    }
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const ssSwiper = new Swiper('.ssSwiper', {
      effect: 'cards',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      cardsEffect: {
        slideShadows: false,
      },
      keyboard: {
        enabled: true,
      },
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: false,
      // },
      pagination: {
        el: '.swiper-pagination',
      },
    })
  },
  methods: {
    next() {
      if (this.active < 15) {
        this.active += 1
      }
    },
    prev() {
      if (this.active > 3) {
        this.active -= 1
      }
    },
  },
}
</script>
<style>
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.swiper {
  width: 60vw;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100px;
}

</style>
