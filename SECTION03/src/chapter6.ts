/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

/**
 나중에 값들을 초기화 시켜주고 싶을 때 (아래 프로퍼티 접근까지 같이 봐야하는 예시)
*/
//let person = {};        <- 빈 객체로 타입 추론 (에러)
//let person: Person = {} <- 빈 객체로 타입 추론 (에러)
//let person: any = {}    <- 좋지 않은 타입 지정 (에러는 없지만, 추천x)
let person = {} as Person;
person.age = 10;
person.name = "고현정";

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "흰둥이",
  color: "white",
  breed: "말티즈", //breed는 Dog 타입에 없음.
} as Dog; //: Dog 도 알아서 지정됨

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- eksdjstlr
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함.
 *
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

//다중 단언(하지만 ts를 사용하는 이유가 없어지므로 사용하지 말자)
let num3 = 10 as unknown as string;
// 10  as unkown : unkonwn은 string의 부모계층이므로 가능

/**
 * const 단언
 * - 특히 객체와 많이 사용됨.
 */

let num4 = 10 as const;
// num4  = 20

let cat = {
  name: "멍멍이",
  color: "pink",
} as const; // 💡일일이 프로퍼티마다 readonly를 붙힐 필요 없음

// cat.name = ""; 에러

/**
 * Non Null 단언
 *  ? : (Non Null 단언은 아님)옵셔널 체이닝(💥undefined로 변경해줌.)
 *  ! : null, undefined 아니야! 라고 믿기 때문에  무조건 있따고 ts 믿게 만듬. (💥검사 시 ts 눈을 가리는 위험한 문법)
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "고현정",
};
// const len1: number = post.author?.length;   <- undefined값을 넣을 수 없기 때문에 에러가 나는거다.
const len2: number = post.author!.length;
console.log(len2);

//tsx .\src\chapter6.ts
