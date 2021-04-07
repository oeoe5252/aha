<template>
    <div>
        <!-- [TODO]
            - 없는 타입이 들어왔을때 처리
            - 데이터가 없을 때는? - 고려 안해봄
        -->
        <!-- 컴포넌트1: type1: basic: 기본타입 -->
        <!-- 컴포넌트2: type2: gallery: 갤러리타입 -->
        <!-- 컴포넌트3: type3: webzine: 웹진타입 -->
        <tmp-list-basic
            v-model="theItem"
            v-if="listType === 'basic'"
            :items="items"
            @input="tossTheItem()"
            @item-click="onItemClick()"></tmp-list-basic>
        <tmp-list-gallery
            v-model="theItem"
            v-if="listType === 'gallery'"
            :items="items"
            @input="tossTheItem()"
            @item-click="onItemClick()"></tmp-list-gallery>
        <tmp-list-webzine
            v-model="theItem"
            v-if="listType === 'webzine'"
            :items="items"
            @input="tossTheItem()"
            @item-click="onItemClick()"></tmp-list-webzine>
    </div>
</template>

<script>
import TmpListBasic from "@/components/tmp/tmpList/TmpListBasic"
import TmpListGallery from "@/components/tmp/tmpList/TmpListGallery"
import TmpListWebzine from "@/components/tmp/tmpList/TmpListWebzine"

export default {
    name: 'TmpList',
    components: { TmpListBasic, TmpListGallery, TmpListWebzine },
    data() {
        return {
            theItem: []
        }
    },
    props: {
        listType: {
            type: String,
            default: 'webzine',
            validator: function (type) {
                // 값이 항상 아래 세 개의 문자열 중 하나여야 합니다. 
                console.log("prop:listtype", type);
                return ['basic', 'gallery', 'webzine'].indexOf(type) !== -1
            }
        },
        items: {
            type: Array,
        }
    },
    methods: {
        // [NOTE]
        // 부모 v-model 에 넣어질 value 값을 전달(this.theItem엔 이미 자식에서 전달받은 value가 들어가있음, 그 값을 또 최종 부모의 v-model로 toss 하기 위해 emit전송, 나는 그냥 v-model에 들어갈 value에 들어가는 값이 뭔지 전달만 해주면 됨)
        tossTheItem: function() {
            this.$emit('input', this.theItem);
        },
        onItemClick: function() {
            this.$emit('item-click');
        }
    }
}
</script>