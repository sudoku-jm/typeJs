// Utility types - bind
/*
    흔히 사용하는 bind를 사용해서 this를 바꿔줌
*/
function add(a:number, b:number, c: number, d:number ,e:number, f:number) {
 return a+b+c+d+e+f   
}

const add1 = add.bind(null) 
add1(1,2,3,4,5,6)

const add2 = add.bind(null,1) //새롭게 바인딩된 함수 add2는 나머지 매개변수만
add2(2,3,4,5,6)

const add3 = add.bind(null,1,2)
add3(3,4,5,6)

const add4 = add.bind(null,1,2,3)
add4(4,5,6)

const add5 = add.bind(null,1,2,3,4)
add5(5,6)

const add6 = add.bind(null,1,2,3,4,5)
add6(6)