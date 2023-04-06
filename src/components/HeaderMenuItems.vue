<template>
  <nav id="nav">
    <template v-for="item in menu" :key="item.name">
      <div :class="[item.children ? 'dropdown' : 'item_links']">
        <a
          :href="item.path"
          class="nav_link"
          :class="[item.children ? 'dropdown__header' : '']"
          >{{ item.name }}
          <span v-if="item.children" class="dropdown__icon">&dtrif;</span></a
        >
        <div v-if="item.children" class="dropdown__content">
          <div class="dropdown__content__links">
            <a
              v-for="child in item.children"
              :key="child.name"
              :href="child.path"
              class="dropdown__content__links__link"
              >{{ child.name }}</a
            >
          </div>
        </div>
      </div>
    </template>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["menu"]),
  },
};
</script>
<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}
#nav {
  @include media("<tablet-xl") {
    padding-top: 50px;
  }
  a.nav_link {
    @include media("<tablet-xl") {
      font-size: 25px;
      line-height: 3;
    }
  }
}

.dropdown {
  padding-top: 5px;
  @include media(">=tablet-xl") {
    position: relative;
    display: inline-block;
  }
  margin-right: 0px;
  font-size: 14px;
  font-weight: 600;
  color: $black;
  text-decoration: none;
  transition: all 0.3s;

  &__icon {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover {
    .dropdown {
      &__content {
        display: block;
      }
      &__icon {
        transform: rotate(180deg);
      }
    }
  }

  @include media(">=tablet-xl") {
    margin-right: 0px;
  }

  &__content {
    display: none;
    @include media(">=tablet-xl") {
      position: absolute;
      padding-top: 22px;
      z-index: 1;
      min-width: 310px;
    }
    background-color: transparent;
    margin-left: -15px;

    & a {
      padding: 10px 16px;
      display: block;
    }

    &__links {
      @include media(">=tablet-xl") {
        box-shadow: 0px 8px 16px 0px $boxShadow;
      }
      background-color: $white;
      padding: 10px 0;

      &:hover {
        .dropdown__content__links__link {
          opacity: 0.3;
          &:hover {
            opacity: 1;
            transition: all 0.3s ease;
          }
        }
      }

      &__link {
        color: $black;
        text-decoration: none;
        transition: all 0.3s ease;
        @include media("<tablet-xl") {
          font-size: 15px;
        }

        &:hover {
          opacity: 0;
          margin-left: 10px;
          transition: all 0.3s ease;
          color: $red;
        }
      }
    }
  }
}
</style>
