var num = [10, 7, 19, 21]; 
    function promedio(valor) {
        let suma = 0;
        let prome;
        for (let i = 0; i < valor.length; i++) {
          suma = valor[i] + suma;
        }
        prome = suma / valor.length;
        console.log("La suma es " + suma + " y el promedio es " + prome);
      }

  promedio(num);