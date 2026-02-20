// Utility types - bind

 const jm = {
    name : 'jm',
    sayHello(this : {name : string},age :number){
        console.log(`hi ${this.name}`);
    }	
 }
 
 const sayhello = jm.sayHello

 const sayHi = jm.sayHello.bind({name : 'mini'});

 sayHi(20); // 아무 인자없이 "hi mini" 출력할 수 있는 함수.