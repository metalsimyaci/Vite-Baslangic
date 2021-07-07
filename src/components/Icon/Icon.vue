<template>
  <span translate="no" class="icon material-icons">
    {{ $props.name }}
  </span>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps<{
  name: string;
}>();
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
</style>
