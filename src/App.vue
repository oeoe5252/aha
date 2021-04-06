<template>
  <div id="app">
    <!-- [TODO] router-link로 이동하면 뜨는데, 직접 페이지 치면 안나오는 이슈: 블로그 본 거 같은데 다시 카톡 뒤지기 -->
    <div id="sample-nav">
      <!-- router-link 가 어디에 있든, router-view로 매핑됨 -->
      <router-link to="/" style="margin: 10px; font-size; 16px; font-family: Monsterate; color: #ccc;">Main</router-link>
      <router-link to="/styleGuide" style="margin: 10px; font-size; 16px; font-family: Monsterate; color: #ccc;">StyleGuide</router-link>
    </div>
    <router-view/>
    <!-- 유니코드 선언 : &#x+유니코드문자+; -->

    <!-- 여기 아래는 라우터 링크랑 연관 없이 그냥 계속 보여지는 아. -->
    <div>
      <button @click="selectListType('basic')">&#x1F610;기본형{{listType}}</button>
      <button @click="selectListType('gallery')">&#x1F610;갤러리형{{listType}}</button>
      <button @click="selectListType('webzine')">&#x1F610;웹진형{{listType}}</button>
    </div>

    <!-- 타입이 넘어가고, 해당 타입에 해당하는 컴포넌트 하나만 노출됨 v-if -->
    <tmp-list
      v-model="theItem"
      :listType="listType"
      :items="items"
      @click="onCountUpViews"></tmp-list>

    <!-- [TODO] 팝업 컴포넌트 스타일 나중에
      - FIXED: 팝업 띄울 전체 바닥-투명도 스타일 인자 넘기는거
      - ABS: 팝업 요소 WRAP()
    -->
    
    <!-- [NOTE] 자식에서 부모 값 변경할거 전달하긔
      - 자식 컴포넌트에서 title prop를 업데이트 하려고 할 때,
      - this.$emit('update:title', newTitle) // prop title을 new값으로 업데이트 이벤 긔긔
      - 자식의 emilt을 받은 부모는
      v-bind:title="doc.title" // 그 부모 data 값을 prop값으로 변경쓰!
      v-on:update:title="doc.title = $event" // title 업데이트 하는뎁, 자식에서 받은 이벤값을 부모 data 값에 넣는당
      일케 동작함 (emit 이벤트로 받은 값($evnet)를 부모의 data에 저장하고, 부모의 prop 에 저장한 data를 넣어쥰다)
      - 위의 코드를 한줄로 표헌하면
      - v-bind:title.sync="doc.title" 일케 된다.
  -->

    <tmp-modal 
      v-if="itemModal"
      :modalShow.sync="itemModal">
      
      <img class="modal-thum" :src="theItem.thum" :alt="theItem.title">
      <p>{{theItem.title}}</p>
      <p>{{theItem.desc}}</p>
      <p>{{theItem.writer}}</p>
      <p>{{theItem.views}}</p>
    </tmp-modal>

  </div>
</template>

<script>
// @ is an alias to /src
import TmpList from "@/components/tmp/tmpList/Index"
import TmpModal from "@/components/tmp/tmpModal/TmpModal"

export default {
  name: 'Index',
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
    // 로컬스토리지 저장
    // 리스트 컴포넌트 타입 선택
    selectListType: function(type) {
      localStorage.setItem('listType', type);
      // this.listType = localStorage.getItem('listType');
      this.listType = type;
      // this.saveLocal();
    },
    modalOpen: function() {
      this.itemModal = true;
    },
    onCountUpViews: function() {
      if(this.theItem) {
        let tmpIdx = this.items.findIndex(item => item.idx == this.theItem.idx);
        this.items[tmpIdx].views++;
        
        this.modalOpen();
      }
    }
  },
  mounted() {
    this.listType = localStorage.getItem('listType');
    console.log('local-listType', this.listType);
  }
}
</script>

<style lang="scss">
#sample-nav {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 500;
  .router-link-active {
    // <router-link>는 현재 라우트와 일치할 때 자동으로 .router-link-active 클래스가 추가됩니다.
    background-color: red;
  }
}

</style>
