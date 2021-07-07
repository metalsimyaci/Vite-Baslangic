<template>
  <div id="main">
    <YazVue :sayi="10" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import YazVue from "./components/RecursiveComponent/Yaz.vue";
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  font-family: "Bree Serif", serif;
}
</style>
