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

var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0); // initial value 0 nếu muốn trả về number, [] nếu muốn trả về mảng
console.log(totalCoin);

var myArray = [100, 200, 300, 400, 500];

var totalArray = myArray.reduce(function(total, array) {
    return total + array;
}) //Lần đầu tiên nó sẽ lấy giá trị phần tử đầu tiên = 100
console.log(totalArray);

// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOut, deptItem) {
    return flatOut.concat(deptItem);
}, []);
console.log(flatArray);

// Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
];

var newCourses = topics.reduce(function(courses, topic) {
    return courses.concat(topic.courses);
}, []);
console.log(newCourses);

var html = newCourses.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
});

console.log(html.join(''));