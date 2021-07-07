<template>
  <div id="main">
    <TextVue v-if="isActive" />
  </div>
  <button @click="isActive = true">Aktif Et</button>

  <br />
  <h2>Dinamik Komponent</h2>
  <button @click="addComponent">Komponent Ekle</button>
  <component
    v-for="(cp, index) in componentList.components"
    :is="cp"
    :key="index"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent, markRaw, reactive } from "vue";
import TextVue from "./components/DinamicComponent/Text.vue";
// const TextVue = defineAsyncComponent(
//   () => import("./components/DinamicComponent/Text.vue")
// );
ref: isActive = false;
const componentList = reactive({
  components: [markRaw(TextVue)],
});

const addComponent = () => {
  componentList.components.push(markRaw(TextVue));
};
</script>

<style lang="scss">
// @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
// @import url(https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css);
button {
  font-size: 1em;
}
</style>
