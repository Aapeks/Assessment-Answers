var request = new XMLHttpRequest();

request.open('GET', 'https://www.example.com/api/get/1');

request.onload = function(){
    var data=JSON.parse(this.response)
    if(request.status > 200 && request.status<400){
        console.log(data);
    }else{
        console.log(error);
    }
}