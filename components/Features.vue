<template>
    <div class="text-white-hex flex flex-col justify-center items-center my-12">
        <div class="text-4xl font-bold mb-12">
            Features
        </div>
        <div>
          <v-slide-group
            multiple
            show-arrows
            class="bg-background"
          >
            <v-slide-item
              v-for="FeatureItem in Features"
              :key="FeatureItem"
            >
              <div class="maincard mx-16">
                  <div class="cardlogo bg-primary"><v-img :src="require(`@/static/${FeatureItem.Icon}`)"/></div>
                  <div class="mt-32 px-16 py-12 rounded-lg bg-background-card text-white-hex">
                    <div class="text-xl font-bold">{{ FeatureItem.Name }}</div>
                    <div class="text-m font-semibold">{{ FeatureItem.Description }}</div>
                  </div>
              </div>
            </v-slide-item>
          </v-slide-group>
        </div>   
    </div>
</template>
<script>
export default {
    data() {
      return{
        Features: [
          {
            Name: "Fonts",
            Description: "We have Sexy AF fonts",
            Icon: "CorvusLogo.svg",
          },
          {
            Name: "Fonts",
            Description: "We have Sexy AF fonts",
            Icon: "CorvusLogo.svg",
          },
          {
            Name: "Fonts",
            Description: "We have Sexy AF fonts",
            Icon: "CorvusLogo.svg",
          },
        ]
      }
    }
}
</script>
<style scoped>
.maincard{
  width: 400px;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.cardlogo{
  position: absolute;
  left: 35%;
  top: 25px;
  border-radius: 100%;
  padding: 20px;
}
</style>
