// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

// Đoạn code này hỗ trợ cho các trình duyệt không có hỗ trợ includes 
if (!String.prototype.includes) { //Kiểm tra includes có trong string hay array hay không
    String.prototype.includes = function(search, start) {
      'use strict';
  
    if (search instanceof RegExp) { //Kiểm tra có lỗi hay ko
        throw TypeError('first argument must not be a RegExp');
    }

    if (start === undefined) { start = 0; }
        return this.indexOf(search, start) !== -1;
    };
}

// var index = 'Javascript course';

// Kiểm tra tồn tại của Javascript trong đoạn chuỗi bắt đầu từ vị trí 0
console.log('Javascript course'.includes('Javascript', 0));
