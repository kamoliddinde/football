<script setup>
import {  RouterView } from 'vue-router'
import TheSidebar from '@/components/TheSidebar.vue';
</script>

<template>
  <div class="flex items-start">
    <TheSidebar/>
      <div class="flex-1">
        <RouterView />
      </div>
  </div>
  
</template>

