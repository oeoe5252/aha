<template>
  <div :class="[`input-${inputType}`, `${styleType}`, `${className}`]">
      <!-- @change="onChangeChecked()" -->
      <!-- @change="$emit('change', $event.target.checked)" -->
      <!-- change 이벤트에 () 전달하면 안대?? -->
      <!-- input radio에서의 @change 이벤트는 부모 v-model로 지정된 값이 변경될때 발생된다. -->
      <!-- 그렇게 때문에,  -->
      <!-- @click="$emit('click')" -->
      <!-- [TODO] 불필요한 주석, prop 지우기 -->
    <input 
        :id="id"
        :name="name"
        :type="inputType"
        @change="onChangeChecked" />
    <!-- [TODO]
        - 에러문구는 그룹에서
     -->
    <label 
        :for="id"
        class="label-legend">
      <slot />
    </label>
  </div>
</template>
<script>
export default {
    name: 'InputRadio',
    props: {
        id: {
            type: String,
            default: 'tmp'
        },
        name: {
            type: String,
            default: 'tmp'
        },
        inputType: {
            type: String,
            default: 'text'
        },
        styleType: {
            type: String,
            default: 'type1'
        },
        className: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: '텍스트를 입력해주세요'
        },
        readonly: {
            type: Boolean,
            default: false
        },
        val: {
            type: String,
        },
        checked: {
            type: Boolean,
        }
    },
    methods: {
        onChangeChecked: function() {
            // 왜 실행만 되고, event는 안받아오지?
            // console.log("changed----------------",this, e.target.checked);
            // console.log("target.value",  e.target, this.val);
            // this // vue 인스턴스 (객체요소들 출력)
            // e.target // 돔이 출력됨(마크업 요소)
            // e.target.checked = 'true' // radio 인스턴스에서는 항상 값이 true일 수 밖에 없음.
            // e.target.value = 'on' // v-model에서 설정된 값
            // this.val = '부모로부터 넘겨받은 사용자 val 속성 값'
            // input radio의 checked 값은 true, false, 
            // input radio의 value값은 on
            this.$emit('input', this.val);
            // this.$emit('input', e.target.checked);
            // input 이벤트는 요소의 value를 갱신해줌(그냥 on 이었는데, 우리가 서버에 넘겨야할 값은, 선택된 요소의 값을 보내야하게 때문에, 다른 props에서 전달받은 값을 부모 v-model 값에 vue 이벤트 input을 통해 모델값을 갱신전달해주는것, 따로 지정하지 않으면 해당 인스턴스는 하나의 값만 계속 보내기때문에, checked를 보내면 true이고, value를 보내면 on이고, 만약 vue를 사용하기 이전에는 체크된 상태의 input의 value를 사용했기 때문에. 근데, vue에서는 v-model의 값을 말아서 서버에 보낼것이기 때문에, 그냥 해당 인스턴스가 불러지면 선택된거고, 그 선택된 값을 v-model의 value로 설정하는거 같다.)
        }
    },
}
</script>
<style lang="scss">
  // [radio]
.input-radio {
    .label-legend {
        position: relative;
        font-size: 1.6rem;
    }
    
    &.type1 {
        .label-legend {
            line-height: 2.4rem;
            padding-left: 3rem;
            margin-bottom: 0.5em;
            &:before {
                @include pseudoBase();
                top: 0;
                bottom: 0;
                border-radius: 50%;
                margin: auto;
            }
            &:before {
                @include itemSize(24px, 24px);
                left: 0;
                background-color: #fff;
                border: 1px solid #ccc;
                transition: all .15s;
            }
        }
        :checked + label {
            &:before {
                border: 7px solid $mainColor01;
            }
        }
    }
}
</style>