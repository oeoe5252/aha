<template>
    <div>
        <div 
            v-for="(item, idx) of items" :key="idx"
            class="item"
            @click="onClickItem(item)">
            <div class="img-area">
                <img class="thum" :src="item.thum" :alt="item.title">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TmpListGallery',
    props: {
        items: {
            type: Array,
        }
    },
    methods: {
        onClickItem: function(item) {
            this.$emit('input', item);
            this.$emit('item-click');
        }
    }
}
</script>
<style lang="scss" scoped>
    .item {
        display: flex;
        
        .img-area {
            max-width: 30%;
            margin-right: 10px;
            img {
                width: 100%;
            }
        }
    }
    
</style>