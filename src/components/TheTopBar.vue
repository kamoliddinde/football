<template>
  <div class="top-bar">
    <div class="flex justify-between w-full">
      <div class="w-[548px]">
        <el-input
          v-model="searchVal"
          :prefix-icon="Search"
          placeholder=" Type to Search..."
          size="large"
          class=""
          clearable
        ></el-input>
      </div>

      <div class="flex gap-4 items-center">
        <el-button type="primary">Go Premium</el-button>
        <div class="flex gap-4 text-[24px]">
          <button><i class="fa-solid fa-basket-shopping"></i></button>
          <button><i class="fa-solid fa-bell"></i></button>
          <button><i class="fa-solid fa-sun"></i></button>
        </div>
        <img src="@/assets/img/profile.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
const searchVal = ref("");
</script>
<style>
.top-bar {
  height: 65px;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
  padding: 0 24px;
  .el-input__wrapper {
    background-color: #e6e6e6;
  }
  button {
    cursor: pointer;
    i {
      font-size: 20px;
      color: gray;
    }
  }
}
</style>
