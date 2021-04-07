# aha

### 명명규칙

1. vue 파일(컴포넌트 등): `PascalCase.vue`
2. 템플릿 내 컴포넌트 사용: <MyComponent> || <my-component>
   - 후자 사용(HTML 에서는 kebab-case를 사용하기 때문에 통일성 위해)
3. 컴포넌트 명 합성어 사용:

   ```js
   export default {
       name: 'TodoItem',
       // ...
   }

   // definitions via Vue.component, we recommend kebab-case instead.
   vue.Component('todo-item') {
       // ...
   }
   ```

4. \$emit 이벤트 명: @이벤트 명은 `kebab-case`로 작성한다.

   - camel`C`ase로 해도 camel`c`ase로 사용되기 때문에 `kebab-case`권장

5. 코드 가독성:
   - 탭사용 자제(탭 2space로 설정)
   - 4space로 안하는 이유 : 깊이가 깊어지면, 한 라인에 표현되는 문장이 적어지기 때문에
6. 단축어(?) 디렉티브:
   - 경로: `@` is an alias to `/src`
   - v-on: `@`
   - v-bind: `:`
   - v-slot: `#`

### Vue 기본 문법 구조

### 규칙 상기

1.  컴포넌트 옵션 순서(권장)
    - el: 사이드 이펙트[Side Effects](: 컴포넌트 외부에 효과가 미치는 옵션)
    - `name`/ parent: 전역 인지[Global Awareness]
    - `components`/ directives: 템플릿 의존성[Template Dependencies]
    - extends/ `mixins`: 컴포지션[Composition](: 다른 컴포넌트의 속성을 가져와 합치는 옵션)
    - model/ `props`/ propsData: 인터페이스[Interface](: 컴포넌트의 인터페이스를 지정하는 옵션)
    - `data`/ `computed`: 지역상태[Local State](: 반응적인 지역 속성들을 설정하는 옵션)
    - watch/ `라이프사이클 이벤트`: 이벤트[Events](: 반응적인 이벤트에 의해 실행되는 콜백을 지정하는 옵션)
      > beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate -> updated -> activated -> deactivated -> beforeDestroy -> destroyed
    - `methods`: 비반응적 속성[Non-Reactive Properties](: 시스템의 반응성과 관계 없는 인스턴스 속성을 지정하는 옵션)
    ```js
    export default {
        name: '',
        components: {},
        props: {},
        data() {
            return {}
        },
        computed: {},
        methods: {}
    ```
2.  인스턴스 옵션 순서(권장)
    - is
    - v-for
    - v-if/ v-show
    - id
    - ref/ key/ slot
    - v-model
    - 기타 속성
    - v-on
    - v-html/ v-text

### 기타

- 유니코드 삽입
  > 유니코드 선언 : `&#x+유니코드문자+;`

### ⛔애로사항

1. 참조타입

   > v-for="(item, idx) of items" 로 전달되어 나온 item 하나 요소가 복사본이 나오는게 아니라, 원본 객체를 바라보고 있는 item을 뱉는다. 그러므로 이를 전달하는 인자도 원본 객체를 바라보고 있어서 불필요한 필터링이 필요 없다. 전달받은 객체를 증가시켜도 원본도 같이 변경되므로.

   `before`

   ```js
   // this.items :: 원본객체
   // this.theItem :: 전달받은 데이터 객체
   let tmpIdx = this.items.findIndex((item) => item.idx == this.theItem.idx);
   this.items[tmpIdx].views++;
   ```

   `after`

   ```js
   // this.theItem :: 전달받은 데이터 객체
   this.theItem.views++;
   ```

