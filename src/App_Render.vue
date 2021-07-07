<script lang="ts">
import { defineComponent, ref, h } from "vue";
export default defineComponent({
  setup() {
    const myEl = ref<number | string>(2);
    const log = () => {
      myEl.value = Date.now().toString();
      console.log("log");
    };
    return () =>
      h("div", { id: "myElement" }, [
        h("h2", { onClick: log }, [
          h("span", { class: "material-icons" }, "whatshot"),
          h("span", { key: myEl.value }, myEl.value),
          typeof myEl.value === "number"
            ? h("span", "Bir Sayı")
            : h("span", "Sayı değil"),
          [...Array(20).fill(Math.random())].map((v) => {
            return h("div", v);
          }),
        ]),
      ]);
  },
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
