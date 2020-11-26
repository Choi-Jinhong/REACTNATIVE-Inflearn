// var, let, const 변수선언 알아보기
// es6 이후 let const의 등장
// function 단위의 scope를 가짐
// 같은 변수의 선언에서도 오류가 표기되지 않음 -> let을 사용하면 해당 오류 표시
// const는 변하지 않는 상수이므로 나중에 변경하려고 할 때에는 변경이 불가
// 단, object, array 형태일 경우에 내부 요소들은 변경이 가능
// ex1
// let hello = 'world'; // global
// let hello = 'korea';

// if (true) {
//     let hello = 'korea'; // local
//     console.log(hello); // korea
// }

// test();

// console.log(hello); // world

// object set
const drinks = {};
drinks.caffe = 'latte';
drinks.lemon = 'ade';

console.log(drinks);

// array set
const arr = [1, 2, 3, 4, 5];
arr[0] = 100;
arr[4] = 500;
console.log(arr);