<template>
  <div>
    <div v-if="showInfo" class="info-div rounded-3xl ">
      <button class="pb-5" @click="closeInfo"><i class="fa-solid fa-xmark pr-3 text-red-800"></i></button>
      <p class="w-[300px] h-[150px] ">{{ infoText }}</p>
      
    </div>
    <table class="w-full latest-match-table">
      <tbody>
        <tr v-for="match in matches" :key="match.id">
          <td>
            <div class="flex item-cunter space-x-2 justify-center">
              <img class="w-5 h-5" :src="match.strHomeTeamBadge" alt="">
              <span @click="showHomeTeamInfo(match.strHomeTeam)">{{ match.strHomeTeam }}</span>
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
  </div>
</template>

<script setup>
import { WarningFilled, TrendCharts } from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";
import api from "@/api";

const emit = defineEmits(["latestMatch"]);
const matches = ref([]);
const showInfo = ref(false);
const infoText = ref("");

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

function showHomeTeamInfo(teamName) {
  infoText.value = `Information about ${teamName}`;
  showInfo.value = true;
}

function closeInfo() {
  showInfo.value = false;
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

.info-div {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  z-index: 1000;

}
</style>
