<template>
    <div>
        <div 
            v-for="(item, idx) of items" :key="idx"
            class="item"
            @click="onClickItem(item)">
            <div class="img-area">
                <img class="thum" :src="item.thum" :alt="item.title">
            </div>
            <div class="txt-area">
                <h6 class="tit">{{item.title}}</h6>
                <p class="desc">{{item.desc}}</p>
                <div class="sub-info">
                    <span>{{item.writer}}</span>
                </div>
                <div class="util-box">
                    <span>{{item.views}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TmpListWebzine',
    component: {},
    props: {
        items: {
            type: Array,
        }
    },
    methods: {
        onClickItem: function(item) {
            this.$emit('input', item);
            this.$emit('click');
        }
    }
}
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
        
        .img-area {
            max-width: 100px;
            margin-right: 10px;
            img {
                width: 100%;
            }
        }
        .txt-area {
            padding: 10px 0;
            .tit {
                font-size: 1.6rem;
                margin-bottom: 10px;
            }
        }
    }
</style>