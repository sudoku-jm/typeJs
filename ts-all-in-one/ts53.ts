// Utility types - bind


/*

 bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;
 bind<T, A extends any[], B extends any[], R>(this: (this: T, ...args: [...A, ...B]) => R, thisArg: T, ...args: A): (...args: B) => R;
*/


function a(this : Window | typeof obj, param : string){
    // 함수 첫번째 인자 자리에 this가 있는건 특수한 문법
    //실제 인자가 아님: 함수 a()를 실행할 때 a(window) 처럼 값을 전달하라는 뜻이 아님.
    // 타입스크립트용 가이드: "이 함수 내부에서 사용할 this는 반드시 Window 타입이거나 obj의 타입이어야 해!"라고 명시하는 일종의 제약 조건
    // 컴파일 후 사라짐: 이 this 부분은 자바스크립트로 변환(컴파일)될 때 자동으로 삭제

    /*
    함수 a는 상황에 따라 this가 바뀔 수 있도록 설계되었습니다.
        - Window: 일반적인 브라우저 환경에서 함수를 그냥 호출했을 때의 this입니다.
        -typeof obj: 우리가 만든 obj 객체(이름이 'jm'인 객체)의 타입을 말합니다.
    */
    console.log(this.name , param) //Window 객체에도 name 속성이 있고 obj에도 name이 있기 때문에 타입 에러 없이 통과
    // return this.name
}

const obj = { name : 'jm'}
const b = a.bind(obj,'test')
b(); // 'jm'

/*
bind 메서드는 "함수의 this를 내가 정한 녀석으로 박제한 새로운 함수를 만들어줘"
1. const b = a.bind(obj)를 하면, 이제 b라는 함수 내부의 this는 무조건 obj가 됩니다
2. 이때 타입스크립트는 a에 정의된 this 타입(Window | typeof obj)과 우리가 bind에 넣은 obj를 비교합니다.
3. obj는 typeof obj에 해당하므로 타입 체크를 무사히 통과합니다.
*/

const c = a.bind(123); // ❌에러 발생!



type T = ThisParameterType<typeof a>
type NoThis = OmitThisParameter<typeof a>