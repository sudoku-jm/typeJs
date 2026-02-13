// 공변성과 반공변성

//====================1
// function a(x:string):number {
//   // 매개변수 에러
//   return 0
// }

// type B = (x:string|number) => number | string;  //리턴은  ok,
// const b:B = a; 


//====================2
// function a(x:string | number):number {
//   // 매개변수 ok
//   return 0
// }

// type B = (x:string) => number | string;  //리턴 ok,
// const b:B = a; 



let c:string | number = 5;
if(typeof c === 'string'){
  
}

