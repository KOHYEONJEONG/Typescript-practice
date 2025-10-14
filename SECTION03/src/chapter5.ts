/**
 * 타입 추론
 * - JS : 자동으로 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "고현정",
  profile: {
    nickname: "soon",
  },
  urls: ["https://www"],
};

//JS: 타입이 알아서 추론됨
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

//JS: 함수는 return값으로 반환 타입을 추론
function func(message) {
  return "hello";
}
console.log(func());

//JS: 함수는 return값으로 반환 타입을 추론
function func2(message = "string") {
  //기본값을 넣어주면 자동으로 타입이 정해진다.
  return message + " hello";
}
console.log(func2());

let d; //초기값 지정하지 않을 시 '💥암묵적으로 any 타입'
// let d:any; <-- 💥d는 그냥 any 타입(주석을 풀게되면 아래 타입은 모두 any타입으로 보인다. '암묵적 any 타입이 아니라는 거다.')
d = 10; //number 타입으로 진화
d.toFixed();
// d.toUpperCase(); 💥에러(위에 정수를 넣음으로써 number타입으로 진회됨.)

d = "hello"; //다시 string 타입으로 진화
d.toUpperCase(); // 문자함수 사용 가능해짐.

const num = 10; // :10 = 정수 리터럴 타입으로 추론됨

//tsx .\src\chapter5.ts
