/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = "고현정", tall?: number) {
  // ?: = 선택적 매개변수(필수 매개변수보다 항상 뒤에 있어야한다.)
  console.log(`name: ${name}`);
  console.log(`tall : ${tall + 10}`); //불안정

  if (typeof tall === "number") {
    //타입 좁히기
    console.log(`tall : ${tall + 10}`); //안정
  }
}

/**
 * rest 매개변수
 */

//예시1. rest + 가변길이
function getSum(...rest: number[]) {
  let sum = 0;

  rest.forEach((it) => (sum += it));
  return sum; //자동으로 return 자료형은 number
}

//예시2. rest + 튜플(고정길이)
function getSumTuple(...rest: [number, number, number]) {
  //동일 : function getSumTuple(a: number, b: number, c: number)
  let sum = 0;

  rest.forEach((it) => (sum += it));
  return sum; //자동으로 return 자료형은 number
}

console.log(getSum(1, 2, 3, 4, 5)); //15
// getSumTuple(1, 2, 3, 4, 5); 에러 : 파라미터 개수 초과
// getSumTuple(1, 2);
console.log(getSumTuple(1, 2, 3)); //6
