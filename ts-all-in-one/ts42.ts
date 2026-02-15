
// Utility types - Pick

//Pick 직접 만들기


interface Profile {
  name :string,
  age:number,
  married:boolean
}

type P<T, S extends keyof T> ={
   // S는 T의 속성이어야한다
   // S는 T의 키값만 가져옴.
   [Key in S]: T[Key];
   //T[S]의 경우는 :  Profile['name' | 'married'] 자체가 말이 안됨.
   
}


//P라는 타입에서 Pick과 같은 역할을 한다.
const newJm : P<Profile, 'name' | 'married' | 'ddd'> = {
  //가져올 이름을 제네릭에 써줌.
  name :'mj',
  married : false,
  ddd : 'aa'
}

const newJm2 : Pick<Profile, 'name' | 'married'> = {
  //가져올 이름을 제네릭에 써줌.
  name :'mj',
  age : 10 
}

S