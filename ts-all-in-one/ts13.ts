// void의 두 가지 사용법

// interface A {
//     a: string;
// }

// const obj1: A = { a: "hello", b: "world" };

// const aa = { a: "hello", b: "world" };
// const objb: A = aa;

//void
//--함수로 void사용
function a(): void {
    return "3";
}
const b = a();

function a2(): void {
    return undefined;
}
const b2 = a2();

function a3(): void {
    console.log("작업 완료");
    return; // 값을 쓰지 않고 return만 하는 건 허용됨
}
const b3 = a3();
//--매서드로 선언할 때의 void
interface Human {
    talk: () => void;
}
const human: Human = {
    talk() {
        return "abc3";
    },
};

// 매개변수로 선언한 void
function c(callback: () => void): void {}
c(() => {
    return "test";
});
