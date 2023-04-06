<template>
  <section-layout :name="name" :title="title">
    <p>{{ blockText }}</p>
    <div class="portfolio__items">
      <div
        v-for="item in project"
        class="portfolio__item"
        :key="item.id"
        :id="item.id"
      >
        <router-link :to="{ path: `/portfolio/project/${item.id}` }">
          <div class="portfolio__item-img">
            <img
              v-webp:src="require('@/assets/portfolio/' + item.src + '.webp')"
              :src="require('@/assets/portfolio/' + item.src + '.jpg')"
              :alt="item.title"
              loading="lazy"
              width="744"
              height="415"
            />
          </div>
          <p class="portfolio__item-title">{{ item.title }}</p>
        </router-link>
      </div>
    </div>
  </section-layout>
</template>

<script>
import SectionLayout from "../layouts/SectionLayout.vue";

export default {
  components: {
    SectionLayout,
  },
  data() {
    return {};
  },
  props: ["name", "title", "blockText", "project"],
};
</script>
