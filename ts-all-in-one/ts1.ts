//변수
const a: number = 5;
const b: string = "5";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for("abc");
const g: bigint = 1000000n;
const h: any = "123"; //아무거나 다 됨 boolean, string, number... 그냥 js 변수와 같음.
const i: true = true; // 값을 고정해버림. true , false가 아니라 무조건 true만 받을 거임.
const j: 5 = 5; // 값을 5로 고정해버림

//매개변수
//매개변수 바로 뒤가 리턴타입 자리임. (매개변수):리턴타입
function add(x: number, y: number): number {
    return x + y;
}

//화살표 함수
// const bbb = () => {};
// const 함수명(매개변수타입) => 리턴타입 = (매개변수) => {};
const bbb: (x: number, y: number) => number = (x, y) => x + y;

// type으로 타입을 선언하는 방식 = 타입 애일리어스(type alias)
type CCC = (x: number, y: number) => number;
const ccc: CCC = (x, y) => x + y;

//인터페이스가 있는데 나중에 타입스크립트의 핵심이 된다.
interface DDD {
    (x: number, y: number): number;
}
const ddd: DDD = (x, y) => x + y;

//객체
// const obj = { lat: 37.5, lon: 127.5 };
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

//배열
// const arr1 = ['aaa','bbb'];
const arr1: string[] = ["aaa", "bbb"];

// const arr2 = [1,2];
const arr2: number[] = [1, 2];
const arr3: Array<number> = [1, 2]; // 이렇게 사용하는 방식도 있다. <> 꺽쇠를 '제네릭'이라고 부른다

//튜플 = 길이가 고정된 배열 , 3개의 타입을 만들었으면 들어가는 값의 갯수도 똑같이 맞춰줘야한다.
const arr4: [number, string, boolean] = [1, "a", false];

// 에러메시지. Type '[number, string, false, string]' is not assignable to type '[number, string, boolean]'. Source has 4 element(s) but target allows only 3.
const arr5: [number, string, boolean] = [1, "a", false, "addtest"];
