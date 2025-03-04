<template>
  <table class="w-full latest-match-table">{{ matches + "" }}
    <tbody>
      <tr v-for="match in matches" :key="match.id">
        <td>
          <div class="flex item-cunter space-x-2 justify-center">
            <span>🇦🇷</span>
            <span>Argentina</span>
          </div>
        </td>
        <td>
          <el-tag round> 1-11 </el-tag>
        </td>
        <td>
          <div class="flex item-cunter space-x-2 justify-center">
            <span>🇮🇹</span>
            <span>Italy</span>
          </div>
        </td>
        <td>
          <el-tag type="danger"> Full-Time </el-tag>
        </td>
        <td>
          <span class="text-gray-500">18 December 2022</span>
        </td>
        <td>
          <div class="flex items-center gap-2 justify-center">
            <el-button :icon="WarningFilled" circle type="info"> </el-button>
            <el-button :icon="TrendCharts" circle type="info"> </el-button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { WarningFilled, TrendCharts } from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";
import api from "@/api";
const matches = ref([]);
async function getMatches(){
    const year = new Date().getFullYear();
    let month = new Date().getMonth() + 1; 
    let day = new Date().getDate();
    let today = `${year}${month}${day}`;
    if(month < 10 ){
        month = `0${month}`;
    }
    if(day < 10){
        day = `0${day}`;
    }
   matches.value = await api.get("/football-get-matches-by-date",{
    params:{
        date:today
    }
   }).then((res) => res.data.response?.matches); 
    
}
onMounted(() => {
  getMatches();
});
</script>
<style>
.latest-match-table {
  td {
    text-align: center;
    padding: 10px;
  }
  tr:nth-child(odd) {
    background-color: #fbfbfb;
  }
}
</style>
