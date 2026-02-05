//union(|)과 intersection(&)

// 객체 타이핑: type과 interface 구분하기

//타입 애일리어스(type alias)
type A = { a: string }; //A라는 타입을 정의.
const a: A = { a: "hello" };
const a2: { a: string } = { a: "hello" };

interface B {
    a: string;
}
const b: B = { a: "hello" };
const b2: { a: string } = { a: "hello" };

/*
그렇다면 type과 interface 둘 중 뭐가 나음?

간단하게 하고싶다면 type.
interface는 객체 지향 프로그래밍.(상속, 인플리먼트 구현 java 객체 지향 개념 포함)
*/

type A2 = { a: string };
type B2 = string | number; // interface는 이런 게 안 됨!
