// void의 두 가지 사용법

// function forEach(arr: number[], callback: (el: number) => undefined): void; //선언부
// function forEach() {} //구현부

// 구현부를 따로 만들기 싫을 때는 declare를 선언해준다.
declare function forEach(
    arr: number[],
    callback: (el: number) => undefined,
    // callback: (el: number) => number,
    // callback: (el: number) => void,
): void; //선언부

// declare function forEach<T>(arr: T[], callback: (el: T) => void): void;
let target: number[] = [];

forEach([1, 2, 3], (el) => target.push(el));

forEach([1, 2, 3], (el) => {
    target.push(el);
});
