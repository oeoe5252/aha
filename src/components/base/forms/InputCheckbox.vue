<template>
  <div :class="[`input-${inputType}`, `${styleType}`, `${className}`]">
    <input 
        :id="id"
        :type="inputType"
        @change="onChangeChecked" />

    <!-- [TODO]
        - 에러문구는 그룹에서
        - 테스트 주석은 노트 정리되면 다 지우기
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
    name: 'InputCheck',
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
        val: {
            type: String,
        },
        value: {
            // input checkbox의 checked 여부에 따라  v-model value 값으로 들어간다.
            // 부모에서 해당 인자를 직접적으로 보내지 않았다. v-model이 수행됨에 따라 변경된 value 값을 보낸것.
            // type: 안쓰면 err났움
            type: [Array, Boolean],
        }
    },
    methods: {
        onChangeChecked: function(e) {
            // this.value : 처음은 공란 object v-model에서 빈값이 넘어옴 아무것도 지정한게 없으니, 그 이후엔 input 으로 보낸 arr 값이 넘어옴
            // push를 할때 value 값을 넣는 것이 아니라, val 값을 넣는다. value는 이미 v-model에서 vue에서 사용하는 값이기 때문에, 무시된다. 그래서 임의의 변수 val을 사용해서 push 해줬음.
            // vue에서 기본으로 설정한, model binding value랑 event랑 안겹치게 v-model 설정을 변경하는 것도 있었는데, 나중에 작업하기
            // 왜 별도의 변수를 쓰느냐? v-model에서 넘어온 부모의 value 값을 자식에서 변경하면 안되기 때문에, 자식에서 선택된 값을 배열에 저장하고 해당 배열을 이벤트로 pass 한것!, 해당 이벤트는 부모에서 value랑 연결되어있움

            let checkedData = this.value;
            console.log(typeof(this.value));
            // this.$emit('input', this.val);
            // console.log('checked',e.target.checked);
            // console.log('val', this.val);
            // console.log('value',this.value); // 안나옴
            // console.log('event', e); // change
            // console.log('this', this); // Vue 컴포넌트
            // console.log('this.$attr', this.$attrs); // Vue 컴포넌트
            // console.log('this.$attr.value', this.$attrs.value); // Vue 컴포넌트
            // console.log('checked', e.target.checked)
            
            if (e.target.checked) {
                // e.target.value = on
                // console.log("e.target.value", e.target.value);
                // console.log("checkedData", checkedData);

                // 선택한 값 삽입, 후 v-model input event에 삽입 array 보냄,
                // 그럼 v-model input에서 해당 배열을 value값에 삽입되고, 해당 값이 v-model 값으로 출력됨
                checkedData.push(this.val);
                console.log('-----', this.value, typeof(this.value));
                this.$emit('input', checkedData);
                
            } else {
                // 해제 값 arr 삭제(배열에, 내가 선택한 val 값이 있으면 제거하고 뜋 뱉기)
                // checkedData.filter(data => data != this.val);
                this.$emit('input', checkedData.filter(data => data != this.val));
            }
        }
    },
}
</script>
<style lang="scss">
  // [check]
.input-checkbox {
    .label-legend {
        position: relative;
        font-size: 1.6rem;
    }
    // 스퀘어 스타일
    &.type1 {
        .label-legend {
            line-height: 2.4rem;
            padding-left: 3rem;
            margin-bottom: 0.5em;
            &:before {
                @include pseudoBase();
                top: 0;
                bottom: 0;
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
    // 체크 스타일
    &.type2 {
        .label-legend {
            line-height: 2.4rem;
            padding-left: 3rem;
            margin-bottom: 0.5em;
            &:before,
            &:after {
                @include pseudoBase();
                top: 0;
                bottom: 0;
                margin: auto;
            }
            &:before {
                @include itemSize(24px, 24px);
                left: 0;
                background-color: $white;
                border: 1px solid $grayC;
                transition: all .15s;
            }
            &:after {
                @include itemSize(16px, 9px);
                top: -5px;
                left: 4px;
                border-left: 2.5px solid $white;
                border-bottom: 2.5px solid $white;
                border-color: $white;
                transform: rotate(315deg);
            }
        }
        :checked + label {
            &:before {
                background-color: $mainColor01;
            }
            &:after {
                border-color: $white;
            }
        }
    }
}
</style>