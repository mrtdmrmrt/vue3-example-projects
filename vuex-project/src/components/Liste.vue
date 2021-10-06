<template>
  <div>
    <ul>
      <li v-for="item in yapilacaklar" :key="item.id">{{ item.ad }}</li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Liste",
  setup() {
    //State
    const store = useStore();

    //Computed
    const yapilacaklar = computed(() => {
      return store.state.yapilacaklar;
    });

    return { yapilacaklar };
  },
};
</script>

<style></style>
