<template>
  <guide-layout>
      <guide-title>Test</guide-title>
  <!-- [TODO] 
    - 셀렉트: 기본 select, 커스텀 select
    - 에러에 따른 스타일 효과 작업하기(추후)
    - 필요없는 props 지우기, 그리고 정리
    - 체크 기본 설정 옵션 아직 작업 안함(?)
    - 에러컴포넌트 컴포넌트화 하기(그룹 요소 err), css도 같이 이동(중복 생각하기)
    - 세미콜론 통일
    - 테스트 콘솔 지우기
  -->
      <guide-sub-title class="line-hide">
        input
        <guide-sub-desc>text</guide-sub-desc>
      </guide-sub-title>

      <input-text
        v-model="guideRequest.text"
        :rules="rules.text"
        id="g-text1"
        name="g-text1"
        inputType="text"
        styleType="type1"
        className="mt15" 
        placeholder="텍스트를 입력해주세요">텍스트 {{guideRequest.text}}</input-text>

      <guide-sub-title class="mt15">
        input
        <guide-sub-desc>email</guide-sub-desc>
      </guide-sub-title>

      <input-text
        v-model="guideRequest.email"
        :rules="rules.email"
        id="g-mail"
        name="g-mail"
        inputType="text"
        styleType="type1"
        className="mt15" 
        placeholder="test@dot.com">이메일 {{guideRequest.email}}</input-text>

      <guide-sub-title class="mt15">textarea</guide-sub-title>
      <input-textarea
        v-model="guideRequest.textarea"
        :rules="rules.textarea"
        id="g-txtarea"
        name="g-txtarea"
        inputType="textarea"
        styleType="type1"
        className="mt15">
        텍스트영역
      </input-textarea>

      <guide-sub-title class="mt15">radio</guide-sub-title>
      <div class="g-wrap">
        <input-radio
          v-model="guideRequest.gender"
          val="g-gender1-1"
          id="g-gender1-1"
          name="g-gender1"
          inputType="radio"
          className="mt15">라디오1</input-radio>
        <input-radio
          v-model="guideRequest.gender"
          val="g-gender1-2"
          id="g-gender1-2"
          name="g-gender1"
          inputType="radio"
          className="mt15">라디오2</input-radio>
        <p class="error"><i></i>{{guideRequest.gender}}에러문구 올 예정</p>
      </div>

      <guide-sub-title class="mt15">checkbox</guide-sub-title>
      <div class="g-wrap">
        <input-check
          v-model="guideRequest.chkGroup1"
          val="chkGroup1-1"
          id="g-chk-1"
          name="g-chk"
          inputType="checkbox"
          className="mt15">G1-체크1</input-check>
        <input-check
          v-model="guideRequest.chkGroup1"
          val="chkGroup1-2"
          id="g-chk-2"
          name="g-chk"
          inputType="checkbox"
          className="mt15">G1-체크2</input-check>
        <input-check
          v-model="guideRequest.chkGroup1"
          val="chkGroup1-3"
          id="g-chk-3"
          name="g-chk"
          inputType="checkbox"
          className="mt15">G1-체크3</input-check>
        <p class="error"><i></i>{{guideRequest.chkGroup1}}에러문구 올 예정</p>
      </div>
      <div class="g-wrap">
        <input-check
          v-model="guideRequest.chkGroup2"
          val="chkGroup2-1"
          id="g-chk2-1"
          inputType="checkbox"
          styleType="type2"
          className="mt15">G2-체크1</input-check>
        <input-check
          v-model="guideRequest.chkGroup2"
          val="chkGroup2-2"
          id="g-chk2-2"
          inputType="checkbox"
          styleType="type2"
          className="mt15">G2-체크2</input-check>
        <p class="error"><i></i>{{guideRequest.chkGroup2}} 에러문구 올 예정</p>
      </div>
      <div class="g-wrap">
        <!-- [TEST] input 바로 테스트 -->
        <input v-model="guideRequest.tmpChk" @change="testChange" @input="testInput" class="input-checkbox" type="checkbox" name="tmpChk" value="1chk" style="appearance: auto">
        <input v-model="guideRequest.tmpChk" @change="testChange" @input="testInput" class="input-checkbox" type="checkbox" name="tmpChk" value="2chk" style="appearance: auto">
        <input v-model="guideRequest.tmpChk" @change="testChange" @input="testInput" class="input-checkbox" type="checkbox" name="tmpChk" value="3chk" style="appearance: auto">
        <input v-model="guideRequest.tmpChk" @change="testChange" @input="testInput" class="input-checkbox" type="checkbox" name="tmpChk" value="4chk" style="appearance: auto">
        <input v-model="guideRequest.tmpChk" @change="testChange" @input="testInput" class="input-checkbox" type="checkbox" name="tmpChk" value="5chk" style="appearance: auto">
        <p class="error"><i></i>{{guideRequest.tmpChk}} 에러문구 올 예정</p>
      </div>

  </guide-layout>
</template>

<script>
// import guide Components
import GuideLayout from "@/components/Layout/StyleGuide/Index"
import GuideTitle from "@/components/Layout/StyleGuide/Title"
import GuideSubTitle from "@/components/Layout/StyleGuide/SubTitle"
import GuideSubDesc from "@/components/Layout/StyleGuide/SubDescription"
// import form Components
import InputText from "@/components/base/forms/InputText"
import InputRadio from "@/components/base/forms/InputRadio"
import InputCheck from "@/components/base/forms/InputCheckbox"
import InputTextarea from "@/components/base/forms/InputTextarea"
export default {
  name: 'GuideForm',
  components: {
    GuideLayout, GuideTitle, GuideSubTitle, GuideSubDesc, InputText, InputRadio, InputCheck, InputTextarea
  },
  data: () => ({
    guideRequest : {
      text: '',
      email: '',
      gender: '',
      textarea: '',
      chkGroup1: [],
      chkGroup2: [],
      tmpChk: [],
    },

    rules: {
      text: [
        value => !!value || 'Required.',
        value => (value || '').length <= 4 || '텍스트는 4자까지만',
        value => {
          const pattern = /^[가-힣]+$/
          return pattern.test(value) || '국문 제대로 입력해'
        }
      ],
      email: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      ],
      textarea: [
        value => (value || '').length <= 10 || 'Text must be less than 10 characters',
      ]
    }
  }),
  methods: {
    testChange: function() {
      console.log("::change", this.guideRequest.tmpChk);
      
    },
    testInput: function(e) {
      console.log("::input", e.target.value);
      console.log("::input-checked", e.target.checked);
      console.log("::input", this.guideRequest.tmpChk);
    }
  }
}
</script>

<style lang="scss">
  .g-wrap {
    display: flex;
    flex-wrap: wrap;
    [class*="input-"]:not(:first-child) {
      margin-left: 1.5rem;
    }
  }
  .error {
      position: relative;
      display: block;
      margin-top: 1.5rem;
      color: $errColor01;
      width: 100%;
  }
</style>