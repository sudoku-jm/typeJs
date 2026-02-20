// Utility types - ConstructorParameters,InstanceType

// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

// type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

// class는 타입으로 그대로 쓸 수 있다.
class A{
  a:string;
  b:number;
  c:boolean;
  constructor(a:string,b:number,c:boolean) {
    this.a = a
    this.b = b
    this.c = c
  }
}

const c = new A('123',456,true)
type C = ConstructorParameters<typeof A> //typeof 클래스가 생성자
type I = InstanceType<typeof A> 

const a:A = new A('123',456,false) //new 붙여서 실제 객체로 만든게 인스턴스다.


/*
ConstructorParameters
T가 생성자(constructor)라는 것을 알려주는 것 abstract new (...args: any) => any .
*/