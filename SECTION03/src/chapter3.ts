/*
    객체 타입의 호환성
    - 프로퍼티 기준이다.(자바에서 상속같은것)
*/
type Animal = {
  name: string; // ;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// 포로퍼티 같은것과, 개수 기준임.
//업 캐스팅
animal = dog;

//다운 캐스팅
//dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book; //선언
let programmingBook: ProgrammingBook = {
  //초기화
  name: "한 입",
  price: 330000,
  skill: "reactjs",
};

book = programmingBook; // 업 캐스팅
//programmingBook = book;//다운 캐스팅

// 초과 프로퍼티 검사-------------------------------------
let book2: Book = {
  name: "한 입2",
  price: 30000,
  // skill:"reactjs"  에러: 프로퍼티 초과
};

function func(book: Book) {}

func({
  name: "한 입3",
  price: 33000,
  // skill:"reactjs"
});

func(programmingBook); //에러 안남.
