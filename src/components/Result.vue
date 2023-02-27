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
    margin: 50px auto;
  }
</style>