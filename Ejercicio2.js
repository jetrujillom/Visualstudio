    console.log("Ahorro mensual");
    console.log(" ");
    var ahorro =0; 
    var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var ahmes = [100000, 150000, 80000, 120000, 200000, 170000, 100000, 90000, 95000, 140000, 250000, 220000];
    
    for (var i=0; i<12; i++) {
        ahorro = ahorro + ahmes[i];
        console.log("en ", mes[i], "ahorró ", ahmes[i]," lleva ahorrado ", ahorro);
    }

    console.log("El total ahorrado en el año es = ", ahorro);