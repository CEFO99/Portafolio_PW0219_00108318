var arr=["fifa", 7, "uca", 10, [1,2,3], true, "summer"];

var funcion = x => {
    let typeArr= [];
    let counts = {};

    x.forEach(element => {
        typeArr.push(typeof element);
    });

    typeArr.forEach(element => {
        counts[element] = ( counts[element] || 0)+1;
    });
    console.log(typeArr);
    console.log(counts);
}

funcion(arr);