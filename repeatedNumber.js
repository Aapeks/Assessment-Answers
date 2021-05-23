var size= 101;
var arr = [1,2,2,4,5]
var res;

for (var i=0; i<size-1; i++) {
    if(arr[i] == arr[i+1]){
        res=arr[i];
        break;
    }
}
console.log(res);