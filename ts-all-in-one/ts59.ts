//보너스강의 never

//value가 any인 타입
interface VO {
  value :any;
}

interface StrictVO extends VO {
  value: 'test';
  extra: number; // VO에는 없지만 T가 될 수 있는 추가 속성
}

// const obj = {value : 'jm'}
// const a : VO =  {value : 'jm', what : 123} //객체를 이렇게 바로 넣으면 잉여속성검사가 일어남
const obj = {value : 'jm', what : 123}
const a : VO =  obj;

//<T는 VO여야한다는 제약> 라고 생각하면 안됨. <T == VO> 라고 생각하면 안된다. 부분집합이다.
//: T는 반환값. 
// 근데 {value : 'test'} 모양이 T인데 왜 안됨?
const returnVO = <T extends VO>() : T => {
  return {value : 'test'}; 
  //에러. 'T' could be instantiated with a different subtype of constraint 'VO' = VO의 다른 서브타입이 될 수 있다.
}




const result1 = returnVO<StrictVO>(); // 호출하는 순간: T는 이제 StrictVO입니다!
const result2 = returnVO<never>(); //never는 "절대 일어날 수 없는" 혹은 "값이 없음"을 의미하는 타입인데, 함수는 { value: 'test' }라는 "실제 값"을 던져주고 있습니다.
