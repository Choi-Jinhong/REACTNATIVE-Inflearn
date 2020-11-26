// Spread Operator

let drinks = {
    caffe: 'latte',
    coca: 'cola'
}

let newDrinks = {
    lemon: 'tea',
    orange: 'juice',
    ...drinks // 객체의 내용을 넣으려면 ...drinks를 사용하면 된다.
}

console.log(newDrinks)