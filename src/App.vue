<template>
  <nav>
    <router-link :to="'/'">Home</router-link>
    <router-link :to="'about'">About</router-link>
  </nav>
  <div id="main">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  font-family: "Bree Serif", serif;
}
</style>
