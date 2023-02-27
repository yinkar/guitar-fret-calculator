<script setup>
import GuitarFretboard from './GuitarFretboard.vue';
import Labels from './Labels.vue';

defineProps({
  frets: Array,
  scaleLength: Number,
  precision: Number,
});
</script>

<template>
  <div class="result">
    <GuitarFretboard :frets="frets" :scale-length="scaleLength" />
    <Labels :frets="frets" :precision="precision" />
  </div>
</template>

<style scoped>
  .result {
    padding: 50px 70px;
    overflow-x: auto;
    overflow-y: hidden;
    max-width: 100vw;
    height: 1000px;
  }
</style>