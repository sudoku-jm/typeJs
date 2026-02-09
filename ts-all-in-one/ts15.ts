// void의 두 가지 사용법
interface A {
    talk: () => void;
}
const a: A = {
    talk() {
        return 3; //이렇게 쓰는건 상관없지만. 여기를 무시한다. 이 리턴값이 뭐든 간에 신경 쓰지않음. 원칙상 않넣는게 맞음
    },
};
const b = a.talk(); // b의 타입은 void

const b2 = a.talk() as unknown as number; //굳이 바꾸려면
const b3 = <number>(<unknown>a.talk()); //굳이 바꾸려면

const b4: number = a.talk(); // Type 'void' is not assignable to type 'number'. 할당불가
