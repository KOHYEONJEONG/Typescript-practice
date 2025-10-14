// enum 타입(컴퍼일 이후 사라지지 않고, js파일 확인시 객체로 변환됨 - 코드상에서는 값으로 사용되는걸 볼 수 있다.)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  // = 필요 없음
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Role2 {
  // = 필요 없음
  ADMIN, // 0
  USER = 10,
  GUEST, // 11
}

enum Language {
  korean = "ko", //이렇게 설정을 해놓지 않으면 "ko-kr, korean" 이런 여러가지 값으로 사용될 수 있으므로 고정해서 유지보수에 용이함
  english = "en",
}

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
