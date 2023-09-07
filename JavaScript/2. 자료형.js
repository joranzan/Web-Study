
//자바스크립트의 자료형 종류는 <원시>와 <참조> 2개

//<원시 자료형>: call stack에 쌓인다

//int float 구분없이 다 number
const numberA = 123.342;

//char string 구분 없이 다 string
const stringB ="테스트";

//boolean: true/false;
const resultC = true;



// type을 알아보는 typeof 명령어
console.log(typeof(numberA));
console.log(typeof(stringB));
console.log(typeof(resultC));


//null: 값이 비어있다고 명시
//typeof(null) -> object라 나오는데 버그임!!

//undefined: 값을 할당받지 않은 상태  ex. let a; 끝
// -> 자바스크립트엔진이 변수를 초기화할 때 사용




//<참조 자료형>: 모두 객체로 취급 (함수도 ㅇㅇ)
const resultA = [1,2,3,4];          //배열은 []
const objectB = {a:"A", b:"b"};     //객체는 {}, 접근: B.a or B['a']
function funC(){console.log("A");}