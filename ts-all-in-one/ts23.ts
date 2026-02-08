// 클래스의 새로운 기능들
//class에서 컨스트럭터를 넣어서 작업
// class A {
//   a: string = "123";
//   b: number = 123;
//   method() {}
// }

// class A {
//   a: string; //타입지정
//   b: number; //타입지정
//   constructor(a: string, b: number = 123) {
//     this.a = a;
//     this.b = b;
//   }
//   method() {}
// }

// const a = new A("123");
// const a2 = new A("123", 456);

//클래스의 이름은 그 자체로 타입이 될 수 있다.

class A {
  a: string; //타입지정
  b: number; //타입지정
  constructor(a: string, b: number = 123) {
    this.a = a;
    this.b = b;
  }
  method() {}
}

type AA = A; // class가 아니라 new A()를 가리키는 것임.
// AA라는 타입은 클래스 A로 만든 객체와 똑같은 모양이어야 해
const a: A = new A("abc");
//변수 a에 담기는 값은 클래스 A 형식의 객체여야 해

// 여기서 A는 "a라는 문자열 속성을 가진 객체"라는 뜻입니다.
const obj: A = {
  a: "hi",
  b: 123,
  method() {
    console.log("메서까지 다 적어줘야 똑같음");
  },
}; // new A()를 안 써도 형식이 맞으면 통과됩니다.

// 그러면 이 클래스 자체를 가리키는 타입은 뭔가?
typeof A;
const b: typeof A = A;
const realObject = new b("aaa");

// const b: typeof A = new A("test");

//==========새로 추가된 private
// 타입스크립트의 private와는 조금 다르다.
class B {
  private a: string = "123"; // ts에서 제공하는 private
  // 좀 더 정교하게 쓰고 싶으면 TS의 private를 권장
  //   #a: string = "123"; //앞에 #을 붙여 private.
  #b: number = 123; //js에서 제공하는 private

  method() {
    console.log(this.a, this.#b);
    //private면 자기 클래스 내부에서만 쓸 수 있었다.
  }
}

const BB = B;
const b2: B = new B("aaa");

//다만 TS의 private는 실제 코드에서는 Public으로 바뀐다.
