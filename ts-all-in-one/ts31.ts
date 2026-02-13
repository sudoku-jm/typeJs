// filter 제네릭 분석

interface Arr<T>{
  // filter(callback : (item: T) => boolean):T[];
  //true인걸을 배열로 반환
  
  // filter(callback : (item: T) => item is T):T[];

  //d를 보면 string | number인데 string이라는 타입이 필요한 것.
  //새로운 타입 S를 넣어주고, 반환값도 새로운 배열 S[]
  filter<S extends T>(callback: (item:T) => item is S):S[];
  //is 커스텀 타입가드.


  //원본
  // filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];

  // filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
  
}

const a: Arr<number> = [1,2,3];

const b = a.filter((value) :value is number => value % 2 === 0) //[2] number[]


const c :Arr<number | string> = [1,'2',3,'4',5];
const d = c.filter((value) : value is string => typeof value === 'string'); // ['2','4'] string[]

const predicate = (v : string | number):v is number => typeof v === 'number'
const e = c.filter(predicate)