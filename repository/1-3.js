function Intermedio(num1,num2,num3)
{
    if (num1>num2 && num1>num3) 
    {
        if (num2>num3) return console.log(`El valor mayor es ${num1}, el intermedio es ${num2} y el menor es ${num3}`);
        if (num3>num2) return console.log(`El valor mayor es ${num1}, el intermedio es ${num3} y el menor es ${num2}`);
    }else if (num2>num3 && num2>num1) 
    {
        if (num1>num3) return console.log(`El valor mayor es ${num2}, el intermedio es ${num1} y el menor es ${num3}`);
        if (num3>num1) return console.log(`El valor mayor es ${num2}, el intermedio es ${num3} y el menor es ${num1}`);
    }else if (num3>num1 && num3>num2) 
    {
        if (num1>num2) return console.log(`El valor mayor es ${num3}, el intermedio es ${num1} y el menor es ${num2}`);
        if (num2>num1) return console.log(`El valor mayor es ${num3}, el intermedio es ${num2} y el menor es ${num1}`);
    }
}

Intermedio(7,2,4);