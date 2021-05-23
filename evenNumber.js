var arr = [5, 40, 55, 6, 7, 44, 92, 87, 64, 35]; 

function evenNumbers (arr) {
    for (var i=0; i<arr.length; i++) {
        if(arr[i] % 2 === 0){
            console.log(arr[i]);
        }
    }
}

evenNumbers(arr);