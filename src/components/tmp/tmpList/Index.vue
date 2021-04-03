<template>
    <div>
        <!-- 컴포넌트1: type1: basic: 기본타입 -->
        <!-- 컴포넌트2: type2: gallery: 갤러리타입 -->
        <!-- 컴포넌트3: type3: webzine: 웹진타입 -->
        <tmp-list-basic
            v-if="listType === 'basic'"
            :items="items"></tmp-list-basic>
        <tmp-list-gallery
            v-if="listType === 'gallery'"
            :items="items"></tmp-list-gallery>
        <tmp-list-webzine
            v-if="listType === 'webzine'"
            :items="items"></tmp-list-webzine>
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
    // 부모에게서 전달받은 데이터를 해당 컴포넌트에서 그저 넘겨주는게 아니라, 조건, 반복등에 활용할 변수지정.
    props: {
        listType: {
            type: String,
            default: 'basic',
        },
    }
}
</script>