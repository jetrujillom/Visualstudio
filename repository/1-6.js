function DescuentoCompra(compra){
    let total=0;
    if (compra > 1000) 
        {
        total = compra - compra*0.2;
        return total;
    } else 
    {
        total=compra;
        return total;
    }
}

console.log(`El total del a compra es ${DescuentoCompra(10000)}`);