<template>
  <div class="card" @click="open(blog_post)">
    <figure class="card__figure">
      <img :src="blog_post.title_image" alt="" />
    </figure>
    <div class="card__descrip">
      <h2 class="card__descrip--h2">
        {{ truncate(blog_post.title) }}
      </h2>
      <span class="card__descrip--tag">
        {{ blog_post.tag }}
      </span>
    </div>
  </div>
</template>

<script>
import cards from "@/mixins/cards.js";

export default {
  name: "Card",
  mixins: [cards],
};
</script>

<style lang="scss" scoped>
.card {
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  transition: $transition-primary;
  transform: scale(1);
  margin: 0 2rem 0 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 43rem;
    width: 34rem;
    z-index: 1;
    opacity: 0;
    transition: $transition-primary;
    background: rgba($color: #000000, $alpha: 0.2);
  }

  &:hover {
    transform: scale(1.2);
    margin: 0 6rem 0 6rem;

    & > .card__descrip {
      z-index: 3;
      transform: scale(1);
    }

    &::before {
      opacity: 1;
    }

    z-index: 3;
  }

  &__figure {
    overflow: hidden;
    height: 43rem;
    width: 34rem;
  }

  &__descrip {
    position: absolute;
    top: 0;
    left: 0;
    height: 43rem;
    width: 34rem;
    z-index: 2;
    transition: $transition-primary;
    transform: scale(0);

    &--h2 {
      position: absolute;
      right: -12rem;
      bottom: 11rem;
      font-size: 5rem;
      width: 30rem;
      height: 26rem;
      z-index: 4;
      text-overflow: ellipsis;
      color: #fff;
    }

    @include cardTag;
  }
}
</style>