async function createItem(name,price,quant) {
    return{
        //parametros
      name,
      price,
      quant,
        //função de calculo
      subtotal:()=>price*quant ,
    };
}

export default createItem