<template>
  <div id="nav" class="nav" v-if="user">
    <router-link :to="{ name: 'Add' }">Oyun Ekle</router-link> |
    <router-link :to="{ name: 'Games' }">Oyunlar</router-link>
    <button @click="handlerLogout">Çıkış Yap</button>
  </div>
  <div id="nav" class="nav" v-else>
    <router-link to="/">Anasayfa</router-link> |
    <router-link to="/about">Hakkımızda</router-link>
  </div>
  <router-view />
</template>
<script>
import getUser from "./composables/users";
import anmLogout from "./composables/logOut";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { user } = getUser();
    const router = useRouter();

    const { logOut } = anmLogout();
    const handlerLogout = async () => {
      await logOut();
      router.push("/");
    };
    return { user, handlerLogout };
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background: #f7d794;
}
.nav {
  padding: 30px;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.nav a.router-link-exact-active {
  color: #c44569;
}

button {
  border: 1px solid #ee5253;
  border-radius: 10px;
  background-color: #ee5253;
  padding: 7px;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
}
</style>
