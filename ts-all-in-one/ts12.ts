// 타입을 집합으로 생각하자(좁은 타입과 넓은 타입)

//타입으로 보기
// type A = string | number;
// type B = string;

// type C = string & number; //never 없는 타입. 존재할 수 없음

//객체로 보기
//객체는 상세(구체적)할수록 좁은타입
type A = { name: string }; //넓은타입
type B = { age: number }; //넓은타입

type AB = A | B;

// type C = { name: string; age: number }; //좁은타입
type C = A & B; //좁은타입 { name: string; age: number }

const ab: AB = { name: "jeong" }; //넓은타입
const c: C = { name: "jeong", age: 10 }; //좁은타입
const d: C = ab; // 에러남
const e: AB = c; //넓은타입에 좁은 타입은 잘 들어감

// 더 넓은 { name: string; age: number } 에 married를 추가했는데도 에러가 생겼다.
//객체 리터럴 검사하는 기능이 생김. 잉여속성 검사(특수한 상황)
//타입넓좁검사 +잉여속성검사
const f: C = { name: "jeong", age: 99, married: true };
const obj = { name: "jeong", age: 99, marrid: false }; //중간에 이렇게 변수로 빼주면 에러가 안남
const g: C = obj;
