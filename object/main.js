// object trong javascript

var emailKey = 'email';

var myInfo = {
    name: 'Minh Trí',
    age: '21',
    address: 'Bà Rịa',
    'full-name': 'Trần Công Minh Trí',
    [emailKey]: '0306181186@caothang.edu.vn', //[biến]
    getName: function() {
        return this.name; //this = myInfo
    }
}

// Function --> Phương thức / method
// Others --> Thuộc tính / property

console.log(myInfo);

console.log(myInfo.getName()) //() call;

myInfo.email = 'trancongminhtri@gmail.com';

console.log(myInfo);

myInfo['my-email'] = 'trancongminhtri@gmail.com';

console.log(myInfo.age);
console.log(myInfo['my-email']);

var myKey = 'address';
console.log(myInfo[myKey]);

delete myInfo.age; //Xóa key