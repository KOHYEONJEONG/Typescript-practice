/**
 * 함수 타입 표현식
 * (Function Type expression)
 */

//타입 별칭을 이용하여 '💥자바스크립트의 화살표 함수를 만들듯이'
//함수의 타입을 별칭으로 만들 수 있다.

type Operation = (a: number, b: number) => number; //명칭도 중요함

// const add = (a: number, b: number): number => a + b;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 * = 함수 타입 시그니쳐와 동일한 기능을 한다.
 */

type Operation2 = {
  //자바스크립트 함수 또한 객체이기 때문에 {} 사용
  //함수는 왜 객체일까? https://reactjs.winterlood.com/0f33b159-6b19-433b-8db4-68d6b4a122e0
  (a: number, b: number): number;
  name: string; //하이브리드 타입 : 이렇게 추가할 수 있는 이유는 js함수는 객체이기 때문이다.
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation = (a, b) => a / b;
