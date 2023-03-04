<script setup>
import { defineProps } from 'vue';

defineProps({
  scaleLength: Number
});
</script>

<template>
  <div class="strings" :style="{ width: `${scaleLength * 10 + 84}px` }">
    <div class="string string-6" style="top: 8px; height: 2px;"></div>
    <div class="string string-5" style="top: 20px; height: 1.8px;"></div>
    <div class="string string-4" style="top: 33.1px; height: 1.6px;"></div>
    <div class="string string-3" style="top: 45px; height: 1.4px;"></div>
    <div class="string string-2" style="top: 59px; height: 1.2px;"></div>
    <div class="string string-1" style="top: 71px; height: 1px;"></div>
  </div>
</template>

<style scoped>
.strings {
  position: relative;
}

.string {
  width: 100%;
  position: absolute;
  left: 0;
  background-image: url('../assets/string.png');
  background-size: 10px 100%;
  z-index: 100;
  box-shadow: inset 0px 0px 1px rgba(0, 0, 0, .8);
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, .7));
}
</style>