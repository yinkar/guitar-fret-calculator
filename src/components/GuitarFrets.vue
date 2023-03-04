<script setup>
defineProps({
  frets: Array
});
</script>

<template>
  <div 
    class="dot" 
    v-for="(fret, index) in frets" 
    v-show="[3, 5, 7, 9, 12].includes(index + 1) && fret.length * 8 > 10" 
    :style="{ left: `${fret.position * 10 - fret.length * 10 / 2 - 4}px` }" 
    :class="{ double: index + 1 === 12 }"
  ></div>
  <div class="fret" v-for="fret in frets" :style="{ left: `${fret.position * 10 - 2}px` }"></div>
</template>

<style scoped>


.guitar-fretboard .fret {
  position: absolute;
  top: 0;
  width: 4px;
  height: 100%;
  border-radius: 5px;
  background: radial-gradient(#fff, #666);
  box-shadow: inset 0 0 3px rgb(0 0 0 / 50%), 5px 0 5px rgb(0 0 0 / 30%);
}

.guitar-fretboard .dot {
  position: absolute;
  top: calc(100% / 2 - 4px);
  width: 8px;
  height: 8px;
  left: 0;
  border-radius: 50%;
  background: radial-gradient(#fff, #ddd);
}

.guitar-fretboard .dot.double {
  top: calc(100% / 2 + 9.7px);
}

.guitar-fretboard .dot.double::before {
  position: absolute;
  top: calc(100% / 2 - 30.5px);
  width: 8px;
  height: 8px;
  left: 0;
  border-radius: 50%;
  background: radial-gradient(#fff, #ddd);
  content: '';
}
</style>