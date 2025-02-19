<template>
  <div class="top-bar">
    <div class="flex justify-between">
      <div class="search-inp w-[548px] h-[40px] rounded-md bg-[#E6E6E6]">
        <i class="fa-solid fa-search m-[10px]"></i>
        <input
          class="w-[90%] h-[40px]"
          type="search"
          placeholder="Type to Search..."
        />
      </div>
      <div class="flex gap-2 align-center">
        <el-button type="primary">Go Premium</el-button>
        <div class=" flex gap-2 m-[6px]">
            <i class="fa-solid fa-basket-shopping"></i>
            <i class="fa-solid fa-charging-station"></i>
            <i class="fa-solid fa-sun"></i>
        </div>
        <img src="@/assets/img/profile.png" alt="">
      </div>
    </div>
  </div>
</template>
<style>
.top-bar {
  width: 97%;
  height: 100vh;
  margin: 24px;
}
</style>
