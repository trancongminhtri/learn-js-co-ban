/**
Mảng trong Javascript - Array

1 Tạo mảng
    - Các cách tạo 
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2 Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
 */

var language1 = 'Javascript';
var language2 = 'PHP';
var language3 = 'Rubi';

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    null,
    undefined,
    function() {

    },
    {}
];
console.log(typeof(languages));

// index, key
var languages_1 = new Array(
    'Javascript',
    'PHP',
    'Ruby',
    null,
    undefined,
    function() {

    },
    {}
);

console.log(Array.isArray(languages));
console.log(languages.length);
console.log(languages[0]);

/**
 Làm việc với Array
 // Keyword: Javascript array methods
 1. To string
 2. Join
 3. Pop => xóa đi phần tử cuối mảng và trả giá trị đã xóa
 4. Push => thêm một hoặc nhiều phần tử vào cuối mảng và cập nhật lại độ dài mẳng
 5. Shift => xóa đi phần tử ở đầu mảng và trả phần tử đã xóa
 6. UnShift => thêm một hoặc nhiều phần tử vào đầu mảng và cập nhật lại độ dài mảng
 7. Splicing => xóa, cắt, chèn phần tử mới vào mảng
 8. Concat
 9. Slicing => cắt một vài element của mảng
 */

 var languagesP2 = [
     'Javascript',
     'PHP',
     'Ruby',
 ];

 console.log(languagesP2.toString()) // chuyển array thành string
 console.log(languagesP2.join('-'))

 console.log(languagesP2.pop()) //xóa element
 //cuối mảng và trả về giá trị đã xóa
 //không còn giá trị nào cả mà vẫn pop thì trả về giá trị undefined

 console.log(languagesP2.push('Dart', 'Java'))
 //thêm một phần tử vào cuối mảng và cập nhật lại độ dài của mảng

 console.log(languagesP2.shift()) //xóa element
//đầu mảng và trả về phần tử đã xóa

console.log(languagesP2.unshift('Dart', 'Java'))
//Thêm một phần tử vào đầu mảng và cập nhật lại độ dài của mảng

// xóa cùng splice
console.log(languagesP2.slice(1, 1)) 
// 1 đầu tiên là xác định vị trí con trỏ
// 1 tiếp theo là xóa bao nhiêu phần tử sau con trỏ

// chèn cùng splice
console.log(languagesP2.splice(1, 2, 'Dart', 'Java'))

// kết hai mảng lại với nhau
var languageP2_1 = [
    'Dart',
    'Ruby'
]

console.log(languagesP2.concat(languageP2_1))

// cắt element của mảng
console.log(languagesP2.slice(1, 2))
console.log(languagesP2.slice(-2, -1))