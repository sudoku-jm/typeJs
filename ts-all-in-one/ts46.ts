// Utility types - Readonly

//수정하지 못하고 읽기만 하는 Readonly
interface Profile {
  name? : string,
  age?:number,
  married?:boolean
}

const jm:Profile ={
  name : 'jm',
  age : 10,
  married:false
}
jm.age = 30 // 수정가능

const jm2:Readonly<Profile> ={
  name : 'jm',
  age : 10,
  married:false
}

jm2.age = 30 //수정불가능



// 직접만들어보기
type Read<T> = {
  readonly [Key in keyof T]: T[Key]
}

const jm3:Read<Profile> ={
  name : 'jm',
  age : 10,
  married:false
}

jm3.age = 40

interface Profile2{
  readonly name?:string,
  readonly age?:number,
  readonly married?:boolean
}

type NotRead<T>={
  -readonly [Key in keyof T]-? : T[Key]
}

const jm4:NotRead<Profile2> = {
  name:'jm',
  age : 10,
  married:false
}

jm4.age=50// 수정가능