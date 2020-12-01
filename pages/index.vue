<template>
  <div class="container">
    <div class="container__body container__desktop">
      <div class="container__body--intro">
        <div class="container__body--heading">
          <p class="container__body--hello">Hello,</p>
          <p class="container__body--name">I'm Foluso Oyebanjo</p>
        </div>
        <p class="container__body--copy">
          I design thoughtful digital experiences & beautiful brand aesthetics.
          I provide high quality web design services.
        </p>
      </div>
      <div class="container__body--cards">
        <Card
          v-for="(blog_post, index) in blog_posts"
          :key="'blog_post' + index"
          v-bind:blog_post="blog_post"
        />
      </div>
    </div>
    <div class="container__mobile swiper-container">
      <div class="container__track swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(blog_post, index) in blog_posts"
          :key="'blog_postmob' + index"
        >
          <MobileCard v-bind:blog_post="blog_post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

import Card from "@/components/Card";
import MobileCard from "@/components/MobileCard";

export default {
  name: "Home",
  components: {
    Card,
    MobileCard,
  },
  mounted() {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    if (!mediaQuery.matches) {
      const body = document.getElementsByTagName("body");
      body[0].style.minHeight = `300vh`;
    } else {
      const swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  },
  computed: {
    blog_posts() {
      const blog_posts = this.$store.getters.blog_posts;

      return blog_posts;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  &__body {
    font-weight: 400;
    display: flex;

    &--intro {
      width: 37rem;
      transform: translateY(11rem);
      margin-right: 18rem;
    }

    &--heading {
      margin-bottom: 2.4rem;
    }

    &--hello {
      font-size: 5rem;
    }

    &--name {
      font-size: 3.1rem;
    }

    &--copy {
      font-size: 2rem;
      font-weight: 300;
    }

    &--cards {
      display: flex;
    }
  }

  &__desktop {
    display: flex;

    @include respond(tab-land) {
      display: none;
    }
  }

  &__mobile {
    display: none;

    @include respond(tab-land) {
      display: block;
      width: 100%;
      height: 100%;
      padding: 2rem 0;
    }
  }

  &__track {
    display: flex;
    align-items: center;
    height: 100vh;
  }
}
</style>
