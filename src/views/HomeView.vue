<template>
  <main>
   <div v-if="latestMatch" class="grid grid-cols-3 gap-5">
    <div class="col-span-2">
      <img :src="latestMatch?.strThumb" alt="">
    </div>
    <div class="col-span-1">
      <div class="bg-white p-4 rounded-lg shadow">
        <p class="text-2xl font-bold text-center text-gray-500">{{ latestMatch?.strEvent }}</p>
        <div class="text-center my-2"> 
          <el-tag round type="success"> {{ latestMatch?.intHomeScore }}-{{ latestMatch?.intAwayScore }}</el-tag>
        </div>
        <div class="text-center my-2">
          <el-tag round type="danger">{{ latestMatch?.strStatus }}</el-tag>
        </div>
        <div class="text-center my-2">
         <span class="text-gray-500">{{ latestMatch?.dateEvent }}</span>
        </div>
      </div>
    </div>
   </div>
   <div v-else class="mb-5 bg-white p-4 rounded-lg shadow">
    <el-skeleton :rows="10"></el-skeleton>
   </div>

    <h2 class="text-xl font-bold mb-4">⚽ Football Match</h2>
    <section>
      <el-tabs v-model="tabVal">
        <el-tab-pane label="Latest Match" name="latest"><LatestMatch @latestMatch="latestMatch = $event"/> </el-tab-pane>
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
const latestMatch = ref(null);
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
