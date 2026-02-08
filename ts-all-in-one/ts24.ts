//implements, private, protected
interface A {
  readonly a: string;
  b: string;
}

//class는 interface를 implements(구현)한다.
//interface가 있으면 class는 인터페이스를 따라야한다.
// class B implements A {
//   a: string = "abc"; //a라는 속성이 있어야한다
//   b: string = "eee"; //b라는 속성이 있어야한다
// }
// class C extends B {}
// new C().a;
// new C().b;
//============================
class B implements A {
  private a: string = "abc";
  //private 속성은 class B안에서만 쓸 수 있다.
  protected b: string = "eee";
  public c: string = "test"; // 없어도 됨. 기본임
  method() {
    console.log(this.a); //여기선 private 사용가능.
    console.log(this.b); //protected도 안에서 사용가능
    console.log(this.c); //public은 아무렇게나 접근이 됨.
  }
}
class C extends B {
  method() {
    console.log(this.a); //private는 상속에서 사용불가
    console.log(this.b); //protected도 상속에서 사용가능
    console.log(this.c); //public은 아무렇게나 접근이 됨.
  }
}
new C().a; //ptivate는 접근할 수 없음
new C().b; //protected는 밖에서 접근할 수 없음
new C().c; //public은 아무렇게나 접근이 됨.

//            public   protected   private
// 클래스내부   O       O             O
// 인스턴스     O       X            X
// 상속클래스   O       O            X
