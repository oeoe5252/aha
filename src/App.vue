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

    <tmp-list
      v-model="theItem"
      :listType="listType"
      :items="items"></tmp-list>
  </div>
</template>

<script>
// @ is an alias to /src
import TmpList from "@/components/tmp/tmpList/Index"

export default {
  name: 'Index',
  components: { TmpList },
  data() {
    return {
      listType: 'basic',
      theItem: {},
      items: [
        {
          idx: '1',
          title: '노래1 제목',
          desc: '노래1 내용내용내용내용 내용내용 내용',
          thum: require('@/assets/images/list/thum_1.jpg'),
          writer: 'Anonymous',
          views: 0,
          rank: '1',
        },
        {
          idx: '2',
          title: '노래2 제목',
          desc: '노래2 내용내용내용내용 내용내용 내용',
          thum: require('@/assets/images/list/thum_2.jpg'),
          writer: 'Anonymous',
          views: 0,
          rank: '2',
        },
        {
          idx: '3',
          title: '노래3 제목',
          desc: '노래3 내용내용내용내용 내용내용 내용',
          thum: require('@/assets/images/list/thum_3.jpg'),
          writer: 'Anonymous',
          views: 0,
          rank: '3',
        },
        {
          idx: '4',
          title: '노래4 제목',
          desc: '노래4 내용내용내용내용 내용내용 내용',
          thum: require('@/assets/images/list/thum_4.jpg'),
          writer: 'Anonymous',
          views: 0,
          rank: '4',
        },
        {
          idx: '5',
          title: '노래5 제목',
          desc: '노래5 내용내용내용내용 내용내용 내용',
          thum: require('@/assets/images/list/thum_5.jpg'),
          writer: 'Anonymous',
          views: 0,
          rank: '5',
        },
        {
          idx: '6',
          title: '노래6 제목',
          desc: '노래6 내용내용내용내용 내용내용 내용',
          thum: require('@/assets/images/list/thum_6.jpg'),
          writer: 'Anonymous',
          views: 0,
          rank: '6',
        }
      ]
    }
  },
  methods: {
    // 리스트 컴포넌트 타입 선택
    selectListType: function(type) {
      this.listType = type;
    }
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
