<template>
  <div id="main">
    <div class="-content">
      <div class="-item">
        <input
          @keydown.arrow-down="handleArrowDown"
          @keydown.arrow-up="handleArrowUp"
          type="text"
        />
      </div>
      <div
        :class="{ active: currentActiveElementIndex == index }"
        v-for="(val, index) in items"
        class="-item"
        :key="index"
        :ref="
          (e) => {
            refArray.push(e);
          }
        "
      >
        {{ val }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type { ComponentInternalInstance } from "vue";
type RefParams = Element | ComponentInternalInstance | null;
</script>
<script setup lang="ts">
import { reactive, onBeforeUpdate } from "vue";
ref: currentActiveElementIndex = 10;
const items = [...new Array(50).keys()];

const refArray = reactive<RefParams[]>([]);

const handleArrowDown = () => {
  currentActiveElementIndex++;
  focusToActiveElement();
};
const handleArrowUp = () => {
  currentActiveElementIndex--;
  focusToActiveElement();
};
const focusToActiveElement = () => {
  // const el = content!;
  // const focusElement = el.querySelector(".-item.acti");
  const focusElement = refArray[currentActiveElementIndex];
  if (focusElement instanceof Element) {
    focusElement.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  }
};
onBeforeUpdate(() => {
  refArray.length = 0;
});
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
  font-family: "Bree Serif", serif;
}
#main {
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  .-content {
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
    padding: 25px;
    .-item {
      color: brown;
      font-weight: bold;
      line-height: 1;
      font-size: 20px;
      &.active {
        color: blue;
        font-weight: bold;
        line-height: 1;
        font-size: 20px;
      }
    }
  }

  input {
    $grey: rgba(127, 127, 127, 0.844);
    border: 1px solid $grey;
    line-height: 1;
    font-size: 24px;
    font-weight: bolder;
    padding: 5px;
    color: $grey;
    &:hover,
    &:focus {
      color: orange;
    }
  }
}
</style>
