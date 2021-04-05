<template>
    <div>
        <!-- 컴포넌트1: type1: basic: 기본타입 -->
        <h2>컴포넌트1: type1: basic: 기본타입</h2>
        <div 
            v-for="(item, idx) of items" :key="idx"
            class="item"
            @click="onClickItem(item)">
            <!-- <h2>컴포넌트3: type3: webzine: 웹진타입</h2> -->
            <!-- <div class="img-area">
                <img class="thum" :src="item.thum" :alt="item.title">
            </div> -->
            <div class="txt-area">
                <h6 class="tit">{{item.title}}</h6>
                <p class="desc">{{item.desc}}</p>
                <div class="sub-info">
                    <span>{{item.writer}}</span>
                </div>
                <div class="util-box">
                    <span>{{item.views}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TmpListBasic',
    props: {
        items: {
            type: Array,
        }
    },
    methods: {
        onClickItem: function(item) {
            console.log("클릭", item);
            // 부모에 input 이벤트를 발생시켜줘, 내가 전달하는 데이터는 item이야
            // cf: @이벤트 명은 kebab-case로 작성한다. camelCase로 해도 camelcase로 사용된다.
            // v-model을 사용해서, 부모의 v-model value에 해당 item 할당(그냥 있는거 활용하려고) : 값만 설정하면, value값을 v-model에 바인딩 해주고, input 이라는 이벤트도 발생시켜주니, 활용한것,(상태가 변경되면 수행됨)
            this.$emit('input', item);
            // 부모에 click 이벤트를 발생시켜줘()
            // 모달 띄우기 위한 click 이벤트 계속 전달
            this.$emit('click');
        }
    }
}
</script>