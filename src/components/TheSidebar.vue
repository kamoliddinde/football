<template>
  <aside>
    <div class="aside-left">
      <button>
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="mt-8">
        <button>
          <i class="fa-solid fa-fire"></i>
        </button>
        <button>
          <i class="fa-solid fa-compass"></i>
        </button>
        <button>
          <i class="fa-solid fa-message"></i>
        </button>
      </div>
      <div class="px-5 my-5">
        <hr />
      </div>
      <div class="mt-5">
        <button><i class="fa-solid fa-soccer-ball"></i></button>
        <button><i class="fa-solid fa-basketball"></i></button>
        <button><i class="fa-solid fa-volleyball"></i></button>
        <button><i class="fa-solid fa-table-tennis-paddle-ball"></i></button>
        <button><i class="fa-solid fa-person-biking"></i></button>
      </div>
      <div class="mt-10">
        <button><i class="fa-solid fa-info-circle"></i></button>
        <button><i class="fa-solid fa-headset"></i></button>
      </div>
    </div>
    <div class="aside-right">
      <div class="flex items-center gap-2">
        <img
          class="w-6 h-6 object-contain"
          src="@/assets/img/Tvit.png"
          alt=""
        />
        <p class="text-lg">Onesport</p>
      </div>
      <div class="mt-10">
        <p class="text-[gray]">MENU</p>
        <RouterLink
          to="/"
          class="router-link"
          active-class="router-link-active"
        >
          <i class="fa-solid fa-house">
            <span> Dashboard </span>
          </i>
        </RouterLink>
        <RouterLink
          to="/live-football"
          class="router-link"
          active-class="router-link-active"
        >
          <i class="fa-solid fa-video"> </i>

          <span> Live Football </span>
        </RouterLink>
        <RouterLink
          to="/standings"
          class="router-link"
          active-class="router-link-active"
        >
          <i class="fa-solid fa-arrow-up-short-wide"></i>
          <span>Standings</span>
        </RouterLink>
        <RouterLink
          to="/highlights"
          class="router-link"
          active-class="router-link-active"
        >
          <i class="fa-solid fa-highlighter"></i>
          <span>Highlights</span>
        </RouterLink>
        <RouterLink
          to="/shop"
          class="router-link"
          active-class="router-link-active"
        >
          <i class="fa-solid fa-store"></i>
          <span>Shop</span>
        </RouterLink>
        <RouterLink
          to="/news"
          class="router-link"
          active-class="router-link-active"
        >
          <i class="fa-regular fa-newspaper"></i>
          <span>News</span>
        </RouterLink>
      </div>
      <div>
        <el-collapse v-model="collapseVal">
          <el-collapse-item name="1" title="Football League">
            <div class="max-h-[300px] overflow-y-auto">
              <router-link
                v-for="league in leagues"
                :key="league.idLeague"
                :to="`/league/${league.strLeague}`"
                class="router-link"
              >
               
                <span class="whitespace-nowrap overflow-hidden    ">{{ league.strLeague }}</span>
              </router-link>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="">
        <p class="text-[gray] uppercase">Favorite club</p>
        <router-link to="/Chelsea" class="router-link">
          <span>Chelsea</span>
          <i class="fa-solid fa-star ml-auto text-[#5742a9] text-[24px]"></i>
        </router-link>
        <router-link to="/Chelsea" class="router-link">
          <span>Manchester City</span>
          <i class="fa-solid fa-star ml-auto text-[#5742a9] text-[24px]"></i>
        </router-link>
        <router-link to="/Chelsea" class="router-link">
          <span>Bayern Munchen</span>
          <i class="fa-solid fa-star ml-auto text-[#5742a9] text-[24px]"></i>
        </router-link>
      </div>
    </div>
  </aside>
</template>
<script setup>
import { ref, onMounted } from "vue";
import api from "@/api";
const collapseVal = ref(["1"]);

const leagues = ref([]);
async function getLeagues() {
  leagues.value = await api.get("/all_leagues.php").then((res) => {
    return res.data.leagues;
  });
}

onMounted(() => {
  getLeagues();
});
</script>
<style>
aside {
  display: flex;
  align-items: flex-start;
  height: 100vh;
  overflow: hidden;
  .aside-left {
    width: 72px;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #d3d3d3;
    overflow-y: auto;
    button {
      width: 100%;
      text-align: center;
      padding: 12px 0;
      color: gray;
      font-size: 24px;
      cursor: pointer;
    }
  }
  .aside-right {
    width: 283px;
    height: 100%;
    border: 1px solid #d3d3d3;
    overflow-y: auto;
    padding: 24px;
    .router-link {
      display: flex;
      align-items: center;
      gap: 8px;
      color: gray;
      margin: 24px 0;
      width: 100%;
      i {
        font-size: 20px;
      }
      span {
        font-size: 16px;
      }
    }
    .router-link-active {
      color: #5742a9;
    }
    .el-collapse-item__header {
      background-color: transparent;
      border: none;
      font-size: 16px;
      color: gray;
      text-transform: uppercase;
    }
    .el-collapse {
      border: none;
    }
    .el-collapse-item__wrap {
      background-color: transparent;
      border: none;
    }
  }
}
</style>
