//타입 좁히기(타입 가드)
function numOrStr(a: number | string) {
  if (typeof a === "string") {
    a.split(",");
  } else {
    a.toFixed(1);
  }
}

numOrStr("123");
numOrStr(1);
// function numOrStr(a: number | string) {
//   // a.toFixed(1);// 에러?
//   (a as number).toFixed(1); // unknown일 때 빼고는 as는 하지말자...
// }

// numOrStr("123");
// numOrStr(1);

function nameOrStr2(a: number | string) {
  if (typeof a === "number") {
    // a가 number인 것이 확실하다.
    a.toFixed(1);
  } else {
    a.charAt(3); // 여기가 string인것 까지도 파악해준다.
  }
  if (typeof a === "string") {
    // a가 string인게 확실하다
    a.charAt(3);
  }
  if (typeof a === "boolean") {
    a.toString();
  }
}

nameOrStr2(123123);
nameOrStr2("abc");

//=============배열도 구분 할 수 있다.

function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    // number[]
    //배열인지 아닌지 구분
    a.slice(1);
  } else {
    //number
    //배열 아님
    a.toFixed(1);
  }
}
numOrNumArr(123);
numOrNumArr([1, 2, 3]);

//===========클래스는 그 자체로 타입이 될 수 있다.

class A {
  aaa() {}
}

class B {
  bbb() {}
}

function aOrb(param: A | B) {
  // param.aaa(); // A인지 B인지 모르는 상태라 에러남
  if (param instanceof A) {
    param.aaa(); // param은 A라는게 보장이 됨.
  }
}

// 대신 클래스 자체가 아니라, 인스턴스 타이핑은 클래스 이름으로 한다. new A()와 같이.
aOrb(new A());
aOrb(new B());
aOrb(A); // 에러남
