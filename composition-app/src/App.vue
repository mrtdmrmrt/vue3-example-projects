<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <span>{{ ad }}</span> -- <span>{{ gorev }}</span>
  <button @click="btnTiklandi">Tıkla</button>
  <p ref="bilgiler">p etiketi</p>
  <p>{{ name }}</p>
  <input type="text" v-model="name" />
  <p>yetenek: {{ yetenekNesnesi.yetenekAd }}</p>
  <input type="text" v-model="ara" />
  <div v-for="isim in bulunanlar" :key="isim">{{ isim }}</div>
  <PostListesi :postlar="postlar"/>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
//import { onMounted } from "vue";
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostListesi from './components/PostListesi.vue'
export default {
  name: "App",
  components: {
    HelloWorld,
    PostListesi
  },
  setup() {
    console.log("setup yüklendi");

    const postlar = ref([
      {id: 1, baslik:'ilk post', icerik: 'ilk icerik'},
      {id: 2, baslik:'ikinci post', icerik: 'ikinci icerik'},
      {id: 3, baslik:'üçüncü post', icerik: 'üçüncü icerik'},
    ])

    //REF
    /**
     * Ref istersek değişken gibi istersekde element attribute gibi kullanabiliriz(vue2 $refs.bilgiler)
     * ref string boolen number giibi değişkenler içi kullanılır
     */
    const bilgiler = ref("demir");
    //Reactive aslında object ler için kullanılır
    let yetenekNesnesi = reactive({ yetenekAd: "vue" });
    //Ref değişken tanımlama
    let name = ref("mert");

    const isimler = ref(["vue", "react", "nuxt", "next"]);
    const ara = ref("");

    //Computed
    const bulunanlar = computed(() => {
      return isimler.value.filter((isim) => isim.includes(ara.value));
    }); 

    //Watch
    watch(ara, () => {
      console.log("watch");
    });

    /**
     * içerisinde değişen bir şey olduğu sürece watchEffect çalışır
     */
    watchEffect(()=>{
      console.log('wtcheffect',ara.value)
    })

    /**
     * Önemli Not: ref tanımlamadan değişken oluşturursak eğer template içinde bind edemiyoruz
     */

    //DATA
    const ad = "mert";
    const gorev = "mühendis";

    //METHODS
    const btnTiklandi = () => {
      console.log("button tıklandı", bilgiler, bilgiler.value);
      name.value = "software";
      yetenekNesnesi.yetenekAd = "nuxt";
    };
    return {
      ad,
      gorev,
      btnTiklandi,
      bilgiler,
      name,
      yetenekNesnesi,
      isimler,
      ara,
      bulunanlar,
      postlar
    };
    // onMounted(() => {
    //   console.log("mounted");
    // });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
