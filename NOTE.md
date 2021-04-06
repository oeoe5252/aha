# NOTE :

## directory tree
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

## localStorage
localStorage can only contain strings. This means that any objects or arrays you wish to store in localStorage must be converted to a JSON string, and then re-formatted when you retrieve them.
```js
 // Convert the object into a JSON string and store
localStorage.setItem('key', JSON.stringify(object));

// Retrieve the data and convert from JSOn string to object/array
let obj = JSON.parse(localStorage.getItem('key'));
```


## props
---

## computed
전달된 prop의 형태를 바꾸어야 하는 경우
해당 경우에는 computed 속성을 사용하는 것이 가장 바람직합니다. 


## router
- history mode: 페이지 키값에 관계 없이 일단 접속해서 '/'에서부터 찾은 파일이 빌드되는것,  
그렇기 때문에 히스토리 모드에서는 '/' 뒤에 정확한 경로를 입력해줘야한다.

## 명명규칙

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
