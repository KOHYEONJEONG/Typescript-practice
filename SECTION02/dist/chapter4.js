//여러 user 객체가 생겨도 타입별칭인 User를 사용하면 됨.
let user = {
    id: 1,
    name: "고현정",
    nickname: "a",
    birth: "1997.08.21",
    bio: "안녕하시오",
    locaiton: "대한민국 어딘가",
};
let countryCodes = {
    // = 빠지면 안됨(SyntaxError)
    Korea: "ko",
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdon: 826,
};
export {};
