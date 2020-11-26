// Spread Operator

// function sum (x, y, z){
//     return x+y+z;
// }

// console.log(sum(1,2,3));

// let arr = [10, 20, 30];

// console.log(sum(arr)); // 배열의 인수를 함수의 인수로 사용할 수 없음

// console.log(sum.apply(null, arr)); // 배열의 인수를 함수의 인수로 사용할 수 있음

// console.log(sum(...arr)); // sum.apply(null, arr) 과 같은 결과 값


// function sum(a, b, c, d, e){
//     return a+b+c+d+e;
// }

// let arr = [20, 30];

// console.log(
//     sum(10, ...arr, 40, 50)
// ); // 150 , ...arr = 20, 30

// let face = ['eyes', 'nose', 'mouth'];
// let head = ['hair', ...face, 'ears'];

// console.log(head); // [hair, eyes, nose, mouth, ears]

let arr = [1, 2, 3];

// let arrCpy = [...arr];
let arrCpy = arr; // 원본 배열에 영향을 받을 수 있다. 그러므로 영향을 받지 않게 하려면 [...arr]를 사용하는 것이 좋다.

console.log(arrCpy);