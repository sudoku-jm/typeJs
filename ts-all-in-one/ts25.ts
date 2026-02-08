//implements, private, protected
interface A {
  readonly a: string;
  b: string;
}

class B implements A {
  readonly a: string = "abc";
  b: string = "eee";
  c: string = "test";
  method() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}
class C extends B {
  method() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}
new C().a;
new C().b;
new C().c;
