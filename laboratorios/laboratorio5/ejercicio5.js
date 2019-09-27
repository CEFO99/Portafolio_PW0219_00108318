function palindromo(palabra) {

    palabra = palabra.toLowerCase();

    if(Array.from(palabra).toString()=== Array.from(palabra).reverse().toString()){

        console.log("Es palindromo");
    }
    else{

        console.log("No es palindromo");
    }

  }

  palindromo("somos");