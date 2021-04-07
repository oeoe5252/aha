<template>
    <!-- [TODO] 
    - selectListType :: 타입이 넘어가고, 해당 타입에 해당하는 컴포넌트 하나만 노출됨 v-if, 없는 타입이 넘어갈 경우 처리
    - 팝업 컴포넌트 스타일 나중에
    - FIXED: 팝업 띄울 전체 바닥-투명도 스타일 인자 넘기는거
    - ABS: 팝업 요소 WRAP()
    -->
    <div>
        <div>
            <button @click="selectListType('basic')">&#x1F610;기본형{{listType}}</button>
            <button @click="selectListType('gallery')">&#x1F610;갤러리형{{listType}}</button>
            <button @click="selectListType('webzine')">&#x1F610;웹진형{{listType}}</button>
        </div>

        <tmp-list
            v-model="theItem"
            :listType="listType"
            :items="items"
            @click="onCountUpViews"></tmp-list>

        <tmp-modal 
            v-if="itemModal"
            :modalShow.sync="itemModal">
        
            <img 
                class="modal-thum"
                :src="theItem.thum"
                :alt="theItem.title">
            <p>{{theItem.title}}</p>
            <p>{{theItem.desc}}</p>
            <p>{{theItem.writer}}</p>
            <p>{{theItem.views}}</p>
        </tmp-modal>
    </div>
</template>
<script>
import TmpList from "@/components/tmp/tmpList/Index"
import TmpModal from "@/components/tmp/tmpModal/TmpModal"

export default ({
    name: 'Hw5',
    components: { TmpList, TmpModal },
    data() {
        return {
            listType: 'webzine',
            theItem: {},
            items: [
                {
                    idx: '1',
                    title: '노래1 제목',
                    desc: '노래1 내용내용내용내용 내용내용 내용',
                    thum: require('@/assets/images/list/thum_1.jpg'),
                    writer: 'Anonymous',
                    views: 0,
                },
                {
                    idx: '2',
                    title: '노래2 제목',
                    desc: '노래2 내용내용내용내용 내용내용 내용',
                    thum: require('@/assets/images/list/thum_2.jpg'),
                    writer: 'Anonymous',
                    views: 0,
                },
                {
                    idx: '3',
                    title: '노래3 제목',
                    desc: '노래3 내용내용내용내용 내용내용 내용',
                    thum: require('@/assets/images/list/thum_3.jpg'),
                    writer: 'Anonymous',
                    views: 0,
                },
                {
                    idx: '4',
                    title: '노래4 제목',
                    desc: '노래4 내용내용내용내용 내용내용 내용',
                    thum: require('@/assets/images/list/thum_4.jpg'),
                    writer: 'Anonymous',
                    views: 0,
                },
                {
                    idx: '5',
                    title: '노래5 제목',
                    desc: '노래5 내용내용내용내용 내용내용 내용',
                    thum: require('@/assets/images/list/thum_5.jpg'),
                    writer: 'Anonymous',
                    views: 0,
                },
                {
                    idx: '6',
                    title: '노래6 제목',
                    desc: '노래6 내용내용내용내용 내용내용 내용',
                    thum: require('@/assets/images/list/thum_6.jpg'),
                    writer: 'Anonymous',
                    views: 0,
                }
            ],
            itemModal: false,
        }
    },
    methods: {
        selectListType: function(type) {
            localStorage.setItem('listType', type);
            this.listType = type;
        },
        modalOpen: function() {
            this.itemModal = true;
        },
        onCountUpViews: function() {
            if(this.theItem) {
                this.theItem.views++;
                this.modalOpen();
            }
        }
    },
    mounted() {
        this.listType = localStorage.getItem('listType');
    },
    destroyed() { }
})
</script>
<style lang="scss">

</style>
