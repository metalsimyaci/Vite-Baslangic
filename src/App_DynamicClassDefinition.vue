<template>
  <h2>Active Index: {{ activeIndex }}</h2>
  <div
    class="d-flex align-items-stretch flex-row"
    style="background-color: black; width: 600px; height: 300px"
  >
    <div
      :class="[{ active: activeIndex == 0 }, { notActive: activeIndex !== 0 }]"
      @click="activeIndex = 0"
      class="w-100 yellow"
    >
      Index 0
    </div>
    <div
      :class="[{ active: activeIndex == 1 }, { notActive: activeIndex !== 1 }]"
      @click="activeIndex = 1"
      class="w-100 orange"
    >
      Index 1
    </div>
    <div
      :class="[{ active: activeIndex == 2 }, { notActive: activeIndex !== 2 }]"
      @click="activeIndex = 2"
      class="w-100 purple"
    >
      Index 2
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

ref: activeIndex = null as null | number;
// const activeIndex = ref<null | number>(null);
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
@import url(https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css);

body {
  margin: 0;
  padding: 0;
}
.main {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  background-color: black;
  width: 600px;
  height: 300px;
}
.cub {
  width: 100px;
}
.yellow {
  background-color: yellow;
}
.orange {
  background-color: orange;
}
.purple {
  background-color: purple;
}
.active {
  animation: active 0.5s normal;
}
.notActive {
  animation: notActive 0.5s normal;
}

@keyframes active {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes notActive {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
