<template>
  <div id="myElement">
    <h2 :key="myKey" @click="nextTickFunc">Lifecycle, Render, Template ref</h2>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  nextTick,
  onActivated,
  onDeactivated,
} from "vue";

ref: myKey = 3;

const keyUpdate = () => {
  myKey = Math.random();
};
const nextTickFunc = async () => {
  await nextTick();
  console.log("NextTick Çalıştı");
};

onBeforeMount(() => {
  console.log("OnBeforeMount", document.querySelector("#myElement"));
});
onMounted(() => {
  console.log("OnMounted", document.querySelector("#myElement"));
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate", "Güncellenecek");
});
onUpdated(() => {
  console.log("onUpdate", "Cüncellendi");
});
onActivated(() => {
  console.log("onActivated", "Activated");
});
onDeactivated(() => {
  console.log("onDeactivated", "DeActivated");
});
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
@import url(https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css);

body {
  margin: 0;
  padding: 0;
}
</style>
