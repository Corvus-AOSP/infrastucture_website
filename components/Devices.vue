<template>
  <div>
    <div class="text-white-hex font-bold text-6xl my-16">Downloads</div>
    <div v-for="(device,manufacturer, index) in devices" :key=index>
      <div v-if="manufacturer!='Rom Generic'">
        <v-container>
          <div class="text-white-hex font-bold text-4xl my-16">{{manufacturer}}</div>
        </v-container>
      <v-container>
        <v-row class="ma-2">
          <v-col v-for="(brand, model, model_index) in device" :key=model_index md="4" class="pa-3 d-flex flex-column">
            <v-card color="#16373C">
              <v-card-text>
                <v-row>
                  <v-col>
                    <v-img :src="require(`@/static/${images}`)" contain max-height="200" max-width="100"/>
                  </v-col>
                  <v-col class="details-card">
                    <div class="text-white-hex">
                      <div class="font-bold text-xl">{{brand.device}}</div>
                      <div>{{ model }}</div>
                    </div>
                    <div class="align-end">
                      <v-row class="justify-center">
                        <button class="button px-1 mr-1 py-2 text-sm" to="brand.download">Downloads</button>
                        <button class="button px-1 py-2 text-sm">What's New!</button>
                      </v-row>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
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

.details-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
