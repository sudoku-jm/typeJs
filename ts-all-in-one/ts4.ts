// never타입과 느낌표(non-null assertion)

// JS변환할 때 아래같은 것들은 사라진다. 아래 없이도 돌아가게 만들어야한다.
const a: string = "5"; // 콜론 타입
type Add = () => number; // 타입정의
interface Minus {} // 인터페이스
Array<string>; //제네릭

// never
// try {
//     const array = []; // noImplicitAny가 false일 때
//     array.push("hello");
//     array[0];
// } catch (error) {
//     error;
// }

// 빈 배열을 지정할 때는 타입을 꼭 선언해주어야한다
try {
    const array: string[] = [];
    array[0];
} catch (error) {
    error;
}

//최대한 ! 대신 if를 쓸 것.
// const head = document.querySelector("#head")!;
// const head: Element = document.querySelector("#head")!;
// console.log(head);

// const head = document.querySelector("#head");
// head.innerHTML = 'hello'

const head = document.querySelector("#head");
if (head) {
    head.innerHTML = "hello world";
    console.log(head);
}