2. `v-model` : 양방향 바인딩

   - input
     > v-model에서 checked나, value값은 vue 가 가지고 있는게 우선되서 내가 넘긴 props은 무시된다. 그래서 다른 prop으로 전달한다.
   - default
     >

   ```html
   <input
     v-model="guideRequest.tmpChk"
     value="1chk"
     @change="testChange"
     @input="testInput"
   />
   ```

   ```
    [views/styleGuide/Test.vue]
    - v-model="감시할변수"
    - v-model : v-bind와 @input의 조화, 값이 자동으로 value로 할당된다.
    - v-model에 value의 값이 들어간다.
    - @input 먼저 발생 후 @change 수행되는거 같음.
        - input 에선 여기서 선택한 value 값을 v-model 아이에게 넣는 작업을 수행하는 거 같음.
        - change 에선 @input에서 선택한 value 값을 v-model 아이에게 넣는 작업을 수행하는 거 같음.
    // v-model 감시값
    // 데이터 넘길 값
    // `v-model`은 모든 form 엘리먼트의 초기 `value`와 `checked` 그리고 `selected` 속성을 무시합니다. 항상 Vue 인스턴스 데이터를 원본 소스로 취급합니다. 컴포넌트의 `data` 옵션 안에 있는 JavaScript에서 초기값을 선언해야합니다.
    //     text 와 textarea 태그는 value속성과 input이벤트를 사용합니다.
    // 체크박스들과 라디오버튼들은 checked 속성과 change 이벤트를 사용합니다.
    // Select 태그는 value를 prop으로, change를 이벤트로 사용합니다.
    부모에서 v-model로 설정하여 자동으로 배치된 value값 할당 됨
    // input 이벤트는 value에 데이터를 주니깐, 그 value 값은 model이 가지고 있으니깐
    // v-model을 사용해서, 부모의 v-model value에 해당 item 할당(그냥 있는거 활용하려고) : 값만 설정하면, value값을 v-model에 바인딩 해주고, input(위의 로직을 처리해주는) 이라는 이벤트도 발생시켜주니, 활용한것,(상태가 변경되면 수행됨), input 이라는 이벤트는 내가 만들어준게 아니고 v-model 설계한 사람이 만든거 쓴거즤
   ```

   ```html
   <div
     v-for="(item, idx) of items"
     :key="idx"
     class="item"
     @click="onClickItem(item)"
   ></div>
   ```

   ```js
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

   methods: {
        onClickItem: function(item) {
            this.$emit('input', item);
            // 이벤트로 기능을 분리시켜주기 위해, input이란 이벤트는 값을 전달해주는 역할을 위해(부모에서 내가 직접 선언하지 않아도, v-model에 설계된 input이 수행됨), click이란 이벤트는 부모에서 카운트 증가 및 모달을 띄우기 위한 이벤트 전달을 위해 만든 아이, 그렇기 떄문에 전달할 인자는 없고, 그저 자식에서 이런 이벤트를 발생시키라도 부모한테 알리는 용도일뿐
            // 부모에 click이라는 이벤트를 발생시켜줘()
            // 모달 띄우기 위한 click 이벤트 계속 전달(이벤트 이름이 굳이 click이 아니어도 되지)
            this.$emit('click');
        }
    }
   ```

3. vuetify input validation

   ```
       // vuetify 복붙 : vuetify에 안적혀있었음 생각도 못했을거
       // 에러는 무진장 뜨네 멋모르고 막하니깐(루프 오류 제일심각)
       // arrow 함수
       // (인수) => return
       // [arrFunc, arrFunc, arrFun ......]
       // 값이 바뀔때마다 해당 rulse 들 순환해줘야함.
       // add them as functions returning true/error message.
       /////////////////
       // 처음에도 노출되는건, v-model 에서 값이 공백이라서인가
       // !false = true
       // !true = false
       // 왜 이중부정을 하지? 어짜피 이중부정은 원값 아닌가? 뭔 이유가 있으니깐 걔네들이 했겠지?
   ```

   ```js
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
   ```

4. 기타 부수적 사용법

   ```html
   <!-- methods 사용할때 () 까지 적어야한다, 없어도 빼면 시행안됨 -->
   <label v-if="!isLabelHide()" :for="id" class="label-legend"><slot /></label>
   ```

   ```js
   export default {
     // vue 개발자 도구에 노출되는 요소명
     name: "TmpList",
     // 부모에게서 전달받은 데이터를 해당 컴포넌트에서 그저 넘겨주는게 아니라, 조건, 반복등에 활용할 변수지정.?
     props: {
       listType: {
         type: String,
         default: "webzine",
       },
       items: {
         type: Array,
       },
     },
   };
   ```

5. \$emit('update:프롭명', 값)
   ```
   this.$emit('update:modalShow', false);
   ```
6. router-link
   > router-link 가 어디에 있든, router-view로 매핑됨
7. :.sync : 자식에서 부모에게서 전달받은 prop 값 넘기며 부모에서 업데이트하기
   > 자식 컴포넌트에서 title prop를 업데이트 하려고 할 때,
   ```js
   // 자식
   this.$emit('update:title', newTitle); // prop title을 new값으로 업데이트 이벤 긔긔
   // 부모
   v-bind:title="doc.title" // 그 부모 data 값을 prop값으로 변경쓰!
   v-on:update:title="doc.title = $event" // title 업데이트 하는뎁, 자식에서 받은 이벤값($event)을 부모 data 값에 넣는당 일케 동작함 (emit 이벤트로 받은 값($evnet)를 부모의 data에 저장하고, 부모의 prop 에 저장한 data를 넣어쥰다)
   ```
   > - 위의 코드를 한줄로 표헌하면
   ```js
   // 자식
   this.$emit('update:title', newTitle);
   // 부모
   v-bind:title.sync="doc.title"
   ```

### [NOTE] 이동

```
github.io : router-link로 이동하면 뜨는데, 직접 페이지 치면 안나오는 이슈: 블로그 본 거 같은데 다시 카톡 뒤지기
```

```
vue-router
.router-link-active {
    // <router-link>는 현재 라우트와 일치할 때 자동으로 .router-link-active 클래스가 추가됩니다.
    background-color: red;
  }
```

```
근데 같은 컴포넌트 쓰니깐, 같이 이벤트가 발생해버리네??, 이름부분만 이벤트 있음, 이름만 직혀야지 왜 이메일도 같이 찎혀 머리 안돌아가게
```

