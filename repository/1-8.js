function RestaMayor(num1,num2) 
{
    let total=0;
    if (num1>num2) {
        total=num1-num2;
        console.log(`${num1} - ${num2} = ${total}`);
    } else {
        total=num2+num1;
        console.log(`${num1} + ${num2} = ${total}`);
    }
    return total;
}

RestaMayor(7,20);