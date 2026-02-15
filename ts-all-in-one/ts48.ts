// Utility types - NonNullable 

//Type에서 null과 정의되지 않은 것(undefined)을 제외하고 타입을 생성합니다.
// null, undefined를 제외하고 가져오고 싶을 때
type A = string | null | number | boolean | undefined ;
type B = NonNullable<A>; //string | number | boolean


// NonNullable은 키에 적용된다
// type NonNullable<T> = T extends null | undefined ? never : T;
// type NonNullable<T> = T & {};
//=====직접만들기 
type N<T> = T extends null | undefined ? never : T //null이거나 undefined는 never 반대는 T
type C = N<A> //string | number | boolean