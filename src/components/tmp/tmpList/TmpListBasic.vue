<template>
    <div>
        <div 
            v-for="(item, idx) of items" :key="idx"
            class="item"
            @click="onItemClick(item)">
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
        onItemClick: function(item) {
            // [NOTE]
            // 부모 v-model 에 넣어질 value 값을 전달(v-model에 값을 넣는 작업은 v-model의 input이 수행, 나는 그냥 v-model에 들어갈 value에 들어가는 값이 뭔지 전달만 해주면 됨)
            // 데이터 전달해주는 것과, 클릭에 따른 이벤트를 분리시키기 위해 이벤트 두개 사용
            // 부모에서 click 이벤트가 있을 수도 있으니, 커스텀 이벤트명을 click으로 안해도 될듯 하다.
            this.$emit('input', item);
            this.$emit('item-click');
        }
    }
}
</script>