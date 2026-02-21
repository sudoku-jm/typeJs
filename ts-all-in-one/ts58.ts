//보너스강의 never

// type IsNever<T> = [T] extends [never] ? true : false;

// type A1 = IsNever<never>; //true
// type A2 = IsNever<123>; //false
//======
// type IsNever<T> = T extends never ? true : false;

// type A1 = IsNever<never>; //never
// type A2 = IsNever<123>; //false
//======
// type IsNever<T> = {type :T} extends {type : never} ? true : false;

// type A1 = IsNever<never>; //true
// type A2 = IsNever<123>; //false


type IsNever<T> = T extends any ? true : false;

type A1 = IsNever<never>; //never


// 타입스크립트의 조건부 타입(T extends ...)에서 유니온 타입은 반복문(loop)처럼 동작함
// type Check<T> = T extends any ? T[] : never;

// type C1 = Check<never> //never
// type C2 = Check<string | number> //string[] | number[]

//어떤 타입 A에 never를 합치면(A | never), 결과는 그냥 A입니다. (마치 5 + 0 = 5 인 것과 같음)
type Check<T> = T extends any ? T[] : never;

type A = string
type C1 = Check<A | never>  //string[]

