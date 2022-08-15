<script lang="ts" setup>
let isActive = false;
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: `smooth`,
  });
};

const showButton = () => {
  isActive = window.scrollY / 1200 < 1;
};

if (typeof window !== `undefined`) {
  window.addEventListener(`scroll`, showButton);
}
</script>

<template>
  <button
    id="scrollTopButton"
    aria-label="Go to top"
    class="btn btn-primary border rounded-circle fixed-bottom"
    :class="{ active: isActive }"
    @click="scrollToTop"
  >
    <FontAwesomeIcon icon="angle-up" />
  </button>
</template>

<style lang="scss" scoped>
#scrollTopButton {
  bottom: 20px;
  left: unset;
  transition: all 0.15s linear;
}
</style>
