<template>
  <div class="mobilecard" @click="open(blog_post)">
    <div class="mobilecard__card">
      <figure class="mobilecard__figure">
        <img :src="blog_post.title_image" alt="" />
      </figure>
      <div class="mobilecard__desc">
        <h2 class="mobilecard__desc--h2">{{ blog_post.title }}</h2>
        <span class="mobilecard__desc--tag">
          {{ blog_post.tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import cards from "@/mixins/cards.js";

export default {
  name: "MobileCard",
  mixins: [cards],
};
</script>

<style lang="scss" scoped>
.mobilecard {
  &__card {
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 53rem !important;
    width: 37rem !important;
    position: relative;
    transform: translateY(-6rem);
  }

  &__figure {
    height: 100%;
    width: 100%;
  }

  &__desc {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    left: 0;
    z-index: 2;

    &--h2 {
      font-weight: 400;
      position: absolute;
      bottom: -29rem;
      font-size: 2.5rem;
      width: 32rem;
      height: 26rem;
      z-index: 4;
      text-overflow: ellipsis;
      color: #fff;
      text-align: left;
      left: 0;
    }

    @include cardTag;
  }
}
</style>