<template>
  <button
    class="button primary"
    :class="size"
    id="show-modal"
    @click="showModal = true"
  >
    <slot>
      Get in touch
      <span class="icon"
        ><img
          v-svg-inline
          :data-src="require('@/assets/icons/rarr-icon.svg')"
          alt=""
      /></span>
    </slot>
  </button>
  <ModalContact
    v-if="showModal"
    @close="showModal = false"
    :startProjectModal="startProject"
    :moreTextGetInTouch="description"
    ><h2 v-if="type">Start a Project</h2></ModalContact
  >
</template>
<script>
import ModalContact from "./ModalContact.vue";

export default {
  components: { ModalContact },
  data() {
    return {
      showModal: false,
      startProject: this.type,
      description: this.desc,
    };
  },
  props: ["size", "type",'desc'],
};
</script>
