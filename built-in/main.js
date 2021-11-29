/**
 * Giới thiệu một số hàm built-in
 * Alert
 * Console
 * Confirm
 * Prompt
 * Set timeout
 * Set interval
 */

var fullName = "Trần Công Minh Trí"


console.log('Đây là một dòng console');
console.log(123);
console.log(fullName);
console.error('Đây là lỗi do Trí tạo ra');
console.warn('Đây là cảnh báo do Trí tạo ra');


confirm('Xác nhận bạn đủ tuổi');
prompt('Xác nhận bạn đủ tuổi');
setTimeout(function() {    
    alert('Thực thi đoạn code sau một khoản thời gian chỉ 1 lần')
}, 1000);

setInterval(function() {
    // alert('Thực thi đoạn code sau một khoản thời gian nhiều lần');
    console.log('Đây là log' + Math.random());
}, 1000);