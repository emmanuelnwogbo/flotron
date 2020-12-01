<template>
  <div class="header">
    <span class="header__progress"></span>
    <div class="header__socials">
      <span class="header__socials--svg">
        <svg>
          <use xlink:href="~assets/svgs/sprite.svg#icon-twitter" />
        </svg>
      </span>
      <span class="header__socials--svg">
        <svg>
          <use xlink:href="~assets/svgs/sprite.svg#icon-dribbble" />
        </svg>
      </span>
      <span class="header__socials--svg">
        <svg>
          <use xlink:href="~assets/svgs/sprite.svg#icon-linkedin2" />
        </svg>
      </span>
    </div>
    <div class="header__name" @click="go_home">
      <figure class="header__figure">
        <img src="~assets/logo-white.png" alt="" />
      </figure>
    </div>

    <div class="header__burger" @click="open_side_nav">
      <span class="header__burger--svg">
        <svg>
          <use xlink:href="~assets/svgs/sprite.svg#icon-align-left" />
        </svg>
      </span>
    </div>

    <div
      class="header__sidenav"
      v-bind:class="{
        opened: side_nav,
      }"
      @click.prevent="open_side_nav"
    >
      <div class="header__sidenav--body">
        <div class="header__sidenav--name" @click="go_home">
          <figure class="header__figure">
            <img src="~assets/logo-white.png" alt="" />
          </figure>
        </div>
        <div class="header__sidenav--socials">
          <span class="header__sidenav--svg">
            <svg>
              <use xlink:href="~assets/svgs/sprite.svg#icon-twitter" />
            </svg>
          </span>
          <span class="header__sidenav--svg">
            <svg>
              <use xlink:href="~assets/svgs/sprite.svg#icon-dribbble" />
            </svg>
          </span>
          <span class="header__sidenav--svg">
            <svg>
              <use xlink:href="~assets/svgs/sprite.svg#icon-linkedin2" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      side_nav: false,
    };
  },
  methods: {
    go_home() {
      this.$router.push("/");
    },
    open_side_nav() {
      this.side_nav ? (this.side_nav = false) : (this.side_nav = true);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 4rem 6rem;
  z-index: 9;
  background: #000000;

  display: flex;
  align-items: center;

  &__socials {
    @include respond(tab-land) {
      display: none;
    }

    &--svg {
      display: inline-block;
      margin: 0 1rem;
      cursor: pointer;

      & svg {
        height: 1.5rem;
        width: 1.5rem;
        fill: #fff;
      }
    }
  }

  &__name {
    width: 15rem;
    margin: 0 auto;
    cursor: pointer;

    transform: translateX(-4rem);

    @include respond(tab-land) {
      transform: translateX(0);
    }
  }

  &__burger {
    position: absolute;
    right: 0;
    padding-right: 3rem;
    display: none;

    @include respond(tab-land) {
      display: block;
    }

    &--svg {
      display: inline-block;
      cursor: pointer;

      & svg {
        height: 3.8rem;
        width: 3.8rem;
        fill: #fff;
      }
    }
  }

  &__figure {
    width: 15rem;
    cursor: pointer;
  }

  &__sidenav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    z-index: 7;
    background: rgba($color: #000000, $alpha: 0.7);
    transform: translateX(100%);
    transition: $transition-secondary;

    &.opened {
      transform: translateX(0);
    }

    &--body {
      position: absolute;
      top: 0;
      right: 0;
      height: 100vh;
      width: 100vw;
      width: 75vw;
      height: 100%;
      background: #000000;
    }

    &--name {
      margin: 3rem;
    }

    &--socials {
      margin: 3rem;
      position: absolute;
      bottom: 2rem;
    }

    &--svg {
      display: inline-block;
      margin-right: 3.4rem;
      cursor: pointer;

      & svg {
        height: 3rem;
        width: 3rem;
        fill: #fff;
      }
    }
  }
}
</style>