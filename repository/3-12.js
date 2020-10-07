
function Contador(){
    let count = contador;
        return {
            Primos: function(){
                count++;
                if (count > 0 && count <4 || count === 5){
                    NumerosPrimos.push(count);
                    p++;
                } else if ((count % 2 === 0) || (count % 3 === 0) || (count % 5 === 0) ){
                    
                 } else {   
                    NumerosPrimos.push(count);
                    p++;
                 }
                return Contador;
            },
            show: function(){
                return count;
            } 
        }
}

 let numero =7; 
 let contador =0;
 let NumerosPrimos = [];
 var count = Contador();   
 let p=1;

 while(p<=numero){
    count.Primos();

}

console.log(`los primeros ${numero} numeros primos son ${NumerosPrimos}`);



    