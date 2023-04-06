<template>
  <section-layout name="why-magento" mode="dark" title="Why Magento">
    <p class="why-magento__intro">
      It doesn't make sense to invent something that already exists - there are
      many open-source e-commerce platforms available. But which one to choose?
      There are so many great platforms available. For us, the decision is
      obvious - it's Magento. Why? Let’s look at this in detail:
    </p>

    <div class="column">
      <div class="why-magento_item">
        <h3 class="why-magento_title">Expertise</h3>
        <div class="why-magento_content">
          <p>
            Probably the reason number one is that we are Magento experts, we
            have a strong Magento team with phenomenal experience proven over
            the years of our <a href="" target="_blank">Magento journey</a>.
          </p>
        </div>
      </div>
      <div class="why-magento_item">
        <h3 class="why-magento_title">Reliability</h3>
        <div class="why-magento_content">
          <p>
            There is no perfection, and some platforms may look better than
            Magento at first glance. But Magento is a veteran on the e-commerce
            platforms market. It has existed since 2008 (~ as we are). So once
            for the years on the market, it confirms that Magento is reliable
            and proven. Moreover there are so many 3rd party extensions and
            themes, so you have unlimited customizations abilities almost
            effortless.
          </p>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="why-magento_item">
        <h3 class="why-magento_title">Competitiveness</h3>
        <div class="why-magento_content">
          <p>
            Magento has its own pros and cons. There are so many competitors.
            Some are really valuable, but if to take a deeper look:
          </p>
          <ul>
            <li>
              Shopify is perfect, quick, and reliable. If you are happy with
              what Shopify provides out of the box - it's a great choice.
              However, it's very limited in customization and it's hard to turn
              it to satisfy your needs
            </li>
            <li>
              BigCommerce is the next great competitor, however, it's still
              limited in customization as well and there is no free version.
            </li>
            <li>
              Prestashop is great for small shops, though we wouldn't recommend
              considering it for multi-stores and for something more serious
              than just selling simple products online
            </li>
            <li>
              Drupal, Joomla, Woocommerce... they are great e-commerce
              platforms, though we'd considered them rather as CMS but not as
              full-fledged e-commerce platforms.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section-layout>
</template>
<script>
import SectionLayout from "@/layouts/SectionLayout";
export default {
  components: {
    SectionLayout,
  },
};
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.why-magento {
  .title {
    &:before {
      background: $orange;
    }
  }
  .section_content {
    flex-wrap: wrap;
  }
}
.why-magento__intro {
  width: 100%;
  margin-bottom: 0;
}

.why-magento_item {
  border-top: 1px solid $white;
  margin-top: 40px;
  @include media(">=tablet") {
    margin-top: 80px;
  }
}
.why-magento_title {
  margin: 40px 0 20px;
  @include media(">=tablet") {
    margin: 40px 0 20px;
  }
}
.why-magento_content {
  p {
    margin-bottom: 20px;
    @include media(">=tablet") {
      margin-bottom: 32px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    color: $orange;
  }
  ul {
    @extend %listreset;
    padding-left: 30px;
    list-style: disc;
  }
  li {
    margin-bottom: 20px;
    @include media(">=tablet") {
      margin-bottom: 32px;
    }
  }
}
</style>
