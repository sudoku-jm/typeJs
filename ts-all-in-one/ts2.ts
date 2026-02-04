// 타입추론
const a = "5";
const a: string = "5"; //오히려 이렇게 했을 때 더 문제.
// const니까 어짜피 평생 5임.

const b = 5;
const c = true;
const d = undefined;
const e = null;

// function add(x: number, y: number): number {
//     return x + y;
// }
// const result = add(1, 2);

// function add(x: number, y: number) {
//     return x + y;
// }
// const result = add(1, 2); // result의 타입을 추론해준다.

// const arr: string[] = ["aaa"];
const arr = ["aaa"];

// const arr2: number[] = [1,2,3];
const arr2 = [1, 2, 3];

// const arr3: [number, string, boolean] = [1, "a", true];
const arr3 = [1, "a", true];

// const arr4: [number, string, number, string] = [1, "a", 2, "b"];
const arr4 = [1, "a", 2, "b"];

// const obj: { lat: number; lan: number } = { lat: 37.5, lan: 127.5 };
const obj = { lat: 37.5, lan: 127.5 };
