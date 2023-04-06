<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal">
          <button
            class="modal-close"
            @click="$emit('close')"
            aria-label="Close"
          >
            <img
              v-svg-inline
              :data-src="require('@/assets/icons/close-modal.svg')"
              alt=""
            />
          </button>
          <div class="modal-content">
            <div class="modal-title">
                <h2 v-if="!startProjectModal">Get In Touch</h2>
                <h2 v-else>Start a project</h2>
                <div class="modal-title__text"
                v-if="moreTextGetInTouch" v-html="moreTextGetInTouch">
                </div>
            </div>
            <SrartProjectForm v-if="startProjectModal" :magento="magentoPage" />
            <GetInTouchForm v-else :description="description" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import SrartProjectForm from "./Form/StartProjectForm.vue";
import GetInTouchForm from "./Form/GetInTouchForm.vue";
export default {
  name: "ModalGetInTouch",
  data(){
    return{
      description:this.moreTextGetInTouch,
      magentoPage:this.magento
    }
  },
  components: {
    SrartProjectForm,
    GetInTouchForm,
  },
  props: ["startProjectModal","moreTextGetInTouch","magento"],
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
@import "include-media/dist/_include-media.scss";
.modal-mask {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $mask;
}
.modal {
  opacity: 1;
  background: $white;
  border-radius: 16px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 350px;
  max-height: 580px;
  padding: 50px 21px 21px;
  transform: translate(-50%, -50%);
  @include media(">=tablet") {
    padding: 50px 40px 40px;
    width: 480px;
    max-height: calc(100vh - 20px);
  }
  @include media(">=desktop") {
    padding: 50px 45px 45px;
    width: 576px;
    max-height: calc(100vh - 20px);
  }
    @include media(">=widescreen") {
    padding: 72px 48px 48px;
    width: 576px;
  }
  &-close {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 18px;
    right: 18px;
    width: 16px;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
     @include media(">=tablet") {
      top: 18px;
      right: 18px;
    }
     @include media(">=desktop") {
      top: 36px;
      right: 36px;
    }
  }
  &-title {
    color: $base-text-color;
    margin-bottom: 5px;
     @include media(">=tablet"){
      margin-bottom: 20px;
    }
    @include media(">=widescreen"){
      margin-bottom: 40px;
    }
    h2 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom:4px;
      @include media(">=tablet"){
        font-size: 25px;
        margin-bottom:10px;
    }
      @include media(">=desktop"){
        font-size: 30px;
    }
      @include media(">=widescreen"){
        font-size: 40px;
        margin-bottom:16px;
      }
    }
    &__text {
      margin: 0 !important;
      font-size: 14px;
      line-height: 16px;
      @include media(">=tablet") {
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
      }
      @include media(">=desktop") {
        font-weight: 400;
        font-size: 18px;
      }
      @include media(">=widescreen") {
        font-size: 20px;
        line-height: 32px;
      }
    }
  }
}
</style>
