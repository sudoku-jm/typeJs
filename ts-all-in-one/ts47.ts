// Utility types - Record

//객체 표현방법1
interface Obj{
  [key:string] : number 
}

const a = {a:1,b:2,c:3}


//객체 표현방법2 Record 활용
const b:Record<string, number> = {a:1,b:2,c:3}


//=========== 직접만들기

type R<K extends keyof any,S> = {
    [key in K] : S 
}

const c:R<string, number> = {a:1,b:2,c:3}

// const d:R<Obj, number> = {a:1,b:2,c:3} //이런식으로 들어오면 안되어서 extends keyof any로 제한 조건을 줌



interface PageInfo {
  title: string;
}
 
type Page = "home" | "about" | "contact";
 
const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
 