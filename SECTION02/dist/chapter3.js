// 객체-----------------------------------------
// 타입스크립트의 특징 : '구조적 타입 시스템' = property based type(프로퍼티와 메서드가 어떻게 생겼는지)
// let user: object = { //이렇게 사용보다는
let user = {
    // {
    //    프러퍼티:프로퍼티 타입 정의;
    //    ..
    // } : '객체 리터럴' 문법
    id: 1,
    name: "고현정",
};
//접근(객체명.프로퍼티)
console.log(user.id);
//타입 정의 예시1
let dog = {
    name: "돌돌이",
    color: "brown",
};
//위 user 타입 정의할때 'id?: number;' 으로 인해 id는 선택적으로 넣어도 된다.
//?. : 값을 선택적으로 넣고 싶을때(선택적 프로퍼티 = 옵셔널 프로퍼티)
user = {
    //id : ""
    name: "홍길동",
};
//변경되지 않아야할 값-----------------------------------------
let config = {
    apiKey: "MY API KEY",
};
//config.apiKey = "hhhdhhdhdh"; //에러 : 수정 불가
console.log(config.apiKey);
export {};
//  명령어 : tsx .\src\chapter3.ts
