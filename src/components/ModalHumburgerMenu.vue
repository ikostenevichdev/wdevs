<template>
  <div class="burger-mask">
    <div class="burger-wrapper">
      <div class="burger">
        <button class="burger-close" @click="$emit('close')" aria-label="Close">
          <img
            v-svg-inline
            :data-src="require('@/assets/icons/close-modal.svg')"
            alt=""
          />
        </button>

        <div class="burger-content">
          <HeaderMenuItems />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderMenuItems from "./HeaderMenuItems.vue";

export default {
  components: {
    HeaderMenuItems,
  },
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";
.burger-mask {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $boxShadow;
}

.burger {
  background: $white;
  border-radius: 16px;
  padding: 40px 0 40px 20px;
  width: 60vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  @include media(">=tablet") {
    width: 45vw;
  }
  &-content {
    overflow-y: auto;
    height: 100%;
    padding-right: 30px;
    #nav:hover {
      .nav_link {
        opacity: 0.3;
      }
      .nav_link:hover {
        color: $red;
        opacity: 1;
      }
    }

    .nav_link {
      margin-right: 20px;
      font-size: 14px;
      font-weight: 600;
      color: $black;
      text-decoration: none;
      transition: all 0.3s;
      text-transform: uppercase;

      @include media(">=tablet-xl") {
        margin-right: 40px;
        text-transform: none;
      }
    }
  }
  &-close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2px;
    right: 2px;
    width: 48px;
    height: 48px;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    @include media(">=tablet") {
      top: 24px;
      right: 24px;
    }
  }
}
</style>
