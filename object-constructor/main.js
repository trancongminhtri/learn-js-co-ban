// object constructor
// không phải là đối tượng chỉ là mô tả đối tượng thôi
function User(firstName, lastName, avartar) {
    // this này mô tả phương thức hay thuộc tính được khởi tạo từ function user
    this.firstName = firstName;
    this.lastName = lastName;
    this.avartar = avartar;

    this.getName = function() {
        // this này là được khỏi tạo từ getName
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Trí', 'Trần', 'Avatar');
var user = new User('Anh', 'Tuấn', 'Avatar1');

author.title = "Chia sẻ dạo tại F8";
user.comment = "Liệu có khóa học asp.net không ad :))";

//coi lại bản thiết kế
console.log(author.constructor === User);

console.log(author.getName());
console.log(user .getName());

/**
Object prototype - Basic
1 Prototype là gì?
2 Sử dụng khi nào?
*/
// Thêm thuộc tính bên ngoài function khởi tạo User
User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}
console.log(user.className);
console.log(user.getClassName());
// Khi mình khởi tạo bằng object constructor thì console ra sẽ thấy
// Nhưng khi thêm thuộc tính bằng prototype vào thì nó nằm ở dưới __proto__