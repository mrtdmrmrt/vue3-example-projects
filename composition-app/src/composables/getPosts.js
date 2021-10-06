import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const err = ref(null);

  const fetchPosts = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      posts.value = await res.json();
      if (!res.ok) throw new Error("Verilere Erişilemedi...");
    } catch (error) {
      err.value = error.message;
    }
  };
  return { posts, err, fetchPosts };
};
export default getPosts;
