<template>
  <div class="games-list">
    <h1>Oyun Listesi</h1>
    <ul>
      <li v-for="game in games" :key="game.id">
        <span class="material-icon md-48">videogame_asset</span>
        <div>{{ game.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Games",
  setup() {
    const store = useStore();

    const games = computed(() => {
      return store.state.games;
    });

    return { games };
  },
};
</script>

<style>
.game-list ul {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: 600px;
  margin: 60px auto;
}
.game-list li {
  list-style-type: none;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  line-height: 1.5em;
  text-transform: capitalize;
}

.material-icons.md-48 {
  font-size: 48px;
}
</style>
