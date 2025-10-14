/**
 * 서로소 유니온 타입(= tag 유니온 타입)
 * - 💥tag나 state 프로퍼티를 붙혀 완벽히 객체들을 구별해주는 기능
 * - 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 * - 정확하게 직관적으로 타입을 좁힐 수 있도록 객체 타입을 정의하는 특별한 방법인 '서로소 유니온'타입
 * 수학 : 두집합 관계에 공통된 값이 없을떄 '서로소 집합'이라 부름
 *
 * ex. string | number  : 서로소 유니온 타입( 겹치는게 없지? )
 */

type Admin = {
  tag: "ADMIN"; //💥추가(string literal type : 1개의 값만 등록가능) , 서로소로 만들어줌.
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER"; //💥추가(string literal type) , 서로소로 만들어줌.
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST"; //💥추가(string literal type) , 서로소로 만들어줌.
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; //서로소 유니온 타입

function login(user: User) {
  if ("kickCount" in user) {
    console.log(user);
    //Admin 타입
  } else if ("point" in user) {
    //Member  타입
    console.log(user);
  } else {
    //Guest 타입
    console.log(user);
  }
}

let loginParameter: User = {
  tag: "ADMIN",
  name: "알토니오",
  kickCount: 1,
};

login(loginParameter);

//tag 프로퍼티로 인해 직관적1
// (tag : 서로소 집합으로 변경되어 타입을 좁혀서 사용가능해진 것)
function loginTag(user: User) {
  if (user.tag === "ADMIN") {
    //Admin 타입
  } else if (user.tag === "MEMBER") {
    //Member  타입
  } else {
    //Guest 타입
  }
}

//tag 프로퍼티로 인해직 직관적2
// (tag : 서로소 집합으로 변경되어 타입을 좁혀서 사용가능해진 것)
function loginTagSwith(user: User) {
  switch (user.tag) {
    case "ADMIN":
      break;
    case "MEMBER":
      break;
    case "GUEST":
      break;
  }
}

/**
 * 복습겸 사례----------------------------------
 */

type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS"; //loading/filed/success는 state 프로퍼티를 공통으로 가지고 있음
  error?: {
    // ?: = 선택적 프로퍼티
    message: string;
  };
  response?: {
    data: string;
  };
};

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      break;
    case "FAILED":
      console.log(`에러발생 : ${task.error?.message}`); // 💥옵셔널 체이닝 안쓰면 에러.
      //왜? AsyncTask의 error는 선택적 프로퍼티로 되어 있기 때문이다.
      //💡단, 좋은 방법이 아니다. 그냥 type을 3개로 분리하는게 났다.
      break;
    case "SUCCESS":
      break;
  }
}

//비동기 작업의 결과를 처리하는 객체
//비동기 작업 : API를 호출한다든지 서버에서 데이터를 받아오는 작업
const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생!",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 응답!",
  },
};

//---------------------------------
type LoadingTask = {
  state: "LOADING";
  // state나 tag같은 프로퍼티들을 추가해서 '서로소 유니온'타입으로 만들어주는게 훨씬 좋다
  //왜? 스위치 케이스문 같은 걸 이요앻ㅆ을 때 직관적이고 안전하게 타입을 좁혀서 코드를 만들 수 있다.
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};
type AsyncTask3Type = LoadingTask | FailedTask | SuccessTask;

function processResult2(task: AsyncTask3Type) {
  switch (task.state) {
    case "LOADING":
      break;
    case "FAILED":
      console.log(`에러 발생 : ${task.error.message}`); // type을 3개로 나눔으로써 옵셔널 체이닝 사용 안해도 됨.
      break;
    case "SUCCESS":
      break;
  }
}

const failed2: AsyncTask3Type = {
  state: "FAILED",
  error: {
    message: "오류 맞나요?",
  },
};

processResult2(failed2);

// tsx .\src\chapter8.ts
