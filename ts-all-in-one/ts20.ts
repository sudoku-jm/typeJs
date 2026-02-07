// 타입 가드

// const isRejected = (
//   input: PromiseSettledResult<unknown>,
// ): input is PromiseRejectedResult => input.status === "rejected";
// const isFulfilled = <T>(
//   input: PromiseSettledResult<T>,
// ): input is PromiseFulfilledResult<T> => input.status === "fulfilled";

// const promises = await Promise.allSettled([
//   Promise.resolve("a"),
//   Promise.resolve("b"),
// ]);
// const errors = promises.filter(isRejected);

// isRejected 만 걸러내기 타입가드
/* 기본지식.
비동기 Promise를 실행하면 -> 기다림 pending 상태에서 -> 완료시 Settled가 된다. settled에는 Resolved(성공), Rejected(실패)가 있다.
성공했든 실패했든 Settled이다.

promises.then().catch()  then이든 catch든 settled이다. then은 resolved이고 catch는 reject이다.
 */
const isRejected = (
  input: PromiseSettledResult<unknown>,
): input is PromiseRejectedResult => {
  //is가 붙어 있다.
  return input.status === "rejected";
};

// 성공만 걸러내기 타입 가드
const isFulfilled = <T>(
  input: PromiseSettledResult<T>,
): input is PromiseFulfilledResult<T> => {
  return input.status === "fulfilled";
};

//promises에서
const promises = await Promise.allSettled([
  Promise.resolve("a"),
  Promise.resolve("b"),
]);

const err = promises.filter((promise) => promise.status === "rejected"); // 실패한 것만 모아둔 것
// const errors = promises.filter(isRejected); //실패하는것만 걸러내고 싶을 때
// const result = promises.filter(isFulfilled); //성공하고싶은것만 걸러내고 싶을 때
