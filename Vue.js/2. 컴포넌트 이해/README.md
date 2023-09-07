# Vue Router

## Day 2
---

## 1. Vue Router 기본 개념

#### 1) SPA
- Single Page Application 약자
- Vue는 단 하나의 HTML 파일만 존재
- 장점 : 새로고침 없이 부드럽게 전환됨

<br>

#### 2) Vue Router
- Vue 공식 라이브러리
- Route에 Component를 Mapping
- 어떤 URL에서 해당 Component를 렌더링할 지 결정

<br>

#### 3) index.js

- **src / router 디렉토리 내**에 존재
- Vue Router 설정 파일
- **Routes 배열**
    - path : Route(경로)
    - name : Route(이름)
    - Component : Route에 해당하는 Component
<br>
- Route 배열에 Component를 Mapping 하는 방법 (2가지)
    - 해당 Component import후 바로 Mapping
    - Lazy Loading



`Lazy Loading은 페이지 로딩 시간을 줄이는 효과 있으므로 Vue Router 공식 문서에서 권장하는 방법`

<br>

#### 4) App.vue

```import { RouterLink } from 'vue-router'```

- RouterLink 3가지 방법

    - Path 호출 방식 (to='경로')

    - v-bind 사용

    ```<RouterLink :to="{name:'post'}">PostView</RouterLink>```

    - script setup에서 함수 사용

<br>

#### 5) Router params

- RouterLink에서 params 추가하는 방법

    ```<RouterLink : to = { name : ‘ route 이름 ’, params : { 변수 : ‘ 값’ } )```

- useRouter을 사용해 params 추가하는 방법

    ```router.push( name : ‘ route 이름 ’, params : { 변수 : ‘ 값’ } )```

<br>

#### 6) useRouter / useRoute

- useRouter : router 객체 생성

    ```import {useRouter} from "vue-router";```

    ```const router = useRouter();```

- useRoute : route 객체 생성

    ```import {useRouter} from "vue-router";```

    ```const route = useRoute();```


 ---



 ## 2. Vue Router 설계 순서

 <br>

 1. 경로 설계하기

 2. 필요한 component 생성하기

 3. `router/index.js`에서 Routes 배열에 필요한 객체 추가하기

 4. 상위 - 하위 component 연결하기

 ---


 ## 3. Prop, Emit, Pinia

 <br>

 #### 1. Prop
 - 부모의 데이터를 자식에게 전달하는 기능

 - v-bind로 구현

 - 2개 이상의 props 전달 가능

- 실제 변수가 있는 Component (부모)
    - ```<HomeChild :nameProp="name" :ageProp="age"/>```
    - <자식 Component 이름  :**자식이 받을 이름** = "**부모가 보낼 변수**" >


- 자식 Component
    - defineProps( ) 명령어를 통해 부모로부터 전달받은 객체 정의

`prop을 사용하면 자식이 부모의 데이터를 변경할 수 없음!!`

<br>

#### 2. Emit
- 자식 Component에서 부모 Component에 Event를 전달
(데이터 변경 요청)

- 자식 Component
    - defineEmits( )
        - return 값 : emit 함수
        - argument : emit 이벤트 배열

        `emit("정의한 emit 이름", 인자)`

<br>

- 부모 Component
    - v-on (@) 사용
    `@ "자식이 정의한 Emit 이름" = "이벤트 함수"`
    - 자식으로부터 전달받은 인자가 Event함수에 전달됨


<br>

#### 3. Pinia

`Pinia는 전역 상태 관리` **데이터 저장소 개념**

- stores라는 중앙 집중식 저장소에 공유(중복) 많은 State들을 저장하는 방식

<br>

- 필요한 이유
    - Component 구조가 복잡해진 경우
    - 부모-자식 관계가 아닌데 데이터 이동이 필요한 경우

<br>

- store 내의 js파일
    - ```import { defineStore } from 'pinia'```
    - defineStore( )을 통해 만든 객체를 export

- component에서 불러오기
    - ```import { js에서 정의한 객체 이름 } from "pinia 불러온 js 경로"```
    - 불러온 함수 객체의 return 값 저장할 변수 생성
    
`ref값이지만 .value 없이 사용이 가능하다`

---
#### 질문
1. 도대체 Route랑 Router의 차이가 뭔지?
<br>
(Router의 개념이 뭔지 아직 헷갈립니다..ㅠ)
<br><br>
2. useRoute, useRouter로 객체를 선언하면 어떤 값이 생성되는건지 알고 싶습니다  
<br> (해당 경로가 객체로 선언되는건가요?)