#Vue.js   
(조한준)
### Day1
---

<br>

#### Vue를 사용하는 이유

- 데이터와 보이는 View단의 일치화를 해주는 작업
- HTML에서 변수, 조건문, 반복문 사용 가능
- 화면에 변경사항이 생기면 새로고침 없이 즉각 변경
- 협업의 편리함
: 각 부분을 컴포넌드 단위로 나눠서 개발 가능

<br>

---
## 1. Vue.js Setting

#### 1) 프로젝트 생성

`Tip: (Ctrl + 백틱) 을 통해 터미널 실행시킬 수 있음`

- 프로젝트 생성
    - ``` $ npm init vue@3 ```
    - 필요한 모듈만 yes 선택 후 설치

- node_modules 생성
    - ``` $ npm i ```

- 서버 동작 확인
    - ``` $ npm run dev ```

- localhost:5173 접속


#### 2) 크롬 확장 프로그램

- Vue.js devtools 설치

- 세부 정보
    - 시크릿 모드 허용
    - 파일 URL 엑세스 허용

- 개발자 도구에서 Vue 클릭 후 확인

<br>


---

<br>

## 2. Vue.js 기본 문법

#### 1) script, template, style

- script : JavaScript 부분  `set up 필수!`
- template : HTML 부분
- style : CSS 부분
<br>

#### 2) ref
- 코드 : ```import {ref} from "vue"```
- ref : 반응형 변수 생성 시 사용
`ref 변수에 접근할 때 반드시 (ref변수명).value로 접근하기`

<br>

#### 3) Mustache {{  }}


- 변수를 화면에 사용
- HTML에서 변수 사용

<br>

#### 4) v-model & v-bind

- **v-model**
    - 사용자 입력 값을 변수로 받을 때 사용
    - <input 태그>에 반드시 사용됨
    - <select 태그>에도 사용 가능

<br>

- **v-bind**
    - 태그의 속성(Attribute)을 변수화 할 때
    - CSS style도 속성이므로 사용 가능
    - v-bind는 사용자의 입력값을 받을 수 없음 <br> (input 태그에 사용 금지)

<br>

- **v-model vs v-bind**
    - v-model은 양방향, v-bind는 단방향
    - 양방향<br>
        - HTML이 변경되는 경우 데이터도 변경됨
        - 데이터가 변경되는 경우 HTML도 변경됨


    - 단방향
        - HTML이 변경되는 경우 데이터는 `변경되지 않음`
        - 데이터가 변경되는 경우 HTML도 변경됨


<br>

#### 5) v-on

- 이벤트를 받을 때 사용한다
`이벤트 : 브라우저에서 일어나는 모든 종류의 사건`

- 사용 방법 2가지

    - ``` v-on: (이벤트명) = "(이벤트 핸들러 함수)" ```
    - ``` @(이벤트명) = "(이벤트 핸들러 함수)" ```

<br>

#### 6) v-if / v-else-if / v-else

- 조건문 내의 조건을 만족하면 태그를 보여줌

<br>

#### 7) v-for

- 태그의 반복을 위해서 사용
- `유의사항`
: **key를 반드시 중복 가능성이 없는 값**으로 지정해야함
- 배열의 인덱스를 key로 사용 가능

<br>

#### 8) computed

- ``` import {ref, computed} from "vue" ```
- 사용하는 이유
: 조건이 너무 많을 때 v-if를 사용하면 가독성 떨어짐
- filter 배열 메서드를 사용하여 조건에 맞는 배열을 다시 만든다
<br> <br>
---

<br>

#### Vue.js 외에 알게된 점
`배열의 includes 메서드를 사용하면 값이 배열 내에 존재하는지 알 수 있음(True/False 반환)`

<br>

---

<br>

#### 질문
1. 정확히 어떤 상황에 v-model 사용하고 어떤 상황에 v-bind를 사용해야 하는가?
2. 당일에 나온 todo list 과제에서 기존의 todoList로 v-for문을 돌렸는데, X버튼 눌러서 삭제하는 이벤트 핸들러 함수 구현을 못하겠습니다..