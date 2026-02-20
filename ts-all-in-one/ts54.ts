// Utility types - bind
/*
    흔히 사용하는 bind를 사용해서 this를 바꿔줌
*/
 const jm = {
    name : 'jm',
    sayHello(){
        console.log(`hi ${this.name}`);
    }	
 }
 
 const sayhello = jm.sayHello
 //jm.sayHello()라고 직접 호출하면 아무 문제 없습니다. 하지만 함수를 따로 떼어내서 어딘가에 전달할 때 문제가 생깁니다.
 const sayHi = jm.sayHello.bind({name : 'mini'});
 //this자리에 있는 name을 새로운 객채로 바인딩
 //bind를 사용하면 어디든 간에 앞으로 this는 무조건 {name: 'mini'}라고 강제로 고정
 sayHi();