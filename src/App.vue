<script setup>
import {  RouterView } from 'vue-router'
import TheSidebar from '@/components/TheSidebar.vue';
  import TheTopBar from "@/components/TheTopBar.vue";
</script>

<template>
  <div class="flex items-start h-screen overflow-hidden">
    <TheSidebar/>
      <div class="flex-1">
        <TheTopBar/>
        <RouterView />
      </div>
  </div>
  
</template>

