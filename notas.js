//notas del ejercicio

//metodos
//isArray , verifica si algo es un Array
let hola = {
    juan: 20,
    pedro: 30
}
let alejandro = {
    garcia:45,
    matias:20
}
Array.isArray(hola)   //devuelve false

let chau = [21,true,'hola']
Array.isArray(chau) //devueve true


//Object.keys , metodo que devuelve las claves de un objeto, en un array, pasando por parametro (objeto)
Object.keys(hola)     //(2) ['juan', 'pedro']
Object.keys(alejandro)   //(2) ['garcia', 'matias']

//Atajo para los querySelector
const $ = (selector)=> document.querySelector(selector);
const domElements = {
    productsContainer: $('#cards-container'), //id
    prices: $('.prices'),   //class
    quantity: $('div')      //tag
}


