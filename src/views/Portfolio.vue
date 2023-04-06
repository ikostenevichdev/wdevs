<template>
  <PortfolioHome />
  <PortfolioProjectsBlock
    name="portfolio__list"
    title="Hi-Tech and innovation projects"
    blockText="We've developed hundreds of web and mobile projects,  some are run-of-the-mill sites and it's not reasonable to even list them here. However, some projects were revolutionary and helped our clients to reach entirely new levels. Many of the startups listed above began with nothing but a client’s great idea coupled with our developers’ substantially knowledgeable time, and grew into amazing MVPs which were purchased outright or attracted numerous noteworthy investments. Other examples are just really great projects that we are proud to demonstrate."
    :project="hitech_projects"
  />

  <PortfolioProjectsBlock
    name="portfolio__list"
    title="Mobile projects and apps"
    blockText="We stepped into mobile development a year after IOS was presented to the market, and Android development 2 months after G1 (the first Android phone) was first introduced.  There were initially many tries  and minor applications which led to significant user apps that helped influence the nature of  mobile presence.  After that, we  switched to cross-platform development and began to work on  developing a series of mobile games. There have been so many projects, but some of the most interesting mobile apps we have developed so far/to date, are collectively found here."
    :project="mob_projects"
  />

  <PortfolioProjectsBlock
    name="portfolio__list"
    title="Some other projects"
    blockText="It would not be reasonable to illuminate common websites and landing pages that we've developed during the  years,  therefore you will only find projects in this section which display twists, complexities and unique  features. Some of these projects don't necessarily exist anymore , but considering the years of work that went into many of these projects, they also deserve to be mentioned in this  portfolio."
    :project="other_projects"
  />

  <section-layout
    class="to-magento-site"
    name="portfolio__list portfolio__list-magento"
    title="Magento projects"
  >
    <p>
      We began our Magento department in 2014 due to being a custom development
      partner in collaboration with AheadWorks.com. The clients would apply to
      Aheadworks with their extensions customization requests, and all such
      requests were directly forwarded to us and therefore many of these clients
      eventually became our primary clients. We then began working with a few
      other Magento extension vendors and soon became some of their development
      partners too - with some of them; as their in-house team, we operate under
      white-label and strict NDA clauses. Eventually, the constant flow of
      Magento clients forced us to be more focused on Magento development and to
      set up an independent company with Magento as its primary focus.We have a
      wide scope of Magento experience, and we provide the ultimate service when
      we tackle all types of Magento development:
    </p>
    <ul>
      <li>Magento sites setup, tuning and support</li>
      <li>Magento performance and security tuning</li>
      <li>Custom development for Magento</li>
      <li>Migration from/to other e-commerce platforms</li>
      <li>
        3rd party services integrations (payments, shipping, sync/async ERPs
        integration (Merlin, NetSuite, Salesforce, MS Dynamics 365 etc)
      </li>
    </ul>
    <p>
      Find out more about our Magento experience at our
      <a href="/magento"> Magento web site</a>.
    </p>
  </section-layout>
</template>

<script>
import PortfolioHome from "@/components/PortfolioHome.vue";
import PortfolioProjectsBlock from "@/components/PortfolioProjectsBlock.vue";

import SectionLayout from "@/layouts/SectionLayout";
import { mapState } from "vuex";

export default {
  components: {
    PortfolioHome,
    SectionLayout,
    PortfolioProjectsBlock,
  },
  computed: {
    ...mapState(["hitech_projects", "mob_projects", "other_projects"]),
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";
a {
  text-decoration: none;
}

body.body-overflow {
  overflow-y: hidden;
}

.portfolio__list {
  padding-bottom: 0;

  .title {
    max-width: 370px;
  }

  .section_content {
    flex-wrap: wrap;
  }
}

.portfolio__list-magento {
  ul {
    margin: -15px 0 30px;
    li {
      margin-bottom: 5px;
    }
  }

  a {
    color: $orange;
  }
}

.portfolio__items {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.portfolio__item {
  width: 100%;
  margin-top: 40px;
  cursor: pointer;

  @include media(">=tablet-xl") {
    width: calc(50% - 30px);
  }

  @include media(">=desktop") {
    width: calc(50% - 30px);
    margin-top: 60px;
  }

  @include media(">=widescreen") {
    width: calc(50% - 40px);
    margin-top: 80px;
  }

  &-img {
    background: $beige;
    position: relative;
    padding-top: 56.25%;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-title {
    margin: 10px 0 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 160%;
    color: $base-text-color;

    @include media(">=desktop") {
      margin: 10px 0 0;
      font-size: 22px;
    }

    @include media(">=widescreen") {
      margin: 20px 0 0;
      font-size: 24px;
    }
  }
}
.to-magento-site {
  a {
    color: $red;
    &:hover {
      text-decoration: underline;
    }
  }
  p:last-child{
    margin-bottom:0 ;
  }
}
</style>
