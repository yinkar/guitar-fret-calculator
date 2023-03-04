<script setup>
import { onMounted, ref } from 'vue';
import Result from './components/Result.vue';

const frets = ref([]);
const scaleLength = ref(65);
const numberOfFrets = ref(24);
const precision = ref(2);

const fretLengthRate = 17.817;
const inchesRate = 2.54;

const minNumberOfFrets = 1;
const maxNumberOfFrets = 40;

const minScaleLength = 32;
const maxScaleLength = 200;

const Units = {
  Centimeters: 0,
  Inches: 1,
};

const unit = ref(Units.Centimeters);

function calcFret(stringLenght, fretAmount) {
    const fretLengths = [];

    let remainStringLength = stringLenght;
    for (let i = 0; i < fretAmount; i++) {
        const fretLength = remainStringLength / fretLengthRate;
        fretLengths.push(fretLength);
        remainStringLength -= fretLength;
    }
    return fretLengths;
}

function fretCountEvent() {
  const fretLengths = calcFret(scaleLength.value * (unit.value === Units.Inches ? inchesRate : 1), numberOfFrets.value);

  frets.value.splice(0, frets.value.length);

  frets.value.push(...fretLengths.map((e, i) => {
    return {
      length: e,
      position: fretLengths.slice(0, i + 1).reduce((acc, a) => acc + a),
    }
  }));
}

function unitChange() {
  if (unit.value === Units.Inches) {
    scaleLength.value = parseFloat((scaleLength.value / inchesRate).toFixed(2));
  }
  else {
    scaleLength.value = Math.ceil(scaleLength.value * inchesRate);
  }
  
  fretCountEvent();
}

onMounted(() => {
  fretCountEvent();
});
</script>

<template>

  <div class="app-container">
    <div class="panel">

      <div class="panel-row">
        <div>
          <label for="scale-length">Scale Lenght</label>
          <input name="scale-length" type="number" :min="minScaleLength" :max="maxScaleLength" @input="fretCountEvent" v-model="scaleLength">
        </div>

        <div class="unit-selector">
          <input type="radio" id="unit_cm" :value="Units.Centimeters" v-model="unit" @change="unitChange">
          <label for="unit_cm">cm</label>

          <input type="radio" id="unit_inches" :value="Units.Inches" v-model="unit" @change="unitChange">
          <label for="unit_inches">Inches</label>
        </div>
      </div>

      <div class="panel-row">
        <div>
          <label for="number-of-frets">Number of Frets</label>
          <input name="number-of-frets" type="number" :min="minNumberOfFrets" :max="maxNumberOfFrets" @input="fretCountEvent" v-model="numberOfFrets">
        </div>
        
        <div>
          <label for="precision">Precision</label>
          <input name="precision" type="number" min="1" max="6" @input="fretCountEvent" v-model="precision">
        </div>
      </div>
      
    </div>

    <Result v-show="scaleLength > minScaleLength" :frets="frets" :scale-length="scaleLength" :precision="precision" :is-in-inches="unit === Units.Inches" :inches-rate="inchesRate" />

    <div class="icons">
      <a href="https://github.com/yinkar/guitar-fret-calculator" title="Github Repo">
        <img src="./assets/icons/github.svg" alt="Github Repo">
      </a>
    </div>
  </div>

</template>

<style scoped>
.app-container {
  margin: 30px auto;
}

.panel {
  width: 100vw;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.panel-row {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.panel .unit-selector input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.panel .unit-selector {
  border-radius: 5px;
  background-color: #333;
  overflow: hidden;
}

.panel .unit-selector label {
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  font-size: .8rem
}

.panel .unit-selector input[type="radio"]:checked + label {
  background-color: #555;
}

.panel .unit-selector label:hover {
  background-color: #444;
}

.panel label {
  white-space: nowrap;
  display: block;
}

.panel > div {
  margin-bottom: 20px;
  text-align: center;
}

.panel input {
  padding: 5px 10px;
  font-size: 2rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  width: 120px;
  text-align: center;
}

.icons {
  position: absolute;
  width: 200px;
  height: 40px;
  right: 0;
  top: 0;
  display: flex;
  justify-content: right;
}

.icons > a {
  display: inline-block;
  height: 60px;
  margin: 10px 10px;
  opacity: .6;
  transition: 80ms ease-in-out all;
}

.icons > a:hover {
  opacity: 1;
}

.icons img {
  height: 40px;
  width: auto;
}
</style>
