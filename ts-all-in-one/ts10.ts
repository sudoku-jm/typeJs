//타입 애일리어스와 인터페이스의 상속(extends)

//타입 애일리어스의 상속
type Animal = { breath: true };
type Poyouryu = Animal & { breed: true }; // 상속
type Human = Poyouryu & { think: true }; //상속

// & 이므로 모두 만족해야한다. 하나라도 빠지면 에러남
// 타입을 뭔가 상속하는 느낌.
const jeongmin: Human = { breath: true, breed: true, think: true };

//타입의 좋은점은 자리에 마음대로 가져다 넣을 수 있다는 것
const test: Animal & { eat: true } = { breath: true, eat: true };

//인터페이스 상속
// 객체지향프로그래밍을 할 때는 인터페이스를 쓰는 편
interface A {
    breath: true;
}
interface B extends A {
    breed: true;
}
interface C extends B {
    think: true;
}

const jeongmin2: C = { breath: true, breed: true, think: true };

// 타입과 인터페이스간에 서로 가능하다.
// interface가 type을 extends 가능, 반대로도 가능
// 명확하게 두개가 구분된건 아니다
// 단지, '표현 방식의 차이'가 실제 사용할 때 핵심이라고 생각!
