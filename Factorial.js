//Calculo de número factorial

function factorial(fact)
{
    for (i=1; i<=fact; i++)
    {
        num=num*i;
    }
    return num;  
}

let num=1;
console.log(`El factorial del número ingresado es: ${factorial(3)}`);