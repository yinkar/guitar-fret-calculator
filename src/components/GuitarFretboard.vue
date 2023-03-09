<script setup>
import GuitarHead from './GuitarHead.vue';
import GuitarBody from './GuitarBody.vue';
import GuitarStrings from './GuitarStrings.vue';
import GuitarFrets from './GuitarFrets.vue';

defineProps({
  frets: Array,
  scaleLength: Number,
  strings: Array,
});
</script>

<template>
  <div class="guitar-fretboard" :style="{ width: `${scaleLength * 10}px` }">
    <GuitarHead></GuitarHead>
    <GuitarFrets :frets="frets"></GuitarFrets>
    <GuitarStrings :scale-length="scaleLength" :strings="strings"></GuitarStrings>
    <GuitarBody :scale-length="scaleLength"></GuitarBody>
  </div>
</template>

<style scoped>
.guitar-fretboard {
  height: 80px;
  position: relative;
  margin: 0 280px; 
  box-sizing: border-box;
  box-shadow: 0 4px 3px rgba(0, 0, 0, .3);
  filter: drop-shadow(20px 40px 4px rgba(0, 0, 0, .3));
}

.guitar-fretboard::before {
  content: '';
  background-color: sienna;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, .8), inset 4px 0px 5px rgba(0, 0, 0, .4);
  border-top: 2px solid rgba(0, 0, 0, .4);
  box-sizing: border-box;
  border-bottom: 2px solid rgba(0, 0, 0, .4);
  border-radius: 4px;
  background-image: url('../assets/fret-background.jpeg');
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100% - 100px);
  height: 100%;
  filter: drop-shadow(0 5px 2px rgba(0, 0, 0, .4));
}

.guitar-fretboard::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100% - 100px);
  height: 100%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, .3);
  z-index: -300;
}
</style>