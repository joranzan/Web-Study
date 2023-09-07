## 배포하기 전 유의사항

---

#### 1. Client에서 stores/common.js에서 Pinia로 선언한 myDomain을 본인의 환경에 맞게 설정

- 만약 본인의 IP 주소가 있다면 사용
- 없다면 localhost 사용

#### 2. utils/axios.js에서 DOMAIN 변경

- 본인의 환경에 맞게 설정


#### 3. Server에서 db/index.js 수정

- 본인 환경에 맞게 host 수정
- 본인의 mysql 계정에 맞게 수정


## 배포하기 위한 준비

#### 1. Client, Server 디렉토리에 nodemodules 설치


```$ npm i```

#### 2. localhost에서 실행 시

- Client :  ```$ npm run dev```
- Server : ```$ nodemon index```

#### 3. ubuntu로 배포 시

- Notion에 작성된 순서 따라서 배포