//보너스강의 never


// false는 boolean의 부분집합인데 왜 안되는가?
function onlyBoolean<T extends boolean>(arg : T = false):T{
  // ❌ 'T' could be instantiated with a different subtype of constraint 'boolean'
  // boolean의 다른 서브타입이 될 수 있다.
  return arg;
}

//T가 true,never 리터럴 타입으로 들어올 가능성"을 고려하지 않았기 때문