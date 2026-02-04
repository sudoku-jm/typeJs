//원시 래퍼타입, 템플릿 리터럴 타입, rest, 튜플

const a: string = "hello";
const b: String = "hell"; // 대문자로 타입 쓰지말 것

function c(a1: string, b2: string) {}

c(a, b); //b에서 에러
/*
Argument of type 'String' is not assignable to parameter of type 'string'.
'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/

type World = "world" | "hell"; // 타입 World 생성

// const w: World = "world";
// const w2 = `hello ${w}`; //JS에서 이렇게 쓰듯이
//type Greeting = "hello world"
type Greeting = `hello ${World}`; // Type에서도 백틱으로 사용함

const w3: Greeting = "hello world"; // 추천 타입 뜸.
