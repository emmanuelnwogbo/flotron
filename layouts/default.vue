<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );
  },
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;

  @include respond(tab-land) {
    // width < 1200?
    font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
  }

  @include respond(tab-port) {
    font-size: 52%; //1 rem = 8px, 8/16 = 50%
  }

  @include respond(small-phone) {
    font-size: 44%; //1 rem = 8px, 8/16 = 50%
  }

  @include respond(smaller-phone) {
    font-size: 37%; //1 rem = 8px, 8/16 = 50%
  }

  @include respond(big-desktop) {
    font-size: 75%; //1rem = 12, 12/16
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  position: relative;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  color: #6f6f6f;
  font-weight: 400;
  background: #000000;
  min-height: 300vh;

  scrollbar-width: none;
  scrollbar-color: transparent;

  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-color: transparent transparent; /*just hides the scrollbar for firefox */

  @include respond(tab-land) {
    min-height: 100vh;
    height: 100vh;
  }

  &::-webkit-scrollbar {
    width: 0px;
    opacity: 0;
  }

  &::-moz-scrollbar {
    width: 0px;
    opacity: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-moz-scrollbar {
    display: none;
  }
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.container {
  display: flex;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 3rem 6rem;
  transition: $transition-secondary;
  transform: translateX(0);
  animation: container 1s linear;
}

.header {
  &__progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.3rem;
    width: 0;
    display: block;
    background: #c0392b;

    transition: $transition-secondary;
    animation: progress 1s linear;
  }
}

:root * {
  /* Pause the animation */
  animation-play-state: paused;
  /* Bind the animation to scroll */
  animation-delay: calc(var(--scroll) * -1s);
  /* These last 2 properites clean up overshoot weirdness */
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
</style>
