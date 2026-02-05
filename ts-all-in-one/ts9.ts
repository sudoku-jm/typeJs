//union(|)과 intersection(&)

// function add(x: string | number, y: string | number): string | number {
//     return x + y;
// }
// const result: string | number = add(1, 2);
// add(1, 2);
// add("1", "2");
// add(1, "2");

// type A = string & number; // 스트링이면서 넘버여야한다.
// //이런게 있을까?
// const a: A = 1;

// type B = { hello: "world" } & { zero: "cho" }; //객체는 가능하다
// const b: B = { hello: "world", zero: "cho" }; //에러안남
// const b2: B = { hello: "world" }; // & 조건에 만족하지 않아 에러남

// type C = { hello: "world" } & { zero: "cho" }; // AND도 되고
// type D = { hello: "world" } | { zero: "cho" }; // OR도 된다

// const test: C = { hello: "world" };
// const test2: D = { hello: "world" };

type A = {
    a: string;
};
type B = {
    b: string;
};

const aa: A | B = { a: "hello", b: "world" };
const bb: A & B = { a: "hello", b: "world" };
