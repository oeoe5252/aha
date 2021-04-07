<template>
    <div class="modal-window">
        <div 
            class="modal-content-wrap"
            @click.self="modalClose">
            <div class="modal-content">
                <div 
                    class="modal-close"
                    @click="modalClose">
                    닫기
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    methods: {
        modalClose: function() {
            this.$emit('update:modalShow', false);
        }
    }
})
</script>

<style lang="scss" scoped>
    .modal-window {
        position: fixed;
        @include itemSize(100%, 100%);
        top:0;
        background: rgba(0,0,0,.5);
        z-index: 500;
    }
    .modal-content-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        .modal-content {
            position: relative;
            background-color: $white;
            z-index: 100;
        }
    }
    .modal-close {
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
        font-size: 30px;
    }
    .modal-thum {
        width: auto;
        max-width: 500px;
    }
</style>