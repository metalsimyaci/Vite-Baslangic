<template>
  <div id="main" :style="`transform: translateX(-${active * 100}%)`">
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrev">Önceki</button>
          <button @click="goNext">Sonraki</button>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrev">Önceki</button>
          <button @click="goNext">Sonraki</button>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrev">Önceki</button>
          <button @click="goNext">Sonraki</button>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrev">Önceki</button>
          <button @click="goNext">Sonraki</button>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrev">Önceki</button>
          <button @click="goNext">Sonraki</button>
        </div>
      </div>
    </div>
    <div class="section-wrapper">
      <div class="section">
        <div class="content"></div>
        <div class="button-area">
          <button @click="goPrev">Önceki</button>
          <button @click="goNext">Sonraki</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
ref: active = 0;
const goNext = () => {
  console.log("goNext-active", active);
  if (active < 4) {
    active++;
  }
};
const goPrev = () => {
  console.log("goPrev-active", active);
  if (active > 0) {
    active--;
  }
};
</script>
<style lang="scss">
#main {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: -webkit-fill-available;
  display: flex;
  flex-flow: row nowrap;
  transition: transform 0.4s ease-in-out;
  background-color: rgb(240, 240, 240);

  .section-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 25px;
    transition: transform 0.4s ease-in-out;
    flex-shrink: 0;

    .section {
      display: flex;
      width: 100%;
      max-width: 700px;
      height: 100%;
      max-height: 480px;
      border-radius: 25px;
      background-color: white;
      border: 1px solid rgba(27, 27, 27, 0.144);
      box-shadow: 0px 0px 8px 1px rgba(27, 27, 27, 0.156);
      flex-flow: column wrap;
      flex-shrink: 0;

      .content {
        height: 100%;
        width: 100%;
        flex: 1;
      }

      .button-area {
        height: 75px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 5px 25px;

        button {
          $blue: rgb(24, 100, 208);
          background-color: white;
          border: 1px solid $blue;
          color: $blue;
          font-weight: bold;
          padding: 8px 15px;
          margin-left: 15px;
          border-radius: 25px;
          transition: all 0.3s;
          cursor: pointer;
          outline: none;
          &:hover {
            color: white;
            background-color: $blue;
          }
        }
      }
    }
  }
}
</style>
