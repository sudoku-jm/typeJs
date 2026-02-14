// 타입스크립트는 건망증이 심하다 + 에러 처리

//Axios 코드 만들어 놓기
interface Axios{
  get() : void
}
/*
원본의 Error 실제 에러 인터페이스는 3가지 속성이 다 임.
interface Error {
    name: string;
    message: string;
    stack?: string;
}
*/
interface CustomError extends Error{
  //response라는 속성을 추가해줬다.
  response? : {
    data :any
  }
}
declare const axios: Axios ;

// (async () => {
//   try{
//       await axios.get()
//   }catch(err:unknown){
//     const customError = err as CustomError
//     console.error((err as CustomError).response?.data)
//     //원래 response라는 속성은 없어서 에러가 나지만. 
//     //CustomError에 추가해줌으로써 에러가 사라짐.
//     /*
//       err as CustomError
//       err (에러)는 CustomError라고 써놓음.
//       response라는 속성이 있고 해당 데이터 받은 것을 콘솔에러로 노출시킴.
//     */


//       err.response?.data 
//       //위에서 분명 CustomError에러라고 했는데 까먹음!
//       //err의 타입이 unknown이라고함! (err as CustomError)는 1회성임
//   }
// })

// (async () => {
//   try{
//       await axios.get()
//   }catch(err:unknown){
//     const customError = err as CustomError
//     console.error(customError.response?.data)

//       customError.response?.data 
//       //변수로 지정해서 계속 불러서 쓰면 된다
//   }
// })


//====================
/*
 as도 많이 안쓰느게 좋음 , any만큼 안좋음
 as를 써야할 때는 타입이 unknown일때.
 any를 써야할 때는 앞서 배운 오버로팅 일때는 써도 무방.ㅍ

 as 키워드는 사람이 직접 붙이는 거라 실수를 할 수 있다. 
 CustomError에러라고 지정했는데 CustomError가 아니면 줄줄이 아래 다 터짐.
*/

(async () => {
  try{
      await axios.get()
  }catch(err){
    if(err instanceof CustomError){
      
      const customError = err;
      console.error(customError.response?.data)
      customError.response?.data 
    }
  }
})