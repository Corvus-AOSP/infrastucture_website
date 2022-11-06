<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex items-center justify-center">
      <div class="text-white-hex font-bold text-4xl my-16">Our Team</div>
    </div>
   <div class="flex items-center justify-center" >
    <div class="swiper teamSwiper">
    <div class="swiper-wrapper">
    <div
      v-for="(member, i) in members"
      :key="i"
      class="swiper-slide"
    >
      <div class="flex mx-5 bg-background-card w-96 pl-4 py-4 rounded-lg">
        <div class="mr-4">
          <v-img
            height="150px"
            width="150px"
            :src="require(`@/static/Team/${member.icon}`)"
          />
        </div>
        <div class="flex flex-col justify-around">
            <div class="text-white-hex text-2xl font-bold">
              {{ member.name }}
            </div>
            <div class="text-white-hex text-xl font-medium">
              {{ member.role }}
            </div>
          <div class="flex justify-left">
            <img class="mr-2" width="40px" src="@/assets/Github.svg" />
            <img width="40px" src="@/assets/Telegram.svg" />
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
   </div>
  </div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle'
import 'swiper/swiper-bundle.css'
export default {
  data() {
    return {
      members: [
        {
          name: 'Ritzz',
          role: 'Owner/Founder',
          icon: 'ritzz.png',
        },
        {
          name: 'Trishiraj',
          role: 'Lead Developer',
          icon: 'trishi.png',
        },
        {
          name: 'Victor',
          role: 'Product Manager',
          icon: 'victor.png',
        },
        {
          name: 'Fosslover',
          role: 'Web Developer',
          icon: 'ritzz.png',
        },
        {
          name: 'H3m3l',
          role: 'Designer',
          icon: 'ritzz.png',
        },
      ],
    }
  },
    mounted() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const teamSwiper = new Swiper('.teamSwiper', {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
      },
    })
  },
  methods: {
    next() {
      if (this.active < 6) {
        this.active += 1
      } else {
        this.active=2
      }
    },
    prev() {
      if (this.active > 2) {
        this.active -= 1
      } else{
        this.active = 6
      }
    },
  },
}
</script>
<style scoped>
</style>
