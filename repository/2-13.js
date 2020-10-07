
function GetRandom1(min,max)
{
    return Math.floor(Math.random()* (max - min)) + min;

}
function GetRandom2(min,max)
{
    return Math.floor(Math.random()* (max - min)) + min;

}

console.log(`suma de dos numeros aleatorios es: ${GetRandom1(1,200)+GetRandom1(1,200)}`);