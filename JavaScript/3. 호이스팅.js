//변수의 호이스팅

console.log(ssafy);
var ssafy =20; 
//원래 에러 떠야하는데 내부적으로 var은 가장 위로 보내서 undefined만 뜸
//-> 호이스팅 (let, const로 막을 수 있음)


//함수의 호이스팅
//방식이 2가지
//함수 선언식 function test(){} -> 함수가 통째로 호이스팅
test();
function test(){
    console.log("hello world");
};

//함수 표현식 var hello = function(){} -> 변수 호이스팅이 발생
// hello();
// const hello = function(){
//     console.log("hello world");
// }
//hello is not defined라고 뜸(원래 이게 맞는거)
var hello;
hello();
hello = function(){
    console.log("test");
}
//-> 근데 얘는 not defined가 아니라 not a function 이라고 뜸
// (undefined는 변수이므로)



//원시 자료형은 call stack에 저장
//참조 자료형은 heap 메모리를 거침
const obj = {a:5};
obj.a = 100;
obj;  //{a:100} 출력됨 (const 는 바뀌면 안되는데)
// -> const는 call stack 변경 막아놓음
// -> 객체.멤버는 힙의 메모리를 바꾸기 때문에 


