let c = (el)=> document.querySelector(el);
let cs = (el)=> document.querySelector(el);

pizzaJson.map((item, index)=>{
    var pizzaItem = c(".pizza-item").cloneNode(true);

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    c(".pizza-area").append(pizzaItem);
});