// Utility types - flat
/*
flat 생김새

flat<A, D extends number = 1>(
this: A,
depth?: D,
): FlatArray<A, D>[];


*/

/*
flat() 배열들을 하나씩 낮춤
1차원 배열 그대로 
2차원 > 1차원
3차원 > 2차원
*/
const a = [1,2,3,[1,2],[[1],[2]]].flat(); //[1,2,3,1,2,[1],[2]]

const b = [1,2,3,[1,2]].flat(); //[1,2,3,1,2]

//한번에 2차원씩 낮춤
const c = [1,2,3,[1,2],[[1],[2]]].flat(2); //[1,2,3,1,2,1,2]


/*
FlatArray<> 생김새

type FlatArray<Arr, Depth extends number> = {
    done: Arr;
    recur: Arr extends ReadonlyArray<infer InnerArr> ? FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]>
        : Arr;
}[Depth extends -1 ? "done" : "recur"];

*/


type A = {
    name : string,
    age : number,
}

type B = A['age'] // :number

//조건: 1 extends number (숫자 1은 number 타입에 속하는가?)
type B2 = A[1 extends number ? 'age' : 'name'] // :number

//조건: '1' extends number (문자열 '1'은 number 타입에 속하는가?)
type B3 = A['1' extends number ? 'age' : 'name'] // :string



type C = 3 - 1; //❌ 타입스크립트에서는 빼기가 안됨. 