/**
 * 타입 좁히기
 * - 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};
function func(value: number | string | Date | null) {
  if (typeof value === "number") {
  } else if (typeof value === "string") {
  } else if (value instanceof Date) {
    //오른쪽이 클래스라 가능
    //   } else if (value instanceof Person) { //클래스가 아닌 일종에 객체 타입이라 사용불가
  } else if (value && "age" in value) {
    //in 연산자 뒤에는 null이나 undeined 값이 들어오면 안됨.
    // &&(엔드엔드 연산자를 꼭 사용해야 에러 안남)
  }
}
