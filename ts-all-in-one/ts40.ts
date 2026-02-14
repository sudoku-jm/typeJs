// Utility types - Partial

interface Profile {
  name :string,
  age:number,
  married:boolean
}

const jm :Profile = {
  name : 'jm',
  age : 99,
  married : false
}

const jm2 :Profile = {
    name : 'jm',
    age : 99,
}
// 인터페이스에서 필수 값이었던 married가 없어서 jm2는 에러가 났음.

const jm3: Partial<Profile> = {
    name : 'jm',
    age : 99,
}
//Partial을 써서 jm3는 에러가 안남.


//====================================
// Partical 만들기
// step1
// type P<T> = {
//   [Key in keyof T] : string;
//   //어떤 객체가 오든지 객체의 키들을 여기 씀
//   // T의 key만 뽑겠다. 그 키 값(value)은 :string이다.
// }

// step2
// type P<T> = {
//   [Key in keyof Profile]? : string;
//   //다른 인터페이스를 가져와서 쓸 수 있다. Profile의 속성 3개가 들어온다.
//   //?물음표를 붙여줌으로써 옵셔널(선택형)으로 만들어준다.
// }

// step3
type Name = Profile['name']; //이런식으로 프로필의 name 타입만 가져올 수 있다.
// type P<T> = {
//   [Key in keyof Profile]? : T[Key]; 
//   //Type 'Key' cannot be used to index type 'T'.
//   //Key 형식을 인덱스 형식 T에 사용할 수 없습니다
// }
type P<T> = {
  [Key in keyof T]? : T[Key]; 
  //T는 Profile이고 Profile에서 Key이름으로 꺼내오면 값이다
  //Profile[name] 과 같음
}

// 이렇게 만든것과 같다.
// P<Profile>{
//     name ?:string,
//     age?:number,
//     married?:boolean
// }

const jm4: P<Profile> = {
    name : 'jm',
    age : 99,
}


//결론
// P는 Partial을 만든거다.

type Partial<T> = {
  [Key in keyof T]? : T[Key]; 
}
const jm5: Partial<Profile> = {
    name : 'jm',
    age : 99,
}


// interface Profile2 {
//   name: string;
//   age?: number;     // 있어도 되고 없어도 됨
//   married?: boolean; // 있어도 되고 없어도 됨
// }

// // Required를 적용하면?
// const user: Required<Profile2> = {
//   name: 'jm',
//   // age: 25,          // ❌ 이제 age가 없으면 에러남!
//   // married: false    // ❌ 이제 married가 없으면 에러남!
// };