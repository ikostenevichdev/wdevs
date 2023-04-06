<template>
  <section-layout
    name="projects"
    title="Featured Projects"
    id="featured-projects"
  >
    <ul id="projects_list" class="projects_list">
      <li
        class="projects_item"
        v-for="item in projects"
        :key="item.id"
        :id="item.id"
      >
        <div class="projects_content">
          <router-link
            :to="{ path: `/featured-projects/project/${item.id}` }"
          >
            <img
              v-webp:src="require('@/assets/portfolio/' + item.src + '.webp')"
              :src="require('@/assets/portfolio/' + item.src + '.jpg')"
              :alt="item.title"
              loading="lazy"
              width="1147"
              height="640"
            />
            <p class="projects_title">{{ item.title }}</p>
          </router-link>
        </div>
      </li>
    </ul>
  </section-layout>
</template>
<script>
import SectionLayout from "@/layouts/SectionLayout";

export default {
  components: {
    SectionLayout,
  },
  data() {
    return {
      projects: [
        {
          id: "touchpanel",
          title: "Touch Panel Control",
          src: "touchpanel",
        },
        {
          id: "siemens-spc-anywhere",
          title: "Siemens SPCanywhere",
          src: "siemens",
        },
        {
          id: "razzo",
          title: "Razzo is analytics tool for Magento to scale up the business",
          src: "razzo",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "include-media/dist/_include-media.scss";

.projects_list {
  @extend %listreset;
}
.projects_item {
  //   position: relative;
  &:not(:last-child) {
    margin: 0 0 45px;
  }
  @include media(">=tablet") {
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
  @include media(">=desktop") {
    &:not(:last-child) {
      margin-bottom: 80px;
    }
  }
  a {
    text-decoration: none;
  }
}
.projects_title {
  margin: 10px 0 0;
  font-size: 20px;
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
.projects_content {
  a,
  img {
    display: block;
  }
}
</style>
