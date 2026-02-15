// Utility types - Extract

// Exclude와 정반대.
// type Extract<T, U> = T extends U ? T : never;
interface Profile {
  name :string,
  age:number,
  married:boolean
}

type Ex<T , S> = T extends S ? T : never;
// 'name' 이 'name'인가 > T
// 'age' 가 'name'인가 > never
// 'married'가 'name'인가 > never

type P = Extract<keyof Profile, 'name'> // name만
type P2 = Ex<keyof Profile, 'name'|'age'> // name, age만

type P3 = Extract<keyof Profile, 'addr'> // never 나옴



// ==========extends 

type Result = 'apple' extends 'apple' | 'banana' ? true : false;
// 결과: true ('apple'은 오른쪽 집합의 원소니까!)

type Result2 = 'apple' | 'cherry' extends 'apple' | 'banana' ? true : false;
// 결과: false ('cherry'가 오른쪽 집합에 없으므로 부분집합이 아님!)