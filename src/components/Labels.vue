<script setup>
import { defineProps } from 'vue';

defineProps({
  frets: Array,
  precision: Number,
});
</script>

<template>
  <div class="labels">
    <div class="label-container" v-for="(fret, index) in frets" :style="{ left: `${fret.position * 10 - fret.length * 10 / 2}px` }">
      <div v-for="line in Array(index + 1)" class="line"></div>
      <div class="label">
        <strong>Fret {{ index + 1 }}:</strong>
        
        {{ fret.length.toFixed(precision) }} cm
      </div>
    </div>
  </div>
</template>

<style scoped>
.labels {
  display: flex;
  font-size: .6rem;
  position: relative;
}

.label-container {
  position: absolute;
}

.label {
  transform-origin: center right;
  transform: translate(-68px, -3px) rotate(-10deg);
  white-space: nowrap;
}

.line {
  height: 1rem;
  width: 1px;
  background-color: #fff;
}
</style>