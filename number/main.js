/**
Number trong Javascript

1 Tạo giá trị Number
    - Các cách tạo 
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2 Làm việc với Number
    - To String
    - To Fixed
 */

var age = 21;
var PI = 3.14

var otherNumber = new Number (9); 

var result = 20 / 'abc';
console.log(result) // = NaN 
//NaN là đại diện cho một số không hợp lệ

console.log(isNaN(result)); //kiểm tra có phải NaN

console.log(typeof(age.toString()));

console.log(PI.toFixed()); // =3 type string

var number = 3000.234523523452345;
console.log(number.toFixed(2));
