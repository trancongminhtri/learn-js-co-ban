/**
Hàm (function) trong Javascript
1 Hàm?
    - Một khối mã
    - Làm 1 việc cụ thể
2 Loại hàm
    - Built-in
    - Tự định nghĩa
3 Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
4 Tạo hàm đầu tiên
 */

function showDiaLog() {
    alert('Xin chào các bạn!');
}

showDiaLog(); 

/**
Tham số hàm
1 Tham số?
    - Định nghĩa? => một giá trị có thể truyền vào khi gọi một function 
    - Kiểu dữ liệu?
    - Tính private?
    - 1 tham số
    - Nhiều tham số
2 Truyền tham số
    - 1 tham số
    - Nhiều tham số
3 Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for
 */

function writeLog(message, message2){
    console.log(message);
    console.log(message2);
}

writeLog('Test message', 'Test message2');

function writeArguments(){
    // console.log(arguments);
    var myString = ''
    for(var param of arguments){
        myString += `${param} - `;
    }
    console.log(myString);
}

writeArguments('tri', 'tran', 'minh', 'cong');

// Return trong hàm
var isConfirm = confirm('Message?');

console.log(isConfirm); 

function cong(a, b) {
    return a + b;
}

console.log(cong(1, 2)); 

/**
Một số điều cần biết về function
1 Khi function đặt trùng tên?
2 Khai báo biến trong hàm?
3 Định nghĩa hàm trong hàm? 
 */

function showMessage() {
    console.log('Message 1');
}

function showMessage() {
    console.log('Message 2');
}

// có thể tạo ra 2 function trùng tên, function sau sẽ ghi đề lên function trc nó

function khaiBaoBien() {
    var fullName = 'Minh Trí';
    console.log(fullName);
}

function dinhNghiaHam(){
    function showMessage2() {
        console.log('Message 22');
    };
    showMessage2(); //nó chỉ đc định nghĩa trong hàm
}

/**
Các loại function
1 Declaration function  => định nghĩ một function    
                        => có thể gọi trc khi dc định nghĩa
2 Expression function   => không thể gọi trc khi đc định nghĩa
3 Arrow function
 */

// Declaration function
function showMessage3() {
    console.log('Declaration function');
}

// Expression function
var showMessage4 = function() {
    console.log('Expression function');
}

setTimeout(function(){

});

var myObject = {
    myFunction: function() {

    }
}