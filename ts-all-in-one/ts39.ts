// 타입스크립트는 건망증이 심하다 + 에러 처리

//Axios 코드 만들어 놓기
interface Axios{
  get() : void
}

class CustomError extends Error{
  //response라는 속성을 추가해줬다.
  response? : {
    data :any
  }
}
declare const axios: Axios ;

(async () => {
  try{
      await axios.get()
  }catch(err){ //err는 :unknown
    if(err instanceof CustomError){ //타입가드로 CustomError로 좁혀준다
      //타입가드로 좁혀놨으니 안에서 as안써도 됨
      const customError = err;
      console.error(customError.response?.data)
      customError.response?.data 
    }
  }
})(); //즉시 실행함수


/*
interface면 JS로 변환하면서 instanceof 같은 키워드를 쓸 수 없다.
JS에서 남아있으면서 interface와 비슷한 역할을 해주는게 class

*/

// =====================


const a = <T = unknown>(v:T):T => {return v};
const c = a(3)
const result = a("hello"); 


//unknown은 사용자가 타이프 캐스팅 하는 타이프 가드 붙이든 안전하게 쓰라는 것.