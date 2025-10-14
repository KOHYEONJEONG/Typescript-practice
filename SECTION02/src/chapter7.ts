// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("void");
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;

// never---------------------------------------
//반환값 자체가 모순일떄 (void를 사용하는의미는 반환값이 없다는것임.)

// never -> 존재하지 않는
// 불가능한 타입
// 정상적인 종료가 되지 않고, 반환한다는 자체가 모순

function func3(): never {
  while (true) {} //무한반복
}

function func4(): never {
  throw new Error(); //에러반환은 never로 쓰임
}

// + 변수의 타입으로 지정시 어떠한 값도 넣지 못한다.(최하위 계층이기 때문에 모든 타입에 값을 넣을 수 없다 왜? 다운캐스팅이 되어버리기 때문이다.)
let anyVar: any;
let b: never;
// b = 1;  number타입은 never타입보다 윗 계층에 존재하고 1을 never타입 변수에 넣는다는건 down캐스팅을 한다는 것이므로 '에러'
// b = {};
// b = "";
// b = undefined;
// b = null;
// b = anyVar; //any 타입의 변수도 넣지 못한다.
