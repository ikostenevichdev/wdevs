<template>
<header id="header">
    <div class="container">
        <div class="header_content">
            <div class="header_left">
                <button class="burger-menu">
                    <img v-svg-inline :data-src="require('@/assets/icons/burger-icon.svg')" alt="Collapse">
                </button>
                <router-link to="/" class="logo">
                    <img v-svg-inline :data-src="require('@/assets/icons/logo-magento.svg')" alt="Wdevs" />
                </router-link>
                <router-link to="/" class="secondary button go-web-mobile">Go to Web & Mobile</router-link>
            </div>
            <div class="header_right header_right--magento">
                <nav id="nav">
                    <router-link class="nav_link" to="/magento/#mg_about" >About</router-link>
                    <router-link class="nav_link" to="/magento/#mg_why">Why Magento</router-link>
                    <router-link class="nav_link" to="/magento/#mg_services">Services</router-link>
                    <router-link class="nav_link" to="/magento/#mg_feedback">Feedback</router-link>
                    <router-link class="nav_link" to="/magento/#mg_projects">Projects</router-link>
                    <router-link class="nav_link" to="/magento/#mg_prices">Prices</router-link>
                </nav>
                <button class="magento-btn button" @click="showModal = true">Start a Project</button>
                <ModalContact   v-if="showModal"
                  @close="showModal = false"
                  :magento="true"
                  :startProjectModal="true">
                  <h2>Start a Project</h2>
                </ModalContact >
            </div>
        </div>
    </div>
</header>
</template>
<script>
import ModalContact from "../ModalContact.vue"

export default{
    components:{
      ModalContact
    },
    data(){
      return{
          showModal:false,
      }
  }
}
</script>


<style lang="scss">
@import "../../scss/variables";
@import "include-media/dist/_include-media.scss";

.header_left {
    .go-web-mobile {
        display: none;
        @include media('>=tablet') {
            display: inline-flex;
            text-decoration: none;
            color: $black;
            border-color: $orange;
            &:hover {
                background: $orange;
                color: $white;
            }
        }
    }
}
.header_right--magento {
    #nav {
        .nav_link {
            margin-right: 20px;
            @include media('>=desktop') {
                margin-right: 40px;
            }
            &:hover {
                color: $orange;
                opacity: 1;
            }
        }
    }
}
</style>
