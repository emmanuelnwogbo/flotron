<template>
  <div class="post">
    <div class="post__content">
      <div class="post__content--tag post__content--centertext">
        <p>{{ blog_post.tag }}</p>
      </div>
      <h1 class="post__content--title post__content--centertext">
        {{ blog_post.title }}
      </h1>
      <div class="post__content--body">
        <figure class="post__content--titleimage">
          <img :src="blog_post.title_image" alt="" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    if (!mediaQuery.matches) {
      const body = document.getElementsByTagName("body");
      body[0].style.minHeight = `100vh`;
    }
  },
  computed: {
    blog_post() {
      const blog_post = this.$store.getters.blog_posts.filter(
        (blog_post) => blog_post.id == this.$route.params.id
      )[0];

      return blog_post;
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  color: #000000;
  min-height: 100vh;
  background: #fff;
  margin-top: 10rem;
  padding-top: 6rem;

  &__content {
    width: 100rem;
    margin: 0 auto;

    @include respond(tab-land) {
      width: 100vw;
      margin: 0 auto;
      padding: 0 1rem;
    }

    &--centertext {
      text-align: center;
    }

    &--tag {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }

    &--title {
      font-size: 5.5rem;
      font-weight: 700;
      width: 80rem;
      margin: 0 auto;

      @include respond(tab-land) {
        font-size: 2.8rem;
        font-weight: 700;
        width: 85vw;
        margin: 2rem auto;
      }
    }

    &--titleimage {
      height: 50rem;
      width: 100rem;

      @include respond(tab-land) {
        width: 94vw;
        margin: 0 auto;
      }
    }

    &--body {
      margin-top: 4rem;
    }
  }
}
</style>