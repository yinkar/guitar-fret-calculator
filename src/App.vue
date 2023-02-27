<script setup>
import { onMounted, ref } from 'vue';
import Result from './components/Result.vue';

const frets = ref([]);
const scaleLength = ref(65);
const numberOfFrets = ref(24);
const precision = ref(2);

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
      <input type="number" min="1" max="6" @input="fretCountEvent" v-model="precision">
    </div>

    <Result :frets="frets" :scale-length="scaleLength" :precision="precision" />
  </div>

</template>

<style scoped>
.app-container {
  margin: 80px auto;
}

.panel {
  display: flex;
  width: 600px;
  justify-content: space-between;
  margin: 0 auto;
}

.panel input {
  padding: 5px 10px;
  font-size: 2rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
}
</style>
