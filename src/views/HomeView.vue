<template>
  <main>
    <div class="flex text-center">
      <div class="left-main text-center">
        <h1>England vs Germany</h1>
        <h3>Sunday, 21 January 2022</h3>
        <h1>03 : 12 : 43 : 14</h1>
        <p>Day Hours Minutes Seconds</p>
      </div>
      <div class="right-main text-center">
        <h1 class="text-[16px]">Live Match</h1>
        <p class="text-[#096A00]">62 : 24</p>
        <h1
          class="w-[81px] h-[38px] rounded-[50px] bg-[#cec3ff] p-1.5 text-[#5742A9] m-[29px]"
        >
          2 - 2
        </h1>
        <div class="status">
          <h1>Shoot on Target</h1>
        </div>
      </div>
    </div>
    
    <h2 class="text-xl font-bold mb-4">⚽ Football Match</h2>
        <div class="border-b flex space-x-4 pb-2 mb-4">
            <button class="text-purple-600 font-semibold border-b-2 border-purple-600 pb-1">Latest Match</button>
            <button class="text-gray-500">Coming Match</button>
            <button class="text-gray-500">Pre-season</button>
            <button class="text-gray-500">Live Games</button>
            <button class="text-gray-500">Fun Football</button>
        </div>
    <div class="">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-2">
                    <span>🇦🇷</span>
                    <span>Argentina</span>
                    <span class="bg-purple-200 text-purple-700 px-2 py-1 rounded">1 - 2</span>
                    <span>🇮🇹</span>
                    <span>Italy</span>
                </div>
                <span class="bg-red-200 text-red-700 px-3 py-1 rounded">Full - Time</span>
                <span class="text-gray-500">18 December 2022</span>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-2">
                    <span>🇵🇹</span>
                    <span>Portugal</span>
                    <span class="bg-purple-200 text-purple-700 px-2 py-1 rounded">2 - 3</span>
                    <span>🇩🇪</span>
                    <span>Belgium</span>
                </div>
                <span class="bg-red-200 text-red-700 px-3 py-1 rounded">Full - Time</span>
                <span class="text-gray-500">18 December 2022</span>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-2">
                    <span>🇬🇭</span>
                    <span>Ghana</span>
                    <span class="bg-purple-200 text-purple-700 px-2 py-1 rounded">1 - 3</span>
                    <span>🇧🇷</span>
                    <span>Brazil</span>
                </div>
                <span class="bg-red-200 text-red-700 px-3 py-1 rounded">Full - Time</span>
                <span class="text-gray-500">17 December 2022</span>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-2">
                    <span>🇺🇾</span>
                    <span>Uruguay</span>
                    <span class="bg-purple-200 text-purple-700 px-2 py-1 rounded">2 - 2</span>
                    <span>🇵🇱</span>
                    <span>Poland</span>
                </div>
                <span class="bg-red-200 text-red-700 px-3 py-1 rounded">Full - Time</span>
                <span class="text-gray-500">17 December 2022</span>
            </div>
            
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center space-x-2">
                    <span>🇪🇸</span>
                    <span>Spain</span>
                    <span class="bg-purple-200 text-purple-700 px-2 py-1 rounded">3 - 3</span>
                    <span>🇨🇿</span>
                    <span>Czech</span>
                </div>
                <span class="bg-red-200 text-red-700 px-3 py-1 rounded">Full - Time</span>
                <span class="text-gray-500">16 December 2022</span>
            </div>
        </div>
  </main>
</template>
<script setup></script>
<style>
.left-main {
  background-image: url("@/assets/img/bg-img.png");
  width: 70%;
  height: 450px;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.right-main {
  width: 30%;
  height: 450px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-top: 27px;
  margin-left: 20px;
  margin-bottom: 15px;
}
.router-link {
    color: black;
}
</style>
