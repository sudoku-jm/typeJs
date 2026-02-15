// Utility types - Pick

//Partial은 거의 안쓰신다고 함.
//Pick,  Omit을 주로 씀.


interface Profile {
  name :string,
  age:number,
  married:boolean
}

// type Name =Profile['name']

// const jm:Profile = {
//   name : 'jm',
//   age : 99,
//   married : true,
// }

//Pick,  Omit을 주로 씀.
// Pick은 name이나 age를 가져오게 하는것. married는 안가져옴.
const newJm : Pick<Profile, 'name' | 'married'> = {
  //가져올 이름을 제네릭에 써줌.
  name :'mj',
  age : 10 //에러남
}

const newJm : Pick<Profile, 'name' | 'married' | 'addr'> = {
  //가져올 이름을 제네릭에 써줌.
  //addr은 인터페이스에도 없어서 에러남
  name :'mj',
  age : 10 
}


const newJm2 : Omit<Profile, 'married'> = {
  //제네릭에 제거할 키의 이름을 써줌
  name :'mj', 
  age : 10 
}

const newJm3 : Omit<Profile, 'name'> = {
  //제네릭에 제거할 키의 이름을 써줌
  name :'mj', //에러남
  age : 10 
}