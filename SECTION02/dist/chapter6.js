// any (단점: 타입스크립트에 검사를 안하는거와 같다, 이점을 포기됨)
// 특정 변수의 타입을 확실히 모를때.
// 💥가능한 최대한 사용 금지
let anyVar = 10; // number, string 등 어떤 타입이든지 변경가능
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUppperCase();
anyVar.toFixed();
let num = 10;
num = anyVar;
// unknown --------------------------------------
let unKnownVar;
unKnownVar = "";
unKnownVar = 1;
unKnownVar = () => { };
//타입 정제, 타입좁히기
if (typeof unKnownVar === "number") {
    num = unKnownVar;
}
export {};
