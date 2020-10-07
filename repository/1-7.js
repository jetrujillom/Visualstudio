function RestaMayor(num1,num2) 
{
    let resta=0;
    if (num1>num2) {
        resta=num1-num2;
    } else {
        resta=num2-num1;
    }
    return resta;
}

console.log(`La diferencia de los dos numeros es ${RestaMayor(7,20)}`);