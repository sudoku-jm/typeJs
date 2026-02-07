//타입 좁히기(타입 가드)

//객체가 있으면 tag?label을 달아두듯이 이렇게 해두는 습관을 길러두면 좋다.
// const human = { type: "human" };
// const dog = { type: "dog" };
// const cat = { type: "cat" };

// 타입을 달아두지 않았다면, 각 객체의 특성으로 찾는다.
// const human = { talk() };
// const dog = { bow() };
// const cat = { meow() };

//=============커스텀 타입 가드(is,형식 조건자)

interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
function catOrDog(a: Cat | Dog): a is Dog {
  //타입 판별을 여러분이 직접 만드세요.
  // 여기선 강아지임을 찾는것을 직접 만든다.
  if ((a as Cat).meow) {
    // 이거는 고양이일 때
    return false;
  }
  return true;
}
//타입을 구분해주는 커스텀 함수를 여러분이 직접 만들 수 있어요.
// typeof, instanceof, in , Array.isArray등 활용해서 뭔지 찾기를 했었다.

function pet(a: Cat | Dog) {
  if (catOrDog(a)) {
    //true 일때 = 강아지일때
    console.log(a.bow);
  }
  if ("meow" in a) {
    // 고양이일 때
    console.log(a.meow);
  }
}

// const cat: Cat | Dog = { meow: 3 };
// if (catOrDog(cat)) {
//   console.log(cat.meow);
// }
// if ("meow" in cat) {
//   console.log(cat.meow);
// }
