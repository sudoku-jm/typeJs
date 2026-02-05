// enum, keyof, typeof

//enum - 위에서 부터 순서대로 0,1,2,3이라는 값이 부여된다
// const enum EDirection {
//     Up, //0
//     Down, //1
//     Left, //2
//     Right, //3
// }

// 첫 값을 넣으면 뒤에 순서대로 들어감
// const enum EDirection {
//     Up = 3,
//     Down,
//     Left,
//     Right,
// }

//불규칙하게 원하는 값을 넣을 수 있음. 문자열도 가능
// const enum EDirection {
//     Up = 3,
//     Down = 6,
//     Left = 2,
//     Right = "Right",
// }

// const a = EDirection.Up;
// const b = EDirection.Down;
// const c = EDirection.Left;
// const d = EDirection.Right;

// 이렇게 하나하나 지정해서 쓸 수 있지만
const ODirection2: { Up: 0; Down: 1; Left: 2; Right: 3 } = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
}; //as const 부분이 타입부분.

//이런식으로도 쓸 수 있음 readonly까지 붙어서 읽기전용으로 됨. 이게 더 편한듯
const ODirection = {
    Up: 3,
    Down: 4,
    Left: 6,
    Right: 1,
} as const; //as const 부분이 타입부분.

const f = ODirection.Up;
const g = ODirection.Left;

//사용===
//enum은 직접 타입으로도 사용할 수 있다.
const enum EDirection {
    Up = 3,
    Down = 4,
    Left = 6,
    Right = 1,
}

// Using the enum as a parameter
function walk(dir: EDirection) {}

walk(EDirection.Left); // 결과 6

//enum쓰기 싫을때. 안쓸때는 아래와 같이.

const ODirection3 = {
    Up: 3,
    Down: 4,
    Left: 6,
    Right: 1,
} as const;
// It requires an extra line to pull out the keys
type Direction = (typeof ODirection3)[keyof typeof ODirection3];
// type Direction2 = ODirection3[keyof typeof ODirection3];
function run(dir: Direction) {}
run(ODirection3.Right);

//keyof
const obj = {
    a: "123",
    b: "hello",
    c: "world",
} as const;

// a,b,c만 꺼내오고싶다.
// type Key = keyof obj; // obj는 값이라서 타입으로 쓰려고 함.
type Key = keyof typeof obj; // typeof를 붙여줘야한다.
type Value = (typeof obj)[keyof typeof obj]; // Value만 가지고 오기
