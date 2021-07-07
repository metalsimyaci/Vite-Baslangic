<template>
  <div id="main">
    <button
      @click="
        num++;
        num2++;
        num3.sayi++;
      "
    >
      Tıkla
    </button>
    <div>{{ num }} - {{ num2 }} - {{ num3.sayi }}</div>
    <button @click="input">Yazi Gir</button>
    <br />
    {{ mesaj }}
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, watchEffect } from "vue";
ref: num = 0;
ref: mesaj = "";
const num2 = ref(0);
const num3 = reactive({ sayi: 0 });

watch($num, (nv, ov) => {
  console.log(`num:${num}`);
  console.log(`nv:${nv}`);
  console.log(`ov:${ov}`);
});
watch([num2, $mesaj], (newValue, oldValue) => {
  console.log(`num2:${num2.value}`);
  console.log(`mesaj:${mesaj}`);
  console.log(`nv2:${newValue}`);
  console.log(`ov2:${oldValue}`);
});
watch(num3, (nv, ov) => {
  console.log(`num3:${num3.sayi}`);
  console.log(`nv3:${nv.sayi}`);
  console.log(`ov3:${ov.sayi}`);
});

const input = () => {
  const text = prompt("Lütfen bir içerik giriniz:")!;
  mesaj = text;
};

const myWatcher = watchEffect(
  () => {
    console.log(`Mesaj Effect:${$num.value}`);
  },
  {
    onTrigger: (e) => {
      if (e.newValue > 3) {
        myWatcher(); // bu sayede watcher ı sonlandırıyoruz
      }
    },
  }
);
</script>

<style lang="scss">
// @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
// @import url(https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css);
button {
  font-size: 5em;
}
</style>
