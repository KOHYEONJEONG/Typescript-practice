// enum 타입(컴퍼일 이후 사라지지 않고, js파일 확인시 객체로 변환됨 - 코드상에서는 값으로 사용되는걸 볼 수 있다.)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    // = 필요 없음
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Role2;
(function (Role2) {
    // = 필요 없음
    Role2[Role2["ADMIN"] = 0] = "ADMIN";
    Role2[Role2["USER"] = 10] = "USER";
    Role2[Role2["GUEST"] = 11] = "GUEST";
})(Role2 || (Role2 = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "고현정",
    role: Role.ADMIN,
    language: Language.korean,
};
const user2 = {
    name: "Anna",
    role: Role.USER,
    language: Language.english,
};
const user3 = {
    name: "김유나",
    role: Role2.GUEST,
    language: Language.korean,
};
// tsx .\src\chapter5.ts
console.log(user1.name, user1.role, user1.language);
console.log(user2.name, user2.role, user2.language);
console.log(user3.name, user3.role, user3.language);
export {};
