<template>
  <MagentoBanner />
  <MagentoAbout id="mg_about" />
  <MagentoWhy id="mg_why" />
  <MagentoServices id="mg_services" />
  <MagentoFeedback id="mg_feedback" />
  <MagentoProjects id="mg_projects" />
  <MagentoPrices id="mg_prices" />
</template>

<script>
import MagentoBanner from "@/components/Magento/MagentoBanner.vue";
import MagentoAbout from "@/components/Magento/MagentoAbout.vue";
import MagentoWhy from "@/components/Magento/MagentoWhy.vue";
import MagentoServices from "@/components/Magento/MagentoServices.vue";
import MagentoFeedback from "@/components/Magento/MagentoFeedback.vue";
import MagentoProjects from "@/components/Magento/MagentoProjects.vue";
import MagentoPrices from "@/components/Magento/MagentoPrices.vue";

export default {
  components: {
    MagentoBanner,
    MagentoAbout,
    MagentoWhy,
    MagentoServices,
    MagentoFeedback,
    MagentoProjects,
    MagentoPrices
  },
};
</script>
