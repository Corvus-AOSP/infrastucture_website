<template>
  <div>
    <div class="text-white-hex font-bold text-6xl my-16">Downloads</div>
    <div v-for="(device,i) in devices" :key=i>
      <div v-if="i!='Rom Generic'">
      <div class="text-white-hex font-bold text-4xl my-16">{{i}}</div>
        <div class="devices">
        <div v-for="(brand,j) in device" :key=j>
          <div class="flex items-center devicesCard">
            <v-img :src="require(`@/static/${images}`)" />
            <div class="text-white-hex">
            <div class="font-bold text-xl">{{brand.device}}</div>
            <div>{{ j }}</div>
            <div class="mt-16">
            <button class="button px-1 mr-1 py-2 text-sm" to="brand.download">Downloads</button>
            <button class="button px-1 py-2 text-sm">What's New!</button>
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
export default {
  data() {
    return {
      devices: null,
      images: "phone.png",
    }
  },
  mounted() {
    fetch(
      'https://raw.githubusercontent.com/CorvusRom-Devices/jenkins/main/devices.json'
    ).then((response) =>
      response.json().then((json) => {
        this.devices = json
      })
    )
  },
}
</script>

<style>
.devices{
    display: grid;
    grid: 320px / 22.188rem 22.188rem 22.188rem;
    gap: 20px;
    justify-content: center;

}
.devicesCard{
    background-color: #16373C ;
    border-radius: 20px;
    padding: 5px;
}
.button{
  border-radius: 10px;
  background-color: #075A78;
  color: #d9d9d9; 
}
</style>
