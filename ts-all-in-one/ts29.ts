//기본값 타이핑

// const a = (b = 3, c = 5) => {}  기본값을 넣을 수 있었다.
const a = (b: number = 3, c: number = 5) => {
  return "3";
};

//객체 기본값
// const b = (b = { children: "jm" }) => {};
// 객체 기본값 타입
const b = (b: { children: string } = { children: "jm" }) => {};

//리액트에서 이렇게만 되어있으면 헷갈리기 때문에
// const add = </T>(x: T, y: T) => ({ x, y });

// 이렇게 기본 값 같은거 하나 넣어 줄 수 있다.
// const add = <T = unknown>(x: T, y: T) => ({ x, y });

//제네릭도 기본 값 넣어줄 수 있다
const add = <T extends unknown>(x: T, y: T) => ({ x, y });
add(1, 2);
