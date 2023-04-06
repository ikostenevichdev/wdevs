<template>
  <HomeBanner />
  <About />
  <Technologies />
  <Projects />
  <WorkPolicy />
  <Pricing />
</template>

<script>
import HomeBanner from "@/components/HomeBanner.vue";
import About from "@/components/About.vue";
import Technologies from "@/components/Technologies.vue";
import Projects from "@/components/Projects.vue";
import WorkPolicy from "@/components/WorkPolicy.vue";
import Pricing from "@/components/Pricing.vue";

export default {
  components: {
    HomeBanner,
    About,
    Technologies,
    Projects,
    WorkPolicy,
    Pricing,
  },
};
</script>
