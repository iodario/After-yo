// import fetch from "node-fetch";
//fetch, llamado a la Api


(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>(console.log(data)))
})()

//declaro variable domElements
// creo un objeto , con una clave cuyo valor corresponde a un objeto del Dom

// const domDiv1 = document.getElementById("cards-container")
// console.log(domDiv1)
// const domElements = {
//     productsContainer: domDiv1
// }

const $ = (selector)=> document.querySelector(selector);
const domElements = {
    productsContainer: $('#cards-container')
}




//creacion de una funcion Render

const renderProduct = (products = []) => {
    //Primero reviso si el parametro es un array
    //Aunque default le puse que es un Array vacio, puede llegar a ser un objeto

    //verifico si es un array
    if(!Array.isArray(products)){
        console.error('No puedo renderizar productos si el parametro no es un array');
        return;
    }

    //verifico que el array no sea un array vacio
    if (products.length === 0) {
        console.error("No puedo renderizar productos si el array esta vacio");
        return;       
    }

    //Llegado a este punto ya estoy listo para renderizar ,mis productos.

    //Recorro el array de productos
    products.forEach(products=> {
        const result = createCards(products);
        domElements.productsContainer.appendChild(result);
    });
};



