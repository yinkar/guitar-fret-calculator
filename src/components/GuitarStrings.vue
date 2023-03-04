<script setup>
defineProps({
  scaleLength: Number,
  strings: Array,
});
</script>

<template>
  <div class="strings" :style="{ width: `${scaleLength * 10 + 84}px` }">
    <div 
      class="string" :class="`string-${index + 1}`" 
      :style="{ top: `${string.position}px`, height: `${string.size}px`}" 
      v-for="(string, index) in strings"
    ></div>

    <div class="bridge-dot" v-for="string in strings" :style="{ top: `${string.position - 3}px` }"></div>
  </div>
</template>

<style scoped>
.strings {
  position: relative;
}

.string {
  width: 100%;
  position: absolute;
  left: 0;
  background-image: url('../assets/string.png');
  background-size: 10px 100%;
  z-index: 100;
  box-shadow: inset 0px 0px 1px rgba(0, 0, 0, .8);
  filter: drop-shadow(0 2px 1px rgba(0, 0, 0, .7));
}

.bridge-dot {
  position: absolute;
  width: 7px;
  height: 7px;
  left: calc(100% - 7px);
  background-color: #eee;
  border-radius: 50%;
  z-index: 100;
  box-shadow: inset -2px -2px 4px rgb(0 0 0 / 40%), 2px 2px 3px rgb(0 0 0 / 10%);
}
</style>