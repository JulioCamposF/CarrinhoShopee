//ações do carrinho
/*
-Adicionar itens
-Excluir itens
-Remover um item
-Calcular Total do carrinho
*/

async function addItens(userCart,item){
userCart.push(item);
}

async function deleteItem(userCart,name){
const index = userCart.findIndex((item)=> item.name===name);

if(index != -1){
    //ele recorta isto é ite o qual atender o valor do index . e dele em diante vem o nuemro no caso 1 que é somente ele
    userCart.splice(index,1);
}


}


async function removeItem(userCart,index){
//transforma o indice visual do usuario para o indice do backend
    const deleteIndex = index-1;

if(index >= 0 && index < userCart.length){
    userCart.splice(deleteIndex, 1);
}
}

async function removeItensLine(userCart,item){
    const indexFound = userCart.findIndex((p)=> p.name === item.name)
    console.log(indexFound);
    if(indexFound== -1){
        console.log("Item não encontrado!")
        return;
    }

//caso o item for maior que um subtrair
if(userCart[indexFound].quant>1){
    ///atribuindo o valor dele menos 1
    userCart[indexFound].quant -=1
    return;
}


//caso for um deve deletar o item
if(userCart[indexFound].quant==1){
    userCart.splice(indexFound,1);
}

}


async function displayCart(userCart) {
   console.log("Shopee cart List:");
   userCart.forEach((item,index) => {
    console.log(`${index+1}.${item.name} - R$ ${item.price} | ${item.quant} | Subtotal: ${item.subtotal()}`);
   }); 
}





async function calcTotal(userCart) {

    //console.log(userCart.reduce((total,item)=>total +item.subtotal(),0));

  const result = userCart.reduce((total,item)=>total +item.subtotal(),0);
    console.log(result);
}

export{
    addItens,
    calcTotal,
    deleteItem,
    displayCart,
    removeItem,
    removeItensLine,
}