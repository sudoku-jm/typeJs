// filter 제네릭 분석

interface Array<T> {
  // 같은 함수가 여러 가지 방법으로 사용되는 경우에는 이런 식으로 타입이 여러 번 선언되어 있을 수 도 있다.

  //T가 넘버면 나머지 T도 넘버.

  filter(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any,
  ): T[];

  // 머릿속으로 하기 어려우니 시각적으로 바꿔봄.
  filter<S extends T>(
    predicate: (value: T, index: number, array: readonly T[]) => value is S,
    thisArg?: any,
  ): S[];
  filter<S extends number | string>(
    predicate: (
      value: number | string,
      index: number,
      array: number | string,
    ) => value is number | string,
    thisArg?: any,
  ): number | string[];

  map(
    callbackfn: (value: number, index: number, array: this) => number,
    thisArg?: any,
  ): Int8Array<ArrayBuffer>;
}

//홀수만 뽑기
const filtered = [1, 2, 3].filter((value) => value % 2);

//string만 뽑기
const isStringFilter = ["1", 2, "3", 4, "5"].filter(
  (value) => typeof value === "string",
); // ['1','3','5'] string[]
// 타입스크립트가 추론을 잘 못하고 있다.

const predicated = (value: number | string): value is string =>
  //원하는 S(string) 으로 조작
  typeof value === "string";
const isStringFilter2 = ["1", 2, "3", 4, "5"].filter(predicated);
const test = ["1", 2].filter<string>(predicated);
