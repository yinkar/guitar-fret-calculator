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
    <Labels :frets="frets" :precision="precision" :scale-length="scaleLength" />
  </div>
</template>

<style scoped>
  .result {
    padding: 50px 0 0 0;
    overflow-x: auto;
    overflow-y: hidden;
    max-width: 100vw;
    height: 800px;
  }

  @media only screen and (max-width: 600px) {
    .result {
      padding: 50px 60px;
    }    
  }
</style>