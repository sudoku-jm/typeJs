// Utility types - Exclude

interface Profile {
  name :string,
  age:number,
  married:boolean
}

type E<T , S> = T extends S ? 'never' : T;
// 'name' 이 'name'인가 > never
// 'age' 가 'name'인가 > 'age'
// 'married'가 'name'인가 > 'married'

type P = Exclude<keyof Profile, 'name'>
type P2 = E<keyof Profile, 'name'>