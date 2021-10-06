<template>
  <form @submit.prevent="yapilacakEkle">
    <input type="text" placeholder="yapılacak giriniz.." v-model="yapilacak" />
    <button>Ekle</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Ekle",
  setup() {
    //DATA
    const store = useStore();

    const yapilacak = ref("");

    //METHODS
    const yapilacakEkle = () => {
      const yapilacakObj = {
        yAd: yapilacak.value,
        yDurum: true,
      };
      store.dispatch("ekleAction", yapilacakObj);
    };

    return { yapilacak, yapilacakEkle };
  },
};
</script>

<style></style>
