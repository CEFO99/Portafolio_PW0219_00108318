function ordernar(array){
    var temp;
    for( var i = 1; i<array.length;i++){
        for (var j = i; j>0;j--){
            if( array[j]< array[j-1]){
                temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }
        }
    }
    return array;
}

var arr = [10, 12, 31, 7, 21, 17];

var x = ordernar(arr);

for(var i=0; i<x.length; i++){
    console.log(x[i]);
}