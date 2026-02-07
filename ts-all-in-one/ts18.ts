//타입 좁히기(타입 가드)

//=============타입체킹
// type B = { type: "b"; bbb: string };
// type C = { type: "c"; ccc: string };
// type D = { type: "d"; ddd: string };

// function typeCheck(a: B | C | D) {
//   if (a.type === "b") {
//     a.bbb;
//   } else if (a.type === "c") {
//     a.ccc;
//   } else {
//     a.ddd;
//   }
// }

// type B = { type: "b"; bbb: string };
// type C = { type: "c"; ccc: string };
// type D = { type: "c"; ddd: string };

// function typeCheck(a: B | C | D) {
//   if (a.type === "b") {
//     a.bbb;
//   } else if (a.type === "c") {
//     a.ccc; // 타입이 C또는 D
//   } else {
//     a.ddd;
//   }
// }

// 객체를 구분할 수 있다.
// 각 타입에서 type 속성이 다르고("b","c","d"와 같이), 속성이름이 다르다.(bbb,ccc,ddd)
type B = { type: "b"; bbb: string };
type C = { type: "c"; ccc: string };
type D = { type: "d"; ddd: string };

//타입으로 구분하기
function typeCheck(a: B | C | D) {
  if (a.type === "b") {
    a.bbb;
  } else if (a.type === "c") {
    a.ccc; // 타입이 C또는 D
  } else {
    a.ddd;
  }
}
//속성으로 구분하기 (in연산자)
function typeCheck2(a: B | C | D) {
  if ("bbb" in a) {
    // a객체 안에 bbb라는 속성이 있을 때
    a.type; // B
  } else if ("ccc" in a) {
    a.type; // C
  } else {
    a.type; //D
  }
}
