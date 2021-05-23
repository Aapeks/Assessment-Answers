var arr1 = [0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0];

function findMaxConsecutiveOne (arr1) {
    let count = 0;
    let oneCount = 0;
    for (let i=0; i<arr1.length; i++) {
        if(arr1[i] === 0){
            count=0;
        }else{
            count++;      
            }
            if(count > oneCount) {
                oneCount = count;
            }
    }
    return oneCount;
}

findMaxConsecutiveOne(arr1);