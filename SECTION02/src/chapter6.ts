// any (단점: 타입스크립트에 검사를 안하는거와 같다, 이점을 포기됨)
// 특정 변수의 타입을 확실히 모를때.
// 💥가능한 최대한 사용 금지
let anyVar: any = 10; // number, string 등 어떤 타입이든지 변경가능

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUppperCase(); //🚨런타임 에러, string으로 설정하지 않았는데 문자열 함수를 사용했기 때문에(이런게 any 타입에 문제이다.)
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown(모든 타입에 최상위) --------------------------------------
// 💥any 타입보다 나음.

let unKnownVar: unknown;
unKnownVar = "";
unKnownVar = 1;
unKnownVar = () => {};

// 단 아래처럼 사용은 불가(모든 타입의 변수에 다 UnknownType에 값을 넣을 수 없다.)
// num = unKnownVar;

//타입 정제, 타입좁히기
if (typeof unKnownVar === "number") {
  num = unKnownVar; // 이렇게 확실히 numberType이라고 명시했을 때 사용할 수 있다.
}
