<script setup>
import { onMounted, ref } from 'vue';

const frets = ref([]);
const scaleLength = ref(65);
const numberOfFrets = ref(24);

function calcFret(stringLenght, fretAmount) {
    const fretLengths = [];
    let remainStringLength = stringLenght;
    for (let i = 0; i < fretAmount; i++) {
        const fretLength = remainStringLength / 17.817;
        fretLengths.push(fretLength);
        remainStringLength -= fretLength;
    }
    return fretLengths;
}

function fretCountEvent() {
  const fretLengths = calcFret(scaleLength.value, numberOfFrets.value);

  frets.value.splice(0, frets.value.length);

  frets.value.push(...fretLengths.map((e, i) => {
    return {
      length: e,
      position: fretLengths.slice(0, i + 1).reduce((acc, a) => acc + a),
    }
  }));
}

onMounted(() => {
  fretCountEvent();
});
</script>

<template>
  <div class="app-container">
    <div class="panel">
      <input type="number" min="1" max="200" @input="fretCountEvent" v-model="scaleLength">
      <input type="number" min="1" max="40" @input="fretCountEvent" v-model="numberOfFrets">
    </div>

    <div class="guitar-fretboard" :style="{ width: `${scaleLength * 10}px` }">
      <div class="fret" v-for="fret in frets" :style="{ left: `${fret.position * 10}px` }"></div>
    </div>

    <div class="labels">
      <div class="label-container" v-for="(fret, index) in frets" :style="{ left: `${fret.position * 10 - fret.length * 10 / 2}px` }">
        <div v-for="line in Array(index + 1)" class="line"></div>
        <div class="label">
          <strong>Fret {{ index + 1 }}:</strong>
          
          {{ fret.length.toFixed(2) }} cm
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  margin: 80px auto;
}

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
  transform: translate(-68px, -3px) rotate(-70deg);
  white-space: nowrap;
}

.line {
  height: 1rem;
  width: 1px;
  background-color: #fff;
}

.guitar-fretboard {
  height: 80px;
  position: relative;
  background-color: sienna;
}

.guitar-fretboard .fret {
  position: absolute;
  top: 0;
  width: 4px;
  height: 100%;
  background-color: lightyellow;
  border-radius: 5px;
}
</style>
