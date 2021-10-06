<template>
  <div v-for="post in postlar" :key="post.id">{{ post.baslik }}</div>
  <hr />
  <div v-for="post in posts" :key="post.id">{{ post.title }}</div>
  <div v-if="err">
    {{ err }}
  </div>
</template>

<script>
//import { ref } from "vue";
import {useRoute, useRouter} from 'vue-router';
import getPosts from '../composables/getPosts';
export default {
  name: "PostListesi",
  props: ["postlar"],
  setup(props) {
    console.log("porps->", props.postlar);

    const route = useRoute();
    const router = useRouter();

    console.log('route->',route,'router->',router)

    const {posts, err, fetchPosts} = getPosts();

    fetchPosts();

    return {posts, err}
  },
};
</script>

<style></style>
