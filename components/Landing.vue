<template>
<div>
  <div class="relative w-full h-full bg-gradient-to-b from-background-light to-background-sec mt-16 px-32 py-16 text-text-hex flex items-center justify-center">
    <div class="flex flex-column justify-evenly items-center">
    <div class="absolute top-10 left-10"><img src="@/assets/BlobTop.svg"  width="170px"/></div>
    <div class="absolute bottom-10 right-10"><img src="@/assets/BlobBottom.svg" width="270px" /></div>
    <div class="w-1/3 text-center">
        <h1 class="text-6xl font-semibold my-2">Corvus OS</h1>
        <p class="font-bold text-l">
            Corvus OS is based on AOSP, with all the useful features required. Our objective is stability while 
            being feature-rich at the same time. We won't believe that Corvus is better ROM than others, but we 
            will always try to give you the best.
        </p>
        <div class="flex flex-column justify-around items-center my-4">
            <button class="bg-primary text-background font-bold text-xl p-2 rounded-lg">Download</button>
            <button class="bg-primary text-background font-bold text-xl p-2 rounded-lg">What's New!</button>
        </div>
    </div>
    <div><img src="@/assets/CorvusWall.png" width="80%"/></div>
    </div>
  </div>
  <img src="@/assets/BottomBlob.svg" /> 
</div>
</template>