// 타입 별칭(=Alias)
//  중복된 타입 별칭으로 지으면 안됨
// 타입도 지역, 전역 변수로 생각하면 된다.(함수안에서 전역 별칭과 같아도 상관없다는 뜻이다.)
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  locaiton: string;
};

//여러 user 객체가 생겨도 타입별칭인 User를 사용하면 됨.
let user: User = {
  id: 1,
  name: "고현정",
  nickname: "a",
  birth: "1997.08.21",
  bio: "안녕하시오",
  locaiton: "대한민국 어딘가",
};

// 인덱스 시그니처 -----------------------------------------
//불규칙 갯수 프로퍼티(ex: 계속해서 증가되는 프로퍼티인경우)
type CountryCodes = {
  [key: string]: string; //무한
};

let countryCodes: CountryCodes = {
  // = 빠지면 안됨(SyntaxError)
  Korea: "ko",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; //무조건 Korea 프로퍼티가 있어야 할때는 이렇게 추가하면된다.
  // 💥(단, string으로 타입을 변경하면 안된다, 위 인덱스 시그니처 타입이 number이기 때문에 호환이 되지 않기 때문이다.)
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdon: 826,
};
