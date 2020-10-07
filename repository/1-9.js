function OrdenNumeros(num1,num2,num3)
{
    if (num1>num2 && num1>num3) 
    {
        if (num2>num3) return console.log(`${num1}, ${num2}, ${num3}`);
        if (num3>num2) return console.log(`${num1}, ${num3}, ${num2}`);
    }else if (num2>num3 && num2>num1) 
    {
        if (num1>num3) return console.log(`${num2}, ${num1}, ${num3}`);
        if (num3>num1) return console.log(`${num2}, ${num3}, ${num1}`);
    }else if (num3>num1 && num3>num2) 
    {
        if (num1>num2) return console.log(`${num3}, ${num1}, ${num2}`);
        if (num2>num1) return console.log(`${num3}, ${num2}, ${num1}`);
    }
}

OrdenNumeros(7,2,4);