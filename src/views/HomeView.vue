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
    <section>
      <el-tabs v-model="tabVal">
        <el-tab-pane label="Latest Match" name="latest"><LatestMatch/> </el-tab-pane>
        <el-tab-pane label="Coming Match" name="coming"> </el-tab-pane>
        <el-tab-pane label="Pre-season" name="pre-season"> </el-tab-pane>
        <el-tab-pane label="Live Games" name="live-games"> </el-tab-pane>
        <el-tab-pane label="Fun Football" name="fun-football"> </el-tab-pane>
      </el-tabs>
    </section>
    
    
  </main>
</template>
<script setup>
import { ref } from "vue";
import LatestMatch from "@/components/LatestMatch.vue";
const tabVal = ref("latest");
</script>
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
