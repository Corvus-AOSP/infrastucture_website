<template>
  <v-app-bar color="rgba(0, 0, 0, 0)" class="px-12 py-6" fixed flat rounded>
    <div class="flex flex-column items-center justify-evenly px-6">
        <div class="flex flex-column items-center cursor-pointer">
            <img src="@/assets/CorvusLogo.svg" width="50px" />
            <div class="text-white-hex font-bold text-xl mx-2">Corvus Aosp</div>
        </div>
        <div>
            <button class="bg-white-hex text-primary font-bold text-xl p-2 mx-2 rounded-lg">Download</button>
            <button class="bg-white-hex text-primary font-bold text-xl p-2 mx-2 rounded-lg">What's New!</button>
        </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = 'white';
      } else {
        this.bg = 'transparent';
      }
    },
  },

}
</script>

<style>

</style>