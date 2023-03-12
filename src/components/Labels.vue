<script setup>
defineProps({
  frets: Array,
  precision: Number,
  scaleLength: Number,
  isInInches: Boolean,
  inchesRate: Number,
});
</script>

<template>
  <div class="labels" :style="{ width: `${(isInInches ? (scaleLength * inchesRate) : scaleLength) * 10}px` }">
    <div class="label-container" v-for="(fret, index) in frets" :style="{ left: `${fret.position * 10 - fret.length * 10 / 2}px` }">
      <div class="line-container">
        <div v-for="line in Array(index + 1)" class="line"></div>
      </div>
      <div class="label">
        <strong>Fret {{ index + 1 }}: </strong>
        
        {{ (fret.length / (isInInches ? inchesRate : 1)).toFixed(precision) }} {{ isInInches ? '″' : 'cm'}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.labels {
  display: flex;
  font-size: .6rem;
  position: relative;
  margin: 0 280px;
}

.label-container {
  position: absolute;
}

.label {
  transform-origin: center right;
  transform: translate(-68px, -3px) rotate(-10deg);
  white-space: nowrap;
  z-index: 200;
  filter: drop-shadow(3px 5px 5px rgba(0, 0, 0, 1));
}

.label strong {
  color: #aaa;
}

.line {
  height: 1rem;
  width: 1px;
  background-color: #fff;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 1);
}

.line:last-child {
    border-radius: 0 0 2px 2px;
}
</style>