//옵셔널, 제네릭 기능들
function add(x: string | number, y: string | number): string | number {
  return x + y; //잘못된 코드
}

//이렇게 원했지만
add(1, 2); //3
add("1", "2"); //12

//이런게 들어와버리니 문제
add(1, "2");
add("1", 2);

//2개로 나누면 되지만, 에러남. 함수를 2번 선언했기 때문에
function add2(x: string, y: string): string {
  return x + y;
}

function add2(x: number, y: number): number {
  return x + y;
}

//body를 없애면 되긴하는데 구현부분 까지 만들어줘야한다.
function add3(x: string, y: string): string;
function add3(x: number, y: number): number;
function add3(x, y) {
  return x + y;
}

//=========제네릭
// 보통 T 라고 써준다. A,B,C든 상관 없긴하지만 T라고 보통 씀.
function add4<T>(x: T, y: T): T {
  //뭔지는 모르겠지만 같은 문자로 표기해준다.
  //제네릭은 만들어놓을때는 무슨 타입인지 모르겠고, 실제 사용할 때 타입이 정해진다.
  return x + y;
}
add4(1, 2);
add4("1", "2");
add4(true, false);

add4(1, "2");
add4("1", 2);

// extends로 제한을 주자
function add5<T extends number, K extends string>(x: T, y: K): T {
  return x + y;
}
add5(1, 2);
add5("1", "2");
add5(true, false);

add5(1, "2");
add5("1", 2);

//extends로 제네릭에 뭐가 들어올지 제한 두기
function add6<T extends number | string>(x: T) {
  //T는 number | string
  // "hi", 100 은 가능 true는 불가능
  // "A"|"B" 가능
  // 1|2 가능
  return x;
}
// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol

function add7<T extends { a: string }>(x: T) {
  return x;
}
add7({ a: "hi" });

function add8<T extends string[]>(x: T) {
  return x;
}
add8(["1", "2"]);

function add9<T extends (a: string) => number>(x: T) {
  //콜백함수로 제한둠
  return x;
}
add9((a) => +a); //a는 string +a는 number

//모든함수를 다 쓰겠다 하면 any 써도 됨
//제한을 거는거라서 제한이 없다! 고 하면 any 씀
function add10<T extends (...a: any) => any>(x: T) {
  //"T는 뭐가 와도 상관없지만, 딱 하나! '함수'이기만 해라."
  return x;
}
add10((a) => +a);
add10(() => 10);
add10((a, b, c) => a + b + c); //인자가 여러개인 함수
add10({ name: "test" }); //에러

//생성자
function add11<T extends abstract new (...a: any) => any>(x: T) {
  // class 자체를 넣고 싶을 때
  return x;
}

class A {
  //A자체가 타입
  constructor() {}
}
add11(new A()); //에러
add11(A);
