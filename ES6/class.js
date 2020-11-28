// class
// javascript에서는 함수처럼 쓰이게 된다.
// instance는 그 클래스를 구성하기 위한 껍데기
// constructor는 클래스 인스턴스를 생성 및 생성된 인스턴스를 초기화

class Person {
    constructor(region_, gender_) {
        this.region = region_;
        this.gender = gender_;
    }

    greetings(val = 'gnong') {
        console.log(val);
    }
}

let korean = new Person('Korea', 'male'); // new 연산자가 클래스를 호출하면서 파라미터로 전달해주면서 초기값이 설정됨
// console.log(korean);

korean.gender = 'famale';
// console.log(korean);

// korean.greetings();

class American extends Person {
    constructor(region_, gender_, language_){
        super(region_, gender_); // super로 감싸져있는 것들은 부모의 속성을 따라하겠다.
        this.language = language_;
    }

    greetings(val = 'hello'){
        console.log(val);
    }
}

let american = new American('USA', 'famale', 'English');
// console.log(american); //American {region: 'USA', gender: 'famale', language: 'English'}
american.greetings(); // hello, 오버라이딩이 적용됨