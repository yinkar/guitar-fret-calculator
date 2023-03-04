<script setup>
import GuitarFretboard from './GuitarFretboard.vue';
import Labels from './Labels.vue';

defineProps({
  frets: Array,
  scaleLength: Number,
  precision: Number,
  isInInches: Boolean,
  inchesRate: Number,
  strings: Number,
});
</script>

<template>
  <div class="result">
    <GuitarFretboard 
      :frets="frets" 
      :scale-length="(isInInches ? (scaleLength * inchesRate) : scaleLength)" 
      :strings="strings"
    />
    <Labels 
      :frets="frets" 
      :precision="precision" 
      :scale-length="scaleLength" 
      :is-in-inches="isInInches" 
      :inches-rate="inchesRate"
    />
  </div>
</template>

<style scoped>
  .result {
    padding: 200px 0 0 0;
    overflow-x: auto;
    overflow-y: hidden;
    max-width: 100vw;
    height: 800px;
    position: relative;
  }

  @media only screen and (max-width: 770px) {
    .result {
      padding: 200px 0;
    }    
  }
</style>