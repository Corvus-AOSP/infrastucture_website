<template>
  <div>
    <v-parallax height=1080 :src="require('@/assets/BG1.png')">
      <div class="flex flex-column justify-left items-center">
        <div class="ml-32 w-1/3 text-left">
          <h1 class="text-6xl font-[1000] my-2">Corvus AOSP</h1>
          <h1 class="text-6xl text-primary font-[1000] my-2">Always Incredible</h1>
          <p class="font-semibold text-xl my-4">
          The only Rom You’ll ever need
          </p>
        </div>
      </div>
    </v-parallax>
    <div class="spacer layer"></div>
  </div>
</template>
<style scoped>
.spacer{
  aspect-ratio: 16/2;
  width:100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.layer{
  background-image: url("@/assets/BottomBlob.svg");
}
</style>