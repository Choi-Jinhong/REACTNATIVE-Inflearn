// for ... of ...

let array = [10, 20, 30, 40];

for (let val of array) {
    console.log(val);
    // console.log(array[val]);
}

// value 값이 생기면 저절로 키값이 생기는 것에만 가능
// 즉, 배열은 가능하나 json 형식은 안됨 -> in을 사용하면 된다
// EX1

let obj = {
    a: 1,
    b: 2,
    c: 3
}

for(let val in obj){
    console.log(val);
    // console.log(array[val]);
}