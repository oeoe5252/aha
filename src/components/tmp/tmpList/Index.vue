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
            @input="test()"
            @click="$emit('click');"></tmp-list-basic>
        <tmp-list-gallery
            v-model="theItem"
            v-if="listType === 'gallery'"
            :items="items"
            @input="test()"
            @click="$emit('click');"></tmp-list-gallery>
        <tmp-list-webzine
            v-model="theItem"
            v-if="listType === 'webzine'"
            :items="items"
            @input="test()"
            @click="$emit('click');"></tmp-list-webzine>
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
        },
        items: {
            type: Array,
        }
    },
    methods: {
        test: function() {
            this.$emit('input', this.theItem);
        }
    }
}
</script>