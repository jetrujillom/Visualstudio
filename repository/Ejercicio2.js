    console.log("Ahorro mensual");
    console.log(" ");
    
    function ahorro()
    {
        let count =0;
        return {
            increment: function(){
                count++;
                ahorro1 = ahorro1 + ahmes[i];
                return ahorro;
            },
            show: function(){
                return count;
            } 
        }
    }
    
    var count = ahorro(); 
    var ahorro1=0;
    var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var ahmes = [100000, 150000, 80000, 120000, 200000, 170000, 100000, 90000, 95000, 140000, 250000, 220000];
    
    for (var i=0; i<12; i++) {
        console.log(`en ${mes[count.show()]} tenía ${ahorro1} pesos, y ahorró ${ahmes[count.show()]}`);
        count.increment();
    }

    console.log("El total ahorrado en el año es = ", ahorro1);