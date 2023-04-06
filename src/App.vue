<template>
    <Header v-if="!$route.meta.magentoHeader" />
    <MagentoHeader v-else />
    <main id="main">
        <router-view />
    </main>
    <Footer />
</template>

<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
    @import "@/scss/_variables.scss";
    @import "@/scss/_typography.scss";
    @import "include-media/dist/_include-media.scss";

    #main {
        padding-top: 60px;
    }

    .container {
        max-width: 1920px;
        padding: 0 16px;
        margin: 0 auto;
        @include media('>=tablet') {
            padding: 0 40px;
        }
        @include media('>=widescreen') {
            padding: 0 80px;
        }
    }

    .button {
        font-size: 14px;
        font-weight: 600;
        padding: 6px 14px;
        border: 2px solid $red;
        background: transparent;
        transition: all .3s;
        border-radius: 16px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        &:hover, &:focus {
            outline: none;
        }
        &.primary {
            background: $red;
            color: $white;
        }
        &.large {
            font-size: 16px;
            padding: 10px 24px;
            border-radius: 26px;
        }
        .icon {
            margin-left: 16px;
        }
        &.magento-btn {
            background: $orange;
            color: $white;
        }
    }

    // Lazy load styles
    .v-lazy-image {
        filter: blur(5px);
        transition: filter 1.6s;
        will-change: filter;
        &.v-lazy-image-loaded {
            filter: blur(0);
        }
    }
</style>
<script>
import Header from "@/components/Header.vue";
import MagentoHeader from "@/components/Magento/MagentoHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
    components: {
        Header,
        MagentoHeader,
        Footer
    },
};
</script>