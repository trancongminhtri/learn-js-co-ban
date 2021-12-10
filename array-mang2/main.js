/**
Array methods:
    forEach() Duyệt qua từng phần tử của mảng
    every() Kiểm tra tất cả các phẩn tử thỏa mảng điều kiện gì đó trả về kiểu dữ liệu boolean
    some() Chỉ cần một item trong mảng đúng thì trả về true
    find() Tìm kiếm trả về một object, không thỏa mãn thì trả về undefined
    filter() trả lại tất cả các phần tử thỏa mảng
    map()
    reduce() Nhận một giá trị duy nhất sau khi tính toán từ một array
*/

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0,
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400,
    },
    {
        id: 5,
        name: 'ReactJs',
        coin: 500,
    },
    {
        id: 6,
        name: 'Ruby',
        coin: 10,
    },
    {
        id: 7,
        name: 'Ruby',
        coin: 12,
    },
];
// ----------------------------------------------------forEach----------------------------------------------------
// courses.forEach(function(course, index) { //call back
//     console.log(index, course);
// }); 

// ----------------------------------------------------Every----------------------------------------------------

// var isFree = courses.every(function(course, index) { //call back
//     return course.coin === 0; //điều kiện === 0
//     // kiểm tra mà sai thì sẽ dừng lại
// }); 

// console.log(isFree);

// ----------------------------------------------------Some----------------------------------------------------

// var isFree = courses.some(function(course, index) { //call back
//     return course.coin === 0; //điều kiện === 0
//     // kiểm tra mà sai thì sẽ dừng lại
// }); 

// console.log(isFree);

// ----------------------------------------------------Find----------------------------------------------------

// var isFree = courses.find(function(course, index) { //call back
//     return course.name === 'Ruby'; //điều kiện === 0
//     // kiểm tra mà sai thì sẽ dừng lại
// }); 

// console.log(isFree);

// ----------------------------------------------------filter----------------------------------------------------

// var isFree = courses.filter(function(course, index) { //call back
//     return course.coin === 0; //điều kiện === 0
//     // kiểm tra mà sai thì sẽ dừng lại
// }); 

// console.log(isFree);

// ----------------------------------------------------Map----------------------------------------------------

var newCourses = courses.map(function(course, index, originArray) {
    // map sẽ duyệt qua từng phần tử của mảng
    // duyệt qua phần tử nào thì có sẽ call lại function mà chúng ta đã chuyền
    // console.log(course);

    // return {
    //     id: course.id,
    //     name: `Khóa học: ${course.name}`,
    //     coin: course.coin,
    //     coinText: `Giá: ${course.coin}`,
    //     index: index,
    //     originArray: courses,
    // }

    // return course.name;

    // trả về một html
    return `<h2>${course.name}</h2>`
});
console.log(newCourses.join(''));

// ----------------------------------------------------reduce----------------------------------------------------

var i = 0;
function coinHandler(accumulator, currenValue, currentIndex, originArray) {
    // accumulator biến lưu trử
    // currenValue giá trị thuộc vị trí của mảng
    // currentIndex chỉ mục của currenValu vd id:2 thì currentIndex = 1
    // originArray chính là courses nếu thay đổi 1 trong 2 cái này thì cái còn lại củng thay đổi theo
    i++;

    var total = accumulator + currenValue.coin;

    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currenValue.coin,
        'Tích trữ được: ': total,
    });
    return total;
}

var totalCoin = courses.reduce(coinHandler, 0)// 0 ==> accumulator
console.log(totalCoin);