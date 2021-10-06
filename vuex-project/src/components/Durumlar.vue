<template>
  <div>Yapılanların Sayısı: {{ yapilanlarinSayisi }}</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Durumlar",
  setup() {
    const store = useStore();

    //Computed
    const yapilanlarinSayisi = computed(() => {
      return store.getters.yapilanlarinSayisi;
    });

    return { yapilanlarinSayisi };
  },
};
</script>

<style></style>
