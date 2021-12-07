// Đối tượng Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=vi

var date = new Date();

var date1 = Date();

console.log(typeof date); //trả về loại object
console.log(typeof date1) //trả về string không thể truy xuất để lấy giá trị

var year = date.getFullYear();
var month = date.getMonth() + 1; // tháng từ 0-11 nên cộng thêm 1
var day = date.getDate();

console.log(`${day}/${month}/${year}`)
