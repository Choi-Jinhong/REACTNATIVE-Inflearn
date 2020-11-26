// Arrow function

// 사용법
// (1) 표현식의 결과값을 반환하는 표현식 본문에 사용
// (2) 상태 블록 본문에 사용

// (1) 예시
// let arr = [1, 2, 3, 4, 5];

// let twice = arr.map(v=>v*2);

// let twiceCpy = arr.map(function(val) {
//     return val*2;
// })

// console.log(twice); // [2, 4, 6, 8, 10]

// console.log(twiceCpy); // [2, 4, 6, 8, 10]

// (2) 예시

// let arr2 = [1, 2, 3, 4, 5];

// let twice2 = arr2.map(v=> {
//     if (v % 2 === 0){
//         console.log('even number');
//     }
//     else {
//         console.log('odd number');
//     }
// });

// map이라는 함수는 두번째 매개변수는 배열의 인수를 받는다
// map(배열의 값, 배열의 인수)
let arr3 = [10, 20, 30, 40, 50];

let count = arr3.map((v, i) => {
    console.log(`i: ${i}, v: ${v}`);
});