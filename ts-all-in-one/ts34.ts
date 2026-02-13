// 공변성과 반공변성

function a(x:string | number):number {
  // 매개변수 string 또는 number
  // (x:string) => number 또는 (x:number) => number 매개변수는 이렇게 보지말자..
  //매개변수는 리턴값과 반대다.
  
  return 0
}


type B = (x:string) => number;  //string을 받아서 number만 리턴할거다.

const b:B = a; // 매개변수는 B가 더 좁은 타입이어도 대입이 된다.

