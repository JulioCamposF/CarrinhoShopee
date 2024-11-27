//vetor para comportar todos os elementos do carrinho

import createItem from "./services/itens.js";
import * as cartService from "./services/cart.js";



const myCart= [];
const myWhisList = [];


console.log("Bem vindo ao carrinho da Shoppe");
//temos que adicionar await para ele resolver a conta primeiro antes de responder no console.log
//pois é uma promessa de calculo
const item1=await createItem("Carrinho Brinquedo",20.99,1);
const item2=await createItem("boneco Brinquedo",25.90,3);

//logica de adicionar itens no carrinho
await cartService.addItens(myCart , item1);
await cartService.addItens(myCart , item2);


//retirando um item do boneco
//await cartService.removeItem(myCart,0);

await cartService.removeItensLine(myCart,item2);

//Mostrar os itens do carrinho
await cartService.displayCart(myCart);


//console.log(item2.subtotal());

//vamos tentar deletar este item
//await cartService.deleteItem(myCart , item2.name);




console.log("shopee Total");
await cartService.calcTotal(myCart);