// break & countinue in loop

// break thoát khỏi vòng lặp
for (var i =0; i < 10; i++){
    console.log(i);
    if(i >= 5) {
        break;
    }
}

for (var i = 0; i <= 10; i++){
    if(i%2 !== 0) {
        // Nếu mà nó số lẻ thì sẽ tiếp thực và ko console ra
        continue;
    }

    console.log(i);
}