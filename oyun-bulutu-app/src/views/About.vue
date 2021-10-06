<template>
  <div class="about">
    <transition appear name="fade" @after-enter="after">
      <h1>Hakkımzda</h1>
    </transition>
    <transition appear name="p1">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, alias!
        Perferendis quasi vitae iusto tempore debitis beatae ea? Beatae
        assumenda, porro temporibus alias obcaecati quasi voluptas in voluptatum
        aliquid nostrum!
      </p>
    </transition>
    <transition appear name="p2">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, alias!
        Perferendis quasi vitae iusto tempore debitis beatae ea? Beatae
        assumenda, porro temporibus alias obcaecati quasi voluptas in voluptatum
        aliquid nostrum!
      </p>
    </transition>
    <transition appear name="p3">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, alias!
        Perferendis quasi vitae iusto tempore debitis beatae ea? Beatae
        assumenda, porro temporibus alias obcaecati quasi voluptas in voluptatum
        aliquid nostrum!
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "About",
  setup() {
    const after = (el) => {
      el.style.color = "#c44569";
    };
    return { after };
  },
};
</script>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-enter-active {
  transition: all 3s ease;
}

.p1-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.p1-enter-to {
  opacity: 0.5;
  transform: translateY(0);
}
.p1-enter-active {
  transition: opacity 2s ease-in;
  transition: transform 1s ease-out;
}

.p2-enter-from {
  opacity: 0;
  transform: translateY(150px);
}
.p2-enter-to {
  opacity: 0.5;
  transform: translateY(0);
}
.p2-enter-active {
  transition: opacity 2s ease-in;
  transition: transform 1s ease-out;
}

.p3-enter-from {
  opacity: 0;
  transform: translateY(200px);
}
.p3-enter-to {
  opacity: 0.5;
  transform: translateY(0);
}
.p3-enter-active {
  transition: opacity 2s ease-in;
  transition: transform 1s ease-out;
}
</style>
