// Utility types -promise - awatied

const p1 = Promise.resolve(1)
    .then((a) => a + 1)
    .then((a) => a + 1)
    .then((a) => a.toString());
const p2 = Promise.resolve(2);
const p3 = new Promise((res, rej) => {
		// res에 인자가 없으므로 void나 unknown으로 추론.
    setTimeout(res, 1000);
});

/*
    Promise.all() : Promise여러개 모두 동시에 실행해서 전부 다 끝났을 때 결과를 돌려줌.

    프로미스는 Promise<결과값> 타입으로 표시.
*/
Promise.all([p1, p2, p3]).then((result) => {
    console.log(result); // ['3',2, undefiend]
});
