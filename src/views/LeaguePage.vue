<template>
  <main>
    <h2 class="text-2xl" font-bold mb-4>{{ id }}</h2>
    <el-table class="w-full" v-loading="loading" :data="teams">
      <el-table-column label="Team">
        <template #default="scope">
          <div class="flex items-center gap-1">
            <span>{{ scope.$index + 1 }}.</span>
            <img
              class="w-8 h-8 object-contain"
              :src="scope.row.strLogo"
              alt=""
            />

            <span>{{ scope.row.strTeam }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Stadium" prop="strStadium" sortable />
      <el-table-column label="Short Name" prop="strTeamShort" sortable />
      <el-table-column label="Location" prop="strLocation" />
    </el-table>
  </main>
</template>
<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import api from "@/api";

const route = useRoute();
const teams = ref([]);
const loading = ref(false);
const id = computed(() => route.params.id);
function getLeague() {
    loading.value = true;
  api
    .get("/search_all_teams.php", {
      params: {
        l: id.value,
      },
    })
    .then((res) => {
      teams.value = res.data.teams;
    });
    loading.value = false;
}
onMounted(() => {
  getLeague();
});

watch(id, () => {
  getLeague();
});
</script>
