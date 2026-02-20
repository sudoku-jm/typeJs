// Utility types - infer 

function zip(x:number, y:string, z: boolean):{x:number, y:string,z:boolean}{
  /*
    타입스크립트 내부적으로 zip의 매개변수는 [x:number, y:string, z: boolean] 이렇게 보임.(튜플)
  */
  return {x,y,z}
}

//type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

//zip 함수의 매개변수의 타이블 가지고 오고 싶음
// <>안에 바로 함수를 넣을 수 없기에 <typeof 함수명>으로 가지고 와야한다
type Params = Parameters<typeof zip> // 결과 [x:number, y:string, z: boolean] 
type first = Params[0] //인덱스로 접근가능.

// Parameters======직접 만들기

//(...args:any) => any 인자가 몇개든 ... , 어떤 타입:any이든 상관없음
// => any 결과값으로 어떤것을 반환하든 상관없음
//T extends (...args: any) => any "T는 함수라는 거대 집합의 일원이어야한다"

// infer 는 타입스크립트가 알아서 추론하는 것. extends에서만 사용 가능.
// T extends (...agrs:infer A) => any ? A : never 추론 조건 ? 추론 성공 시의 값 : 추론 실패 시의 값
// 매개변수 자리를 추론하라는 것.

// 들어오는 형태는 <T extends (...args:any) => any> 에서, T는 (...args:any) => any 이므로 함수 형태가 들어온다.
// 그 함수형태는 T extends (패턴) => 결과 의 형태로써 타입을 분석하려고 한다.
//(패턴)안에서의 역할을 보면,
// infer:A 로 들어오는 A를 추론한다.
// (...agrs:infer A) 근데 그게 함수 형태다.
// ...args라서 함수의 파라미터 하나씩 전체 추론한다.
// (...agrs:infer A) => any 전체 추론한 것 의 결과로 어떤 결과든 상관없이 일단 결과가 나온다.( => any)
// 결과 부분
// 어떠한 결과가 있으면 그 결과는 A, 없으면 never.
// 결과값은 infer :A로 인한 타입 추론의 결과이다.

// ...args 로 인자를 돌면서 
type P<T extends (...args:any) => any> = T extends (...agrs:infer A) => any ? A : never;

type Params2 = P<typeof zip>


//======응용해서 리턴값을 찾아보기 (함수의 리턴타입을 가져오고싶다)
//infer의 위치만 잘 바꿔주면 됨

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type Return1 =ReturnType<typeof zip>


function func(x:number, y:string, z: boolean):number{
  /*
    타입스크립트 내부적으로 zip의 매개변수는 [x:number, y:string, z: boolean] 이렇게 보임.(튜플)
  */
  return 1
}
// 1. 똑같이 함수 제한줌 <T extends (...args:any) => any> 
// 결과 => any 였던 건 값을 리턴.
// => infer : A를 사용함으로써 결과값의 타입 추론 infer:A을 하게 된다
type R<T extends (...args:any) => any> = T extends (...agrs: any) => infer A ? A : never;

type Return2 = R<typeof zip>

type Return3 = R<typeof func>