function area(){
    var radio = prompt('input', 0);
    var pi = 3.14;
    var area = (Math.pow((radio),2))*pi;

    if(radio>0){
        console.log("Area de circulo: " + area.toFixed(2));
    }else if(radio<=0){
        console.log("Area de circulo: " + -1);
    }
}

area();