// Number
var a = 1;
var b = 2;
var c = 1.5;

console.log(typeof a) //Kiểm tra kiểu dữ liệu

// String
var fullName = "Trần Công Minh Trí";
var dauNhay = "Trần \" Trí";
console.log(dauNhay);

// Boolean
var isSuccess = false;

// Undefined 
// Khai báo một biến nhưng không gán giá trị
var age;

// Null
var isNull = null;

// Symbol
var id = Symbol('id'); //unique (duy nhất)
var id2 = Symbol('id')

console.log(id === id2) //false

// Function
// Function tự định nghĩa
var myFunction = function() {
    alert('Hi. Xin chào các bạn!');
}

myFunction();

// Object 
var myObject = {
    name: 'Trần Công Minh Trí',
    age: '21',
    myFunction: function() {

    },
};

var myArray = [
    'Trần',
    'Công',
    'Minh',
    'Trí'
]
