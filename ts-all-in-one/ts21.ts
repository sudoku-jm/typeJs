// {} 와 Object
/* 
2개의 타입이 객체를 의미하는 것으로 생각할 수 있는데,
문자열도 대입이 된다.

{} ,Object는 모든 타입이다. 겉보기에 객체라고 착각할 수 있다.(단 null | undefined 제외)

object는 모든 객체. 실제 객체는 작은소문자 object.

하지만, 실제 객체 타이핑은 object는 지양.
interface, type, class쓰자

object라는게 있다고만 알아두자.

unknown은 나중에 타입을 직접 정해줘야한다.
*/
const x: {} = "hello"; //모든 타입
const y: Object = "hi"; //모든 타입
const xx: object = "hi"; //문자가 안됨. 실제 객체는:object
const yy: object = { hello: "world" };
const z: unknown = "hi";

const a: {} = null; //null안됨
const b: {} = undefined; //undefined안됨
const c: {} = true;
const d: {} = 1;

//unknown도 모든 값을 받을 수 있다.
// unknown={} | null | undefined
if (z) {
  z; // if문 안에 넣으면 타입이 {}로 나온다.
  // 이건 타입이 객체라는게 아니라, 모든 type을 가리킨다는 것.
} else {
  z; //if문 안에 들어가면 null, undefined는 떨어져 나감.
}
//즉 unknown은 모든 타입과, undefined가 합쳐진것.
