<template>
  <div class="py-4"><Icon :name="'delete'"></Icon> {{ sayi }}</div>
  <template v-if="props.sayi > 0">
    <Yaz :sayi="props.sayi - 1" />
  </template>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps<{
  sayi: number;
}>();
</script>
