<template>
    <div>
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
    // vue 개발자 도구에 노출되는 요소명
    name: 'TmpList',
    components: { TmpListBasic, TmpListGallery, TmpListWebzine },
    data() {
        return {
            theItem: []
        }
    },
    // 부모에게서 전달받은 데이터를 해당 컴포넌트에서 그저 넘겨주는게 아니라, 조건, 반복등에 활용할 변수지정.
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
            // props로 인식(및 추출)되지 않는 부모 범위 속성 바인딩입니다. 컴포넌트에 선언된 props가 없을 때 class와 style을 제외하고 모든 부모 범위 바인딩을 기본적으로 포함하며 v-bind="$attrs"를 통해 내부 컴포넌트로 전달할 수 있습니다 - 하이 오더 컴포넌트(HOC)를 작성할 때 유용합니다. (https://kr.vuejs.org/v2/api/index.html#vm-attrs)
            // input 이벤트는 value에 데이터를 주니깐, 
            // console.log("인자 value", value);
            console.log("인자 this.value", this.theItem);
            // console.log('input 발생', this.$attrs);
            
            this.$emit('input', this.theItem);
        }
    }
}
</script>