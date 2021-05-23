let obje = {
    a: {"id": 4, "name": "abc"},
    b: {"id": 10, "name": "abc3"},
    c: {"id": 5, "name": "abc4"},
    d: {"id": 6, "name": "abc5"},
}

let temp = {};

var objArray = Object.keys(obje);

for(var i=1; i<objArray.length-1; i++) {
    for(var j=i+1; j<objArray.length; j++) {
        console.log(obje[objArray[i]].id);
        console.log(obje[objArray[j]].id);
        if(obje[objArray[i]].id > obje[objArray[j]].id){
            temp = obje[objArray[i]];
            obje[objArray[i]] = obje[objArray[j]];
            obje[objArray[j]] = temp;
        }
    }
}

console.log(obje);