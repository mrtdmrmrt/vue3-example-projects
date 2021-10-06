<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Liste />
    <Ekle />
    <Durumlar />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Liste from "../components/Liste.vue";
import Ekle from "../components/Ekle.vue";
import Durumlar from "../components/Durumlar.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Liste,
    Ekle,
    Durumlar,
  },
};
</script>
