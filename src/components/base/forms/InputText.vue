<template>
  <div :class="[`input-${inputType}`, `${styleType}`, `${className}`, {'test': testClass}]">
    <!-- methods 사용할때 () 까지 적어야한다, 없어도 빼면 시행안됨 -->
    <label 
        v-if="!isLabelHide()"
        :for="id"
        class="label-legend"><slot /></label>
    <!-- 부모에서 v-model로 설정하여 자동으로 배치된 value값 할당 -->
    <!-- 근데 같은 컴포넌트 쓰니깐, 같이 이벤트가 발생해버리네??, 이름부분만 이벤트 있음, 이름만 직혀야지 왜 이메일도 같이 찎혀 머리 안돌아가게 -->
    <input 
        :id="id"
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        :readonly="readonly"
        :value="value"
        @input="onInputUpdate"/>

    <!-- [TODO]
        - 에러문구 컨포넌트화
        - 에러문구 스타일
        - 에러문구 등장효과
     -->
    <p v-show="this.tmpErrMsg" class="error"><i></i>{{printErrMsg()}}</p>
  </div>
</template>
<script>
export default {
    name: 'InputText',
    data() {
        return {
            tmpErrMsg: null
        }
    },
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
            default: null
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
        value: {
            type: String,
        },
        rules: {
            type: Array,
        },
        testClass: {
            type: Boolean,
        }
    },
    methods: {
        isLabelHide: function() {
            switch (this.styleType) {
                case 'type3':
                    return true;
                default:
                    return false;
            }
        },
        onInputUpdate: function(e) {
            // this.value = e.target.value
            // console.log(e.target.value, this.value, this.rules);
            // this.test(e.target.value);
            // this.checkRules();
            // 자식에서 입력된 값을 부모 이벤트로 보냄
            // this.checkRules(value)
            this.$emit('input', e.target.value);
        },
        test: v => v.length <= 2 || 'Max 2 characters',
        checkRules: function() {
            // console.log(this.rules);
            let tmpValue = this.value;
            let tmpResult = this.rules.map(function(elem) {
                // console.log("foreach", elem(tmpValue), typeof(elem(tmpValue)));
                return elem(tmpValue);
                // elem('test');
            });
            // console.log("결과", tmpResult);
            return tmpResult;
        },
        printErrMsg: function() {
            this.tmpErrMsg = this.checkRules().find(element=> element !== true );
            // console.log("print============", this.tmpErrMsg);
            return this.tmpErrMsg;
        }
    },
}
</script>
<style lang="scss">
.input-text {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .label-legend {
        font-size: 1.6rem;
        margin-bottom: 0.5em;
    }
    &.type1 {
        .label-legend {
            display: block;
            
        }
    }
    &.type2 {
        .label-legend {
            // justify 이것저것 다 했는데 왜 적용 왜 안돼..
            width: 100px;
            text-align: right;
            padding-right: 1.5rem;
        }
        input {
            width: calc(100% - 100px);
        }
        .error {
            margin-left: 10rem;
        }
    }
}
// [TODO] 에러 컴포넌트에 넣기
.error {
    position: relative;
    display: block;
    margin-top: 1.5rem;
    color: $errColor01;
}
</style>