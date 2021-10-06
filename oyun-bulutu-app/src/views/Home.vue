<template>
  <div class="home">
    <transition name="fade">
      <div v-if="showHi">Merhaba transition</div>
    </transition>
    <button @click="showHi = !showHi">Göster/Gizle</button>
    <div>
      <h1>AOS Oyun Bulutu</h1>
      <p>Buluta oyun eklemek ve oyunları görmek için giriş yapınız</p>
      <button @click="handlerLogin">misafir Girişi</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import anmLogin from "../composables/logIn";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const { login } = anmLogin();
    const showHi = ref(true);

    const router = useRouter();

    const handlerLogin = async () => {
      await login();

      router.push({ name: "Add" });
    };

    return { handlerLogin, showHi };
  },
};
</script>
<style scoped>
button {
  background-color: #fd7272;
}
/* 
from -> başlangıç
to -> bitiş 
active -> aktif zaman

Göster işlemi için enter
*/
.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition: all 2s ease ;
}
/*
Gizleme işlemi için leave
*/
.fade-leave-from{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition: all 2s ease ;
}
</style>
