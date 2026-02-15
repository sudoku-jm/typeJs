// Utility types - Required

//다 옵셔널로 타이핑을 해놨다. -> 전부 필수로 만들고 싶을 떄
interface Profile {
  name? : string,
  age?:number,
  married?:boolean
}

// const jm:Required<Profile> ={
//   name : 'jm',
//   age : 10,
//   married:false
// }



// 직접만들어보기
type R<T> = {
  [Key in keyof T] -?: T[Key]

  // -? 는 Modifier.
  // ? 만 하면 전부 옵셔널
  // -마이너스를 하면 ?옵셔널을 전부 빼버리는 것.
  // +? 는 (+플러스 ?물음표)는 그냥 ?만있는 옵셔널과 동일
}

const jm:R<Profile> ={
  name : 'jm',
  age : 10,
  married:false
}