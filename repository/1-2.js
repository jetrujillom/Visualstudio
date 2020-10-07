function Intermedio(num1,num2,num3)
{
    if ((num1>num2 && num2>num3) || ((num3>num2 && num2>num1))) 
    {
        return console.log(`El valor intermedio es el segundo`);
    }
    if ((num1>num3 && num3>num2) || ((num2>num3 && num3>num1))) 
    {
        return console.log(`El valor intermedio es el tercero`);
    }
    if ((num2>num1 && num1>num3) || ((num3>num1 && num1>num2))) 
    {
        return console.log(`El valor intermedio es el Primero`);
    }
}

Intermedio(3,2,4);