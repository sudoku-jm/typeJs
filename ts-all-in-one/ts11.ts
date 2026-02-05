//타입 애일리어스와 인터페이스의 상속(extends)
type A = {};
type A = {};
type A = {};

interface B {
    talk: () => void;
}
interface B {
    eat: () => void;
}
interface B {
    shit: () => void;
}
const b: B = { talk() {}, eat() {}, shit() {}, sleep() {} };

interface B {
    // 추가
    sleep: () => void;
}

//네이밍 룰

// 룰1
type TType = string | number; // type에는 T를 붙임
interface IProps {} //interface에는 I를 붙임
enum EHello {
    //enum에는 E를 붙임
    Left,
    Right,
}

const a: IProps = {};
