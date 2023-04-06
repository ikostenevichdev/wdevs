<template>
    <div class="portfolio__item" @click="showModal">
        <div class="portfolio__item-img">
            <img v-webp:src="require('@/assets/portfolio/' + src + '.webp')"
                 :src="require('@/assets/portfolio/' + src + '.jpg')"
                 :alt="title" loading="lazy" width="744" height="415">
        </div>
        <p class="portfolio__item-title">{{title}}</p>
    </div>
    <transition name="modal">
        <div v-if="show" class="modal-mask" @click.self="closeModal">
            <div class="modal">
                <button class="modal-close" @click="closeModal" aria-label="Close">
                    <img v-svg-inline :data-src="require('@/assets/icons/close-modal.svg')" alt="">
                </button>
                <div class="modal-content">
                    <slot name="modal-content"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'ProjectLayout',
        props: {
            title: String,
            src: String,
        },
        data() {
            return {
                show: false,
            }
        },
        mounted() {
            window.addEventListener('keydown', this.escCloseModal);
        },
        destroy() {
            window.removeEventListener('keydown', this.escCloseModal);
        },
        methods: {
            showModal: function () {
                this.show = true;
                document.body.classList.add('body-overflow');
            },
            closeModal: function () {
                this.show = false;
                document.body.classList.remove('body-overflow');
            },
            escCloseModal(e) {
                if (this.show && e.key === 'Escape') {
                    this.closeModal();
                }
            },
        }
    }
</script>

<style lang="scss">
    @import "../scss/_variables.scss";
    @import "include-media/dist/_include-media.scss";

    /**modal**/
    .modal-enter-active,
    .modal-leave-active {
        transition: opacity 0.4s
    }
    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
    }
    .modal-mask {
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .modal {
        background: $white;
        border-radius: 16px;
        padding: 40px 0 40px 20px;
        width: 100%;
        max-width: 96%;
        height: 90vh;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @include media('>=tablet') {
            padding: 70px 0 40px 40px;
        }
        @include media('>=tablet-xl') {
            max-width: 840px;
            height: 90vh;
        }
        &-content {
            overflow-y: auto;
            height: 100%;
            padding-right: 30px;
            &::-webkit-scrollbar {
                width: 10px;
            }
            &::-webkit-scrollbar-track {
                background: $grey;
            }
            &::-webkit-scrollbar-thumb {
                background: $red;
            }
        }
        &-close {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 2px;
            right: 2px;
            width: 48px;
            height: 48px;
            cursor: pointer;
            border:none;
            background: none;
            padding: 0;
            @include media('>=tablet') {
                top: 24px;
                right: 24px;
            }
        }
        &-title {
            color: $base-text-color;
            font-size: 30px;
            line-height: 120%;
            margin: 0 0 10px;
            @include media('>=tablet') {
                font-size: 40px;
            }
        }
        &-link {
            font-size: 16px;
            color: $red;
            text-decoration: none;
            @include media('>=tablet') {
                font-size: 20px;
            }
        }
        &-img {
            background: $beige;
            margin: 20px 0;
            position: relative;
            padding-top: 56.25%;
            @include media('>=tablet') {
                margin:40px 0;
            }
            img {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &-desc {
            font-size: 14px;
            line-height: 150%;
            color: $grey;
            margin-bottom: 20px;
            @include media('>=tablet') {
                margin-bottom:40px;
                font-size: 16px;
            }
            p {
                margin: 0;
            }
        }
        &-text {
            color: $base-text-color;
            font-size: 16px;
            line-height: 160%;
            margin-bottom: 40px;
            &:last-child {
                margin-bottom: 0;
            }
            @include media('>=tablet') {
                font-size: 20px;
                margin-bottom: 80px;
            }
            p {
                margin: 0 0 30px;
            }
        }
    }
</style>
