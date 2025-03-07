<template>
  <table class="w-full latest-match-table">
    
    <tbody>
      <tr v-for="match in matches" :key="match.id">
        <td>
          <div class="flex item-cunter space-x-2 justify-center">
            <img class="w-5 h-5" :src="match.strHomeTeamBadge" alt="">
            <span>{{ match.strHomeTeam }}</span>
          </div>
        </td>
        <td>
          <el-tag round> {{ match.intHomeScore }}-{{ match.intAwayScore }} </el-tag>
        </td>
        <td>
          <div class="flex item-cunter space-x-2 justify-center">
            <img class="w-5 h-5" :src="match.strAwayTeamBadge" alt="">
            <span>{{ match.strAwayTeam }}</span>
          </div>
        </td>
        <td>
          <el-tag type="danger"> Full-Time </el-tag>
        </td>
        <td>
          <span class="text-gray-500">{{ match.dateEvent }}</span>
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

const emit = defineEmits(["latestMatch"])
const matches = ref([]);
async function getMatches() {
  matches.value = await api
    .get("/eventspastleague.php", {
      params: {
        id: 4328,
      },
    })
    .then((res) => res.data.events);
    emit("latestMatch", matches.value[0]);
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
