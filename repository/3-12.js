function esPrimo(numero) {
    if (numero > 0 && numero < 4 || numero === 5) {
      return true;
    }
    if ( (numero % 2 === 0) || (numero % 3 === 0) || (numero % 5 === 0) ) {
      return false;
    }
    return true;
  }
  
  function cantidadPrimos(cantidad) {
      const primos = [];
      let count = 1;
      while ( primos.length < cantidad ) {
        if ( esPrimo(count))
          primos.push(count);
          count++;
      }
      return primos;
  }
  const numero = 7;
  const numerosPrimos = cantidadPrimos(numero);
  console.log(`los primeros ${numero} numeros primos son ${numerosPrimos}`);
  