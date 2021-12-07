// Câu lệnh rẽ nhánh - Switch

var date = 2;

switch(date) {
    case 2: //so sánh bằng ===
        console.log('Hôm nay là thứ 2');
        break;
    case 3: 
        console.log('Hôm nay là thứ 3');
        break;
    case 4: 
        console.log('Hôm nay là thứ 4');
        break;
    case 5:
    case 6:
    case 7:
        console.log('Hôm nay là thứ 5, 6, 7');
        break;
    default:
        console.log('Không biết');
}