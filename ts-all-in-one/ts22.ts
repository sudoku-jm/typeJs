// readonly, 인덱스드 시그니처, 맵드 타입스
// 짧지만 자주 쓰이는 세 가지 소개

//============== readonly
// interface A {
//   readonly a: string;
//   b: string;
// }

// const aaaa: A = { a: "hello", b: "world" };
// aaaa.a = "123"; //원래 바꿀 수 있어야하지만 읽기 전용 속성이라 바꿀 수 없다.
// //JS에선 당연히 되는 것이지만, 타입스크립트에서는 못 바꾸게 강제로 막아줌.

//==============인덱스드 시그니처
type A = { a: string; b: string; c: string; d: string }; //이렇게 써도 되지만 속성이 너무 많은 경우
// 그냥 다 값이었으면 좋겠다. 문자열이면 좋겠다.
// 그럴 때 쓰이는 게 인덱스드 시그니처
type B = { [key: string]: number }; //어떤 key든간에 전부 문자열이고 그 값도 문자열이다.
const bbbb: B = { a: 1, b: 2 };

// 정해진 키로만 했으면 좋겠다
type C = "Human" | "Mammal" | "Animal";
// 이 3개의 키만 사용했으면 좋겠다. 키를 줄여놓음
type D = { [key in C]: number }; //C의 키만 사용하면 좋겠다
// const dddd: D = { a: 1 };
const eeee: D = { Human: 123, Mammal: 456, Animal: 789 };

//맵드 타입
//[key in C] 이런식으로 사용.
type F = { [key in C]: C }; //키뿐만 아니라 값까지 정확하게 들어가야할 때
const ffff: F = { Human: "Human", Mammal: "Mammal", Animal: "Animal" }; //계속해서 제한을 둠

const ffff2: F = { Human: "123", Mammal: "ㅇ", Animal: "test" };

// 인터페이스로는 또는이 안되서, &(그리고), |(파이프) 쓸 때는 무조건 타입으로 해야한다.
