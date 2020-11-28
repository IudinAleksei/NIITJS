// to get the result, the valueOf(or toString) method must be called explicitly or implicitly

const sum = function (a = 0) {

  const func = (b = 0) => {
    return sum(a + b);
  }

  func.valueOf = () => a;
  func.toString = () => a;

  return func;
}

