var num = [10,9,8,7,6,5,4,3,2,1,11,12,2,14,2];
  
  function ocurrencia(valor, evaluar) {
    let cont = 0;
    for (let i = 0; i < evaluar.length; i++) {
      if (evaluar[i] == valor) {
        cont = cont + 1;
      }
    }
    console.log(`el numero es: ${valor} se repite ${cont}` );
}
ocurrencia(2,num);