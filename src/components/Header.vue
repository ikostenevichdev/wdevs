<template>
  <header id="header">
    <div class="container">
      <div class="header_content">
        <div class="header_left">
          <button class="burger-menu" @click="show = !show">
            <img
              v-svg-inline
              :data-src="require('@/assets/icons/burger-icon.svg')"
              alt="Collapse"
            />
          </button>
          <router-link to="/" class="logo">
            <img
              v-svg-inline
              :data-src="require('@/assets/icons/logo-web.svg')"
              alt="Wdevs"
            />
          </router-link>
          <router-link to="/magento" class="secondary button magento-solutions"
            >Magento Solutions</router-link
          >
        </div>
        <div class="header_right">
          <HeaderMenuItems />
          <ContactsButton type="true">Start a Project</ContactsButton>
        </div>
      </div>
      <transition name="burger">
        <ModalHumburgerMenu v-if="show" @close="show = false" />
      </transition>
    </div>
  </header>
</template>
<script>
import HeaderMenuItems from "./HeaderMenuItems.vue";
import ModalHumburgerMenu from "./ModalHumburgerMenu.vue";
import ContactsButton from "./ContactsButton.vue";

export default {
  data() {
    return {
      show: false,
    };
  },
  components: {
    HeaderMenuItems,
    ModalHumburgerMenu,
    ContactsButton,
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.burger-enter-from,
.burger-leave-to {
  opacity: 0;
}
.burger-enter-to,
.burger-leave-from {
  opacity: 1;
}
.burger-enter-active,
.burger-leave-active {
  transition: all 0.3s ease;
}

#header {
  border-bottom: 1px solid rgba($black, 0.06);
  background: $white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.header_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
}

.header_left {
  display: flex;
  align-items: center;
  margin-right: 40px;

  .logo {
    @include media(">=tablet") {
      margin-right: 40px;
    }
  }

  .burger-menu {
    padding: 0;
    margin: 0;
    outline: none;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    margin-right: 20px;

    @include media(">=tablet-xl") {
      display: none;
    }
  }
  .magento-solutions {
    display: none;
    margin: 0;

    @include media(">=tablet") {
      display: inline-flex;
      text-decoration: none;
      color: $black;

      &:hover {
        background: $red;
        color: $white;
      }
    }
  }
}
.header_right {
  display: flex;
  align-items: center;

  #nav {
    display: none;
    &:hover {
      .nav_link {
        opacity: 0.3;
      }
    }

    @include media(">=tablet-xl") {
      display: flex;
      align-items: center;
    }

    .nav_link {
      @include media("<tablet") {
        font-size: 20px;
      }
      margin-right: 20px;
      font-size: 14px;
      font-weight: 600;
      color: $black;
      text-decoration: none;
      transition: all 0.3s ease;

      @include media(">=tablet-xl") {
        margin-right: 40px;
      }

      &:hover {
        color: $red;
        opacity: 1;
      }
    }
  }
}
</style>
