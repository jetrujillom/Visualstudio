function Romanos(num){
    switch (num) {
        case 1: return (`I`); break;
        case 2: return (`II`); break;
        case 3: return (`III`); break;
        case 4: return (`IV`); break;
        case 5: return (`V`); break;
        case 6: return (`VI`); break;
        case 7: return (`VII`); break;
        case 8: return (`VIII`); break;
        case 9: return (`IX`); break;
        case 10: return (`X`); break;
    
        default: return (`Ingrese un número de 1 a 10`);
            break;
    }
}

console.log(Romanos(3));