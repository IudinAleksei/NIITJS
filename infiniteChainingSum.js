// const sum = function (a = 0) {
//   let sum = a;

//   const func = (b = 0) => {
//     sum += b;
//     return func;
//   }

//   func.valueOf = () => sum;
//   func.toString = () => sum;
//   console.log(sum);

//   return func;
// }

var add = function (a) {
  let func = (b) => {
    return add(a + b);
  };
  func.valueOf = () => a;
  return func;
}

var SSum = add(1)(3)(5);

console.log(SSum);
