// JS 변환 시 사라지는 부분을 파악하자

// JS변환할 때 아래같은 것들은 사라진다. 아래 없이도 돌아가게 만들어야한다.
const a: string = "5"; // 콜론 타입
type Add = () => number; // 타입정의
interface Minus {} // 인터페이스
Array<string>; //제네릭

// 이렇게도 가능
//심화 - 타입, 사용함수 분리
function add(x: number, y: number): number; // 타입
function add(x, y) {
    //실제 코드
    return x + y;
}

//심화 - as
let aa = 123;
aa = "hello" as unknown as number; // 앞의 타입을 강제로 바꿔준다.
