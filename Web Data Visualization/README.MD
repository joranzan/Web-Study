# Data Visualization
---


## 기능


#### Naver에 특정 기간동안 검색어+키워드가 검색된 횟수의 비율을 시각화


---

## 요약

##### Naver Labs에서 API를 발급받은 후 

##### 사용자에게 [원하는 검색 기간, 검색어, 키워드]를 입력 받음

##### 차트 형식으로 시각화

<br>

---

## 주요 파일 (Critical Files)

### Client(/Front-end)

##### 1. 계층구조 :  `App.view > Home.view > UserForm, LineChart`

##### 2. 파일 설명

- `/src`

  -  `/App.view` : Root App(RouterView로 Mapping 시켜줌)

  - `/components/UserForm.view` : 사용자 입력받는 컴포넌트

  - `/components/LineChart.view` : 입력 값을 바탕으로 차트 그려줌
  
    <br>
  
  -  `/views/Homeview.vue` : 컴포넌트들 출력
  
    <br>

  - `router/index.js` : Router 정의
  
    <br>

  - `/stores/chart.js` : Pinia 형식으로 지정한 변수들 모음

    <br>

  - `/utils/axios.js` : axios 요청을 위한 파일

    - HTTP REST API 메소드와 Router가 모두 일치하는 axios 요청으로 찾아감 
    - (/Back-end/index.js)

<br>

### Server(/Back-end)

- `index.js` : Rest API
  - Post :  네이버 검색 API 에, 시작일과 종료일, 검색어 등을 포함한 JSON 을 비동기통신으로 보낸 후, 네이버에서 보낸 요청에 대한 결과를 uploads/chart.js 파일로 저장 
  
  - Get : uploads/chart.json 에 저장된 데이터를 JSON 포맷으로 출력
  
  - Delete : uploads/chart.js 파일 삭제

- `/uploads/chart.js` : Post 요청 보내고 받은 데이터 JSON 형식으로 저장

---


## 결과

<br>

![결과](https://github.com/joranzan/Web-Study/assets/106874576/9ee404e8-5353-41c4-876e-0b0dfc109fc8)


