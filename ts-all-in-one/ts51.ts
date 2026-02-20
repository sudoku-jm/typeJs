// Utility types - 기타

/*
UpperCase , Lowercase, Capitalize, Uncapitalize 등 .. 구현방법이 정확하게 나와있지 않음

type Uppercase<S extends string> = intrinsic;
type Lowercase<S extends string> = intrinsic;
type Capitalize<S extends string> = intrinsic;
type Uncapitalize<S extends string> = intrinsic;

intrinsic는 타입 스크립트로는 구현이 안 돼서 따로 처리를 했다는 것.
*/


const a = 'Hello World'
const b:Lowercase<typeof a> = a.toLowerCase();
//typeof a 는 'Hello World' 라서 b에 에러 발생중.


interface ThisType<T> { }