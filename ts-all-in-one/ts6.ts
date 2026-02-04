//원시 래퍼타입, 템플릿 리터럴 타입, rest, 튜플
let arr: string[] = [];
let arr2: Array<string> = [];

function rest(...args: string[]) {
    console.log(args);
}
// rest(1, 2, 3);//❌
rest("a", "b", "1");

function rest2(a: string, ...args: string[]) {
    console.log(a, args); //a,["b","1"]
}
rest2("a", "b", "1");

const tupleZero: [] = [];
tupleZero.push(1); //❌

const tuple2: number[] = [];
tuple2.push(1);
tuple2.push(2);

// 타입스크립트 바보가 된다.
// const tuple: [string, number] = ["1", 1];
// tuple[2] = "hello"; //❌ 3번째 자리에 넣으려고해서 에러남
// tuple.push("hello"); // 얘는 왜 못막음?

//읽기전용으로 해버림 readonly
const tuple: readonly [string, number] = ["1", 1];
tuple[2] = "hello"; //❌

tuple.push("hello"); // ❌
