// 공변성과 반공변성

//공변성
function a(x:string):number{
  //매개변수 string 받아 number를 리턴
  return +x
}

a('1') //1

type B = (x:string) => number | string; 

const b:B = a; //이렇게 넣을 수 있을까? 
// a는 string 받아서 number 리턴이고 B는 string받아서 number|string리턴인데 대입이 된다

//???????
//리턴값은 더 넓은 타입으로 대입 가능하다.
// b('1') 실행했을 때 number가 나오든 string이 나오든 관계없다고 선언함.
// a는 항상 number를 준다.
// 기대치 부합해서 공변성을 가진다고 함.

