/*
* 함수 타입 호환성(💥 어려운 부분)
    - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찬은가를 판단하는
    1. 반환값의 타입이 호환되는가?
    2. 매개변수의 타입이 호환되는가?
    => 이 두가지의 기준이 모두 만족되어야만 두 함수의 타입이 호환된다라고 말할 수 있다.
*/

// 기준1. 반환값이 호환되는가
type A = () => number; //number type
type B = () => 10; //number literal type

let a: A = () => 10; //number type 반환
// let b: B = () => 20; 💥에러 (10으로 지정된 타입이라 20으로 입력 시 에러)
let b: B = () => 10; //number literal type 10 반환

a = b;
//b = a;💥허용안됨
// 오류 : 'A' 형식은 'B' 형식에 할당할 수 없습니다. 'number' 형식은 '10' 형식에 할당할 수 없습니다.
// => 💥반환값 기준으로 보자 : number 리터럴 = number (다운 캐스팅)
// ✅반환값 기준으로 보자 : number = number 리터럴 (업 캐스팅)

//기준2. 매개변수가 호환되는가
//2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: number) => void;
type E = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};
let e: E = (value) => {};
c = d;
//c=e;💥
//'E' 형식은 'C' 형식에 할당할 수 없습니다.
//   'value' 및 'value' 💡매개 변수의 형식이 호환되지 않습니다.💡
//     'number' 형식은 '10' 형식에 할당할 수 없습니다.
d = c;

type Animal = {
  name: string;
};
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};
/*
    animalFunc = dogFunc;💥
    let testFunc = (animal: Animal) => { // 💡객체로 예시를들면 이해가 빠르다.
        console.log(animal.name);
        console.log(animal.color);💥  Animal에는 color가 없으니 당연히 안되겠지
    }
*/

dogFunc = animalFunc;
let testFunc = (dog: Dog) => {
  console.log(dog.name);
};

//2-2. 매개변수의 개수가 다를 때 (2-1보다 간단함)
type Func1 = (a: number, b: number) => void;
// type Func1 = (a: string, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; //func2 매개변수 개수가 더 적으니 ✅
func2 = func1; //func1 매개변수 개수가 더 많으니 💥

//매개변수의 갯수가 다를 때에는 할당하려고 하는 쪽의 함수의 타입에 매개변수의 개수가 더 적을때에만 호환이 된다.(당연히 매개변수 타입도 맞아야한다.)
