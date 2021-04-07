<template>
    <div>
        <div 
            v-for="(item, idx) of items" :key="idx"
            class="item"
            @click="onClickItem(item)">
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
    name: 'TmpListBasic',
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