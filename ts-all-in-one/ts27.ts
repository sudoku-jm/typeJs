//옵셔널, 제네릭 기능들
function abc(a: number, b?: number, c?: number) {
  //물음표는 있어도되고 없어도 된다.
  //물음표는 항상 속성명 뒤에 넣는다. (속성명? : 타입)
}

//아래와 같이 1개~3개 다 된다.
abc(1);
abc(1, 2);
abc(1, 2, 3);
abc(1, 2, 3, 4);

//매개변수 정해진 갯수가 없으면
function abc2(...arg: number[]) {}

abc2(1);
abc2(1, 2);
abc2(1, 2, 3);
abc2(1, 2, 3, 4);

//옵셔널은 인터페이스나 타입에서도 된다.
let obj: { a: string; b?: string } = { a: "hello", b: "world" };
let obj2: { a: string; b?: string } = { a: "hello" }; //속성명?:타입 이라서 b가 있어도 그만 없어도 된다.
let obj3: { a: string; b?: string } = { a: "hello", b: "test", c: "test2" };
obj = { a: "hello" };