```
tmpList/index.vue :: $attr 관련 검색, 근데 이거 안쓰고 그냥 할당된 아이템값 집어넣음.. 안잡혀서 콘솔찍어도
// props로 인식(및 추출)되지 않는 부모 범위 속성 바인딩입니다. 컴포넌트에 선언된 props가 없을 때 class와 style을 제외하고 모든 부모 범위 바인딩을 기본적으로 포함하며 v-bind="$attrs"를 통해 내부 컴포넌트로 전달할 수 있습니다 - 하이 오더 컴포넌트(HOC)를 작성할 때 유용합니다. (https://kr.vuejs.org/v2/api/index.html#vm-attrs)
```

```js
  //- router/index.js 기본 루트는 설정 안하면 App.vue가 되는듯?
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
```

4. input radio 주석 정리전

   ```html
   <!-- @change="onChangeChecked()" -->
   <!-- @change="$emit('change', $event.target.checked)" -->
   <!-- change 이벤트에 () 전달하면 안대?? -->
   <!-- input radio에서의 @change 이벤트는 부모 v-model로 지정된 값이 변경될때 발생된다. -->
   <!-- 그렇게 때문에,  -->
   <!-- @click="$emit('click')" -->
   <input :id="id" :name="name" :type="inputType" @change="onChangeChecked" />
   ```

   ```js
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
       // 자식에서 입력된 값을 부모 이벤트로 보냄, 근데 input 이라는 이벤은 내가 지정해준적 없지? 그럼 뭐겠어? vueㅇㅔ서 만든 이벤이구, 그 이벤은 v-model 에서 쓰이고 있음
       this.$emit('input', this.val);
       // this.$emit('input', e.target.checked);
       // input 이벤트는 요소의 value를 갱신해줌(그냥 on 이었는데, 우리가 서버에 넘겨야할 값은, 선택된 요소의 값을 보내야하게 때문에, 다른 props에서 전달받은 값을 부모 v-model 값에 vue 이벤트 input을 통해 모델값을 갱신전달해주는것, 따로 지정하지 않으면 해당 인스턴스는 하나의 값만 계속 보내기때문에, checked를 보내면 true이고, value를 보내면 on이고, 만약 vue를 사용하기 이전에는 체크된 상태의 input의 value를 사용했기 때문에. 근데, vue에서는 v-model의 값을 말아서 서버에 보낼것이기 때문에, 그냥 해당 인스턴스가 불러지면 선택된거고, 그 선택된 값을 v-model의 value로 설정하는거 같다.)
   }
   ```

5. input checkbox 주석 정리전

   ```js
   props: {
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

   ```

### computed

전달된 prop의 형태를 바꾸어야 하는 경우
해당 경우에는 computed 속성을 사용하는 것이 가장 바람직합니다.

### router

- history mode: 페이지 키값에 관계 없이 일단 접속해서 '/'에서부터 찾은 파일이 빌드되는것,  
  그렇기 때문에 히스토리 모드에서는 '/' 뒤에 정확한 경로를 입력해줘야한다.

### localStorage

localStorage can only contain strings. This means that any objects or arrays you wish to store in localStorage must be converted to a JSON string, and then re-formatted when you retrieve them.

```js
// Convert the object into a JSON string and store
localStorage.setItem("key", JSON.stringify(object));

// Retrieve the data and convert from JSOn string to object/array
let obj = JSON.parse(localStorage.getItem("key"));
```

### directory tree

```
|- docs/            # yarn build 파일
|- public/
  |- index.html     # yarn build 시 main.js와 합쳐지는 파일: main.js에서 렌더링된 아이가 monut() 되는 요소. 즉, 얘가 보여지는 정적파일이다. vue는 js파일을 불러들어야 로딩 되기 때문에, 파일소스보기로 해당파일을 보면, 돔요소는 찾을 수 없다. js에 따라 마크업이 렌더링 되는거
|- src/
  |- assets/        # 빌드할 리소스 파일들(?)
  |- components/    # 컴포넌트 파일들
  |- pages/         # (c)multipage 뽀작뽀작 안씀
  |- router/        # vue-router 기본 파일: 라우트 설정
  |- store/         # Vuex 파일: 전역 변수 관련 사용
  |- views/         # vue 세팅할때 router 설정하니깐 같이 세팅된 폴더, (보여지는 페이지를 router에서 기본으로 사용하는 폴더 같다.-구냥 만든 개발자가 미리 세팅한 폴더명, views 맘에 안들면, router설정에서 컴포넌트 부르는 폴더 경로를 바꾸면 될듯)
  |- App.vue        # 싱글페이지 기본 세팅 화면, main.js에서 렌더를 다른거로 변경해도 된다.
  |- main.js        # 싱글페이지 vue 렌더 설정: 싱글페이지 이므로, 결국 종착지는 App.vue 하나, 이 안에서 렌더링될 요소들을 세팅하는거라 보면 됨.



```
