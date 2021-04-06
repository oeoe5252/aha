<template>
        <!-- 컴포넌트3: type3: webzine: 웹진타입 -->
    <div>
        <slot></slot>
        <div 
            v-for="(item, idx) of items" :key="idx"
            class="item"
            @click="onClickItem(item)">
            <!-- <h2>컴포넌트3: type3: webzine: 웹진타입</h2> -->
            <div class="img-area">
                <img class="thum" :src="item.thum" :alt="item.title">
            </div>
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
    name: 'TmpListWebzine',
    component: {},
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
            // 왜 클릭에서 item을 전달 안하고, input에서 전달하지?
            this.$emit('input', item);
            // 부모에 click 이벤트를 발생시켜줘
            this.$emit('click');
        }
    }
}
</script>

<style lang="scss" scoped>
    .item {
        display: flex;
        
        .img-area {
            max-width: 100px;
            margin-right: 10px;
            img {
                width: 100%;
            }
        }
        .txt-area {
            padding: 10px 0;
            .tit {
                font-size: 1.6rem;
                margin-bottom: 10px;
            }
        }
    }
</style>