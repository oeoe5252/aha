<template>
  <!-- [TODO] 
    - 불필요한 prop 지우기
    - vscode 탭 공백 설정...
  -->
  <div :class="[`input-${inputType}`, `${styleType}`, `${className}`]">
    <input 
        :id="id"
        :name="name"
        :type="inputType"
        @change="onChangeChecked" />

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
            this.$emit('input', this.val);
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