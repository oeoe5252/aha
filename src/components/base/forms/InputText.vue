<template>
<!-- [TODO]
    - 에러문구 컨포넌트화 스타일 에러 컴포넌트에 넣기
    - 에러문구 등장효과
    -->
  <div :class="[`input-${inputType}`, `${styleType}`, `${className}`, {'test': testClass}]">
    <label 
        v-if="!isLabelHide()"
        :for="id"
        class="label-legend"><slot /></label>
    <input 
        :id="id"
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        :readonly="readonly"
        :value="value"
        @input="onInputUpdate"/>

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
            this.$emit('input', e.target.value);
        },
        test: v => v.length <= 2 || 'Max 2 characters',
        checkRules: function() {
            let tmpValue = this.value;
            let tmpResult = this.rules.map(function(elem) {
                return elem(tmpValue);
            });
            return tmpResult;
        },
        printErrMsg: function() {
            this.tmpErrMsg = this.checkRules().find(element=> element !== true );
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

.error {
    position: relative;
    display: block;
    margin-top: 1.5rem;
    color: $errColor01;
}
</style>