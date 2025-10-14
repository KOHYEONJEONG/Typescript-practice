/*
  대수 타입
  - 여러개의 타입을 합성해서 새롭게 만들어낸 타입
  - 합집합 타입과 교집합 타입이 존재
*/

/*
 * 1. 합집합 타입 = Union 타입
 *  | : bar, 무한으로 늘릴 수 있다.
 */

//ex: 기본 타입(합진합)
let a: string | number | boolean;
a = 1;
a = "hello";
a = false;

let arr: (number | string | boolean)[] = [1, "hello", true];

//ex: 객체 타입(합집합)
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  //Dog 타입에 포함되는 프로퍼티
  name: "",
  color: "",
};

let union2: Union1 = {
  //Person 타입에 포함되는 프로퍼티
  name: "",
  language: "",
};

let union3: Union1 = {
  //Person, Dog 타입에(교집합) 포함되는 프로퍼티
  name: "",
  color: "",
  language: "",
};

//💥 name 프로퍼티만 생성하면 오류남
// let union4: Union1 = {
//   name: "",
// };

/*
  2. 교집합 타입  = Intersection 타입
  & : 엔퍼센트
*/

//기본 타입 (기본 타입을 가지고 교집합을 만들면 거진 대부분 never 타입이 된다. )
let variable: number & string;

type Intersection = Dog & Person; // 두 집합의 교집합만 가능하다

let intersection: Intersection = {
  name: "",
  color: "",
  language: "", // 하나 주석해보면 알 수 있다.
};
