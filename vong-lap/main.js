/**
Vòng lặp - Loop

1 for - lặp với điều kiện đúng
2 for/in - lặp qua key của đối tượng
3 for/of - lặp qua value của đối tượng
4 while - Lặp khi điều kiện đúng
5 do/while - Lặp ít nhất 1 lần, sau đó lặp khi
    điều kiện đúng
*/

// ------------------------------------------For loop------------------------------------------

for (var i = 1; i <= 10; i++){
    console.log(i);
};

var myArray = [
    'javascript',
    'php',
    'ruby',
    'java',
];

var arrayLength = myArray.length;

for (var i = 0; i <arrayLength; i++){
    console.log(myArray[i]);
};

// ------------------------------------------For/in loop------------------------------------------

var myInfo = {
    name: 'Minh Tri',
    age: 21,
    address: 'TP HCM',
};

// object
for (var key in myInfo) {
    console.log(myInfo[key]);
}
// arrray
for (var key in myArray) {
    console.log(myArray[key]);
}
// string
var myString = 'Javascript';
for (var key in myString){
    console.log(myString[key]);
}

// ------------------------------------------for/of loop------------------------------------------
// array
for (var value of myArray) {
    console.log(value);
}
// object - khong chay dc 
// for (var value of myInfo) {
//     console.log(value);
// }
// Cách lấy giá trị trong object
// cách 1
// for (var value of Object.keys(myInfo)){
//     // Object.keys(myInfo) cách lấy key trong object
//     console.log(myInfo[value]);
// }
// cách 2
// for (var value of Object.values(myInfo)){
//     // Object.values(myInfo) cách lấy value trong object
//     console.log(value);
// }

// ------------------------------------------while loop------------------------------------------

var index = 1;

while (i <= 1000) {
    console.log(i);
    i++;
}
//array
var j = 0;
while (j < myArray.length) {
    console.log(myArray[j]);
    j++;
}

// ------------------------------------------do/while loop------------------------------------------

var k = 0;
var isSuccess = false;

do {
    // code
    i++;
    console.log('Nạp thẻ lần ' + i);

    // nạp thẻ thành công
    if(true) {
        isSuccess = true;
    }

}while(!isSuccess && k <= 3);

// ------------------------------------------Loop 2------------------------------------------

for(var i = 10; i >= 0; i--) {
    console.log(i);
}

for (var i = 0; i <= 100; i += 5) {
    console.log(i);
}