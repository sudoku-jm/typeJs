// 오버로딩

// 같은 타입을 여러번 선언하는 것을 오버로딩이라고 한다.
// function add(x:number, y:number):number;
// function add(x:string, y:string):string;
// function add(x:number | string, y:number|string){
  //   return x + y;
  // }


  //==========
  //declare 디클레어로 하면 type정희만 하고 실제 코드는 다른 곳에 있다고 Typescript를 속일 수 있다.
// declare function add(x:number, y:number):number;
// declare function add(x:number, y:number,z:number):string;
// declare function add(x:string, y:string,z?:string):string;
// add(1,2)
// add(2,3,4)
// add('a','b')

//========

interface Add {
  //인터페이스 안에서 오버로딩 된다  
  (x: number, y: number): number;
  (x: string, y: string): string;
}
const add: Add = (x:any, y:any) => x + y;
//interface에서는 오버로딩을 했으면, 구현부에서는 :any를 해도 알아서 걸러진다.

add(1,'2') // 에러남  Argument of type 'number' is not assignable to parameter of type 'string'



class A{
  //클래스 안에서도 오버로딩이 된다.
  add(x:number,y:number):number;
  add(x:string,y:string):string;
  add(x:any,y:any){
    return x + y
  }

  //한 줄로 못하겠으면 각각의 경우를 전부 여러 번 만들어 주면 타입스크립트가 알아서 여러개 중에 하나에 걸리게 해준다
}

const c = new A().add('1','2');

const d = new A().add(1,2);
const e = new A().add('1',2) // 에러남 
//The call would have succeeded against this implementation, but implementation signatures of overloads are not externally visible.



// =========================
// class Calculator {
//   // [선언부]: 숫자가 들어오면 숫자를 돌려주겠다고 엄격하게 약속함
//   add(a: number, b: number): number;

//   // [구현부]: any를 썼기 때문에 내부에서 무슨 짓을 해도 에러가 안 남
//   add(a: any, b: any) {
//     // ⚠️ 실수 발생: a가 숫자인데 문자열 메서드인 .split()을 써버림!
//     // TypeScript는 any니까 에러를 안 내지만, 실제 실행(Runtime)하면 터집니다.
//     return a.split(''); 
//   }
// }

// const cal = new Calculator();
// cal.add(1, 2); // 💥 실행 시점 에러: a.split is not a function

class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  // 구현부에서 any 대신 합집합(Union)을 사용!
  add(a: number | string, b: number | string) {
    // 이제 여기서 a.split('')을 치면 빨간 줄이 뜹니다!
    // "a가 number일 수도 있는데 split을 쓰면 안 돼!"라고 알려주는 거죠.
    return a + b; 
  }
}