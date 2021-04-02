# NOTE :

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
