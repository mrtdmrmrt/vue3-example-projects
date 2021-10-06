<template>
  <div class="games">
    <input
      type="text"
      v-model="newGame"
      placehodler="yeni oyun adı..."
      @keypress.enter="addGame"
    />
    <ul>
      <transition-group tag="ul" name="list" appear>
        <li v-for="game in games" :key="game.id" @click="removeGame(game.id)">
          {{ game.name }}
        </li>
      </transition-group>
    </ul>
  </div>
  <transition name="modal">
    <Modal v-if="showModal" />
  </transition>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import Modal from "../components/Modal.vue";
export default {
  name: "Add",
  components: {
    Modal,
  },
  setup() {
    const store = useStore();
    const newGame = ref("");
    const showModal = ref(false);

    const games = computed(() => {
      return store.state.games;
    });

    const addGame = () => {
      if (newGame.value) {
        store.dispatch("addGame", newGame.value);
        newGame.value = "";
      } else {
        triggerModal();
      }
    };
    const removeGame = (id) => {
      store.dispatch("deleteGame", id);
    };
    const triggerModal = () => {
      showModal.value = true;
      setTimeout(() => {
        showModal.value = false;
      }, 3000);
    };
    return { games, newGame, showModal, addGame, removeGame };
  },
};
</script>

<style>
.games {
  max-width: 400px;
  margin: 20px auto;
  position: relative;
}
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  outline: none;
}
.games ul {
  position: relative;
  padding: 0;
}
.games li {
  list-style-type: none;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  background: #e66767;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  text-transform: capitalize;
}
.games li:hover {
  cursor: pointer;
}

@keyframes titresim {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
    opacity: 1;
  }
  70% {
    transform: translateX(-8px);
    opacity: 1;
  }
  80% {
    transform: translateX(4px);
    opacity: 1;
  }
  90% {
    transform: translateX(-4px);
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
/**Göster işlemi için to */
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.modal-enter-active {
  /* transition: all 0.5s ease; */
  animation: titresim 0.5s ease;
}
/*
Gizleme işlemi için leave
*/
.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
/**var sayılan anı to değerleri oludğu için yazmaya gerek yok */
/* .list-enter-to {
  opacity: 1;
  transform: scale(1);
} */

.list-enter-active {
  transition: all 0.4s ease;
}

.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.list-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}

.list-move {
  transition: all 0.3s ease;
}
</style>
