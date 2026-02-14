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