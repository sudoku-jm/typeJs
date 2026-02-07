// unknown과 any

interface A {
  talk: () => void;
}
const a: A = {
  talk() {
    return 3; // 무시됨
  },
};

// const b: A = a.talk(); // a가 반환하는 타입이 void. A는 talk()라는 메서드를 가진 객체만 들어올 수 있음. 그래서 안됨.

//  a.talk(); void 반환.
const b: unknown = a.talk(); // 정체를 알 수 없는 무언가 unknown이 됨. void 타입인 a.talk()의 결과물을 담는 데는 아무 문제가 없습니다.

b.talk(); // b는 unknown 형식어야한다 그래서 에러남.
//unknown은 "무슨 타입인지 모르니까 위험해서 아무것도 시킬 수 없어!"라는 상태
/*
변수 b의 상태: unknown (이름표에 '정체불명'이라고 적힘)

타입스크립트의 판단: "이 녀석은 숫자일 수도 있고, 문자일 수도 있고, 심지어 null일 수도 있어. 뭐가 들어있을지 모르니까 어떠한 메서드(talk 등)나 속성도 가지고 있지 않다고 가정해야 안전해!"

any와 비교
any: "얘는 뭐든지 다 될 수 있어! talk가 있다고? 그래, 아마 있겠지. 실행해 봐!" (타입스크립트가 검사를 포기함)

unknown: "얘는 뭐든지 될 수 있지만, 아직 뭔지 몰라. talk가 있다고? 증거를 가져오기 전까진 안 믿어!" (타입스크립트가 안전을 위해 막아섬)
*/

(b as A).talk(); // b의 타입을 A와 같이 강제로 정해주고, 정해진 타입만 쓸 수 있게 함 talk()매소드가 있으니 이건 쓸 수 있음.

try {
} catch (error) {
  (error as Error).message;
}

// undefined는 void에 대입가능 하다
function c(): void {
  return undefined;
}
// null void에 대입불가능 하다
function d(): void {
  return null;
}
