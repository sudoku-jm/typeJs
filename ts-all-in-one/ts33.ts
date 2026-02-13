// 공변성과 반공변성

function a(x:string):number | string{
  // 매개변수 string을 받아서 number또는 string을 리턴
  // (x:string) => number 또는 (x:string) => string;
  
  return 0
}


type B = (x:string) => number;  //string을 받아서 number만 리턴할거다.
type B = (x:string) => string; //string을 받아서 string만 리턴할거다.

const b:B = a; // 어느쪽이든 고장남.

//b('1') 과 같이 string만 넣을 수 있다. b는 a보다 작은 그릇.