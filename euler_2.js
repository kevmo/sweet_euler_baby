var arr = [1,2];
var total = 0;

var fibo = function(){
    for (i =1; i<arr.length; i++){
        if (arr[i] < 4000001){
            arr.push(arr[i]+arr[i-1]);
        }
        else{
            break;
        }
    };
    return arr;
};

fibo();

for (i=0;i<arr.length; i++){
    if (arr[i] % 2 ===0){
        total = total + arr[i];
    }
    console.log(total);
};