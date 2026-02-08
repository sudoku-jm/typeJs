// 추상클래스
//abstract ? class를 미리 모양만 만들어둠.
abstract class B {
  readonly a: string = "abc";
  b: string = "eee";
  c: string = "test";
  abstract method(): void;
  method2() {
    //추상클래스도 메소드 갖고 있을 수 있음.
    return "3";
  }
}
//실제 구현은 여기서 함
class C extends B {
  method() {
    //abstract한것은 상속받았을 때 반드시 구현해야한다.
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}
new C().a;
new C().b;
new C().c;
