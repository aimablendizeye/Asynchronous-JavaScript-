

function nested (arr,k) {
     for (let i=0; i<=arr.length-k; i++) {
        
        for (let j=0; j<k; j++) {
            console.log(arr[i + j]);
        }
     }

}

nested([1,2,3,4,5,6,7,8],3);