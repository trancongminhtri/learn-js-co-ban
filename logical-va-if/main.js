var a = 1;
var b = 2;

var result = 'A' && 'B';
console.log(result); // =B
// Vì nó sẽ so sánh với 6 giá trị false từ trài sang phải 
/**
 * ''
 * null
 * undefined
 * nan
 * false
 * 0
 * 
 */

var result1 = null && 'B' && 'C';
console.log(result1) // = null


var result2 = 'A' || 'B' || 'C';
// Đọc giá trị từ trài sang phải, cái nào khác thì lấy lun giá trị đó
console.log(result2) // = A

var result3 = NaN || 'B' || 'C';
console.log(result3); // = B