/**
CHUỖI TRONG JAVASCRIPT  

1 Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2 Một số case sử dụng backslash (\)
3 Xem độ dài chuỗi
4 Chú ý độ dài khi viết Code
5 Template string ES6
 */


var fullName = 'Trần Công Minh Trí'; // type string
var fullName1 = new String('Trần Công Minh Trí'); //type object

console.log(typeof(fullName));

var fullName2 = 'Minh Tri \'là tôi\'';
console.log(fullName2)

//  \' = '
//  \\ = \

console.log(fullName.length);

var fullName4 = 'Môt nhà to một nhà nhỏ'
+ '  nhà to một nhà nhỏ'
+ '  nhà to một nhà nhỏ'
+ '  nhà to một nhà nhỏ'
;

var firstName = 'Trí';
var lastName = 'Trần';

console.log('Tôi là: ' + firstName + ' ' + lastName);
console.log(`Tôi là: ${firstName} ${lastName}`);


// LÀM VIỆC VỚI CHUỖI
var myString = 'Học JS tại F8!';

// Keyword: Javascript string methods

// 1 Length
// console.log(myString.length)

// 2 Find index
console.log(myString.indexOf('JS')) // = 4 trả về vị trí đầu tiên nó tìm thấy
console.log(myString.indexOf('JS'), 6) // = 12 nó sẽ bắt đầu đếm từ vị trí thứ 6
console.log(myString.lastIndexOf('JS')) // đến JS vị trí js cuối cùng

console.log(myString.search('JS')) //tìm ký tự theo chính quy 

// 3 Cut string
console.log(myString.slice(4, 6)); //cắt xuôi
console.log(myString.slice(-3, -1)); //cắt ngược

// 4 Replace
console.log(myString.replace('JS', 'Javascript'));
console.log(myString.replace(/JS/g, 'Javascript'));

// 5 conver to upper case
console.log(myString.toUpperCase());

// 6 conver to lower case
console.log(myString.toLowerCase());

// 7 Trim loại bỏ khoản trắng thừa ở 2 đầu
console.log(myString.trim());

// 8 split cắt 1 chuỗi thành 1 array
var language = 'js, jquery, bootstrap';
console.log(language.split(', '));

var language2 = 'javascript';
console.log(language2.split(''));

// 9 Get a character by index
const myString2 = 'Minh Tri';
console.log(myString2.charAt(2)); // ko tồn tại thì chuỗi trổng 
console.log(myString2[2]); //ko tồn tại thì undefined

