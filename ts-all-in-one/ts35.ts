// 공변성과 반공변성

function a(x:string):number {
  // 매개변수 string 

  return 0
}


type B = (x:string|number) => number;  

const b:B = a; 

