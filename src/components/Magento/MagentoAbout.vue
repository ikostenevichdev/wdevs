<template>
  <section-layout name="about" title="About" class="magento__about">
    <div class="column">
      <p>
        Nowadays, more and more businesses migrate online. The pandemic time
        made a considerable punch to force offline shops to work on their online
        presence. It's really reasonable to redirect investment flow from the
        arrangement of the offline store to the online presence. After all, the
        investment will be compensated soon because covering an incomparably
        larger audience, the online store support requires fewer expenses than
        offline infrastructure does.
      </p>
    </div>
    <div class="column">
      <p>
        Building an e-commerce platform from scratch is not an option because
        it's a quitу time-consuming and expensive deal and there are so many
        nuanced should be considered to create a worthy e-shop: CMS (for the
        content, product, and categories); stock and inventory management;
        payments; shipping; bundles; discounts; promotions; clients management;
        multistore; multicurrency; multilanguage support etc... etc... etc...
      </p>
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
@import "../../scss/variables";
@import "include-media/dist/_include-media.scss";
.magento__about {
  padding-top: 80px;
  .title {
    &:before {
      background: $orange;
    }
  }
}
.column {
  @include media(">=desktop") {
    width: calc(50% - 40px);
    &:first-child {
      margin-right: 80px;
    }
  }
  a {
    color: $orange;
  }
  p {
    margin-bottom: 32px;
  }
  .button {
    margin-top: 8px;
  }
}
</style>
