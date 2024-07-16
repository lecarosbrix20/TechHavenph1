import products from '/productsGpu.js';
import cart from './cartGpu.js';

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

// load layout file

const loadTemplate = () => {
    fetch('/templateGpu.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
}
loadTemplate();
const initApp = () => {
     // load list product
     let listProductHTML = document.querySelector('.listProduct');
     listProductHTML.innerHTML = null;
     
     products.forEach(product => {
         let newProduct = document.createElement('div');
         newProduct.classList.add('item');
         newProduct.innerHTML = 
         `<a href="/detailGpu.html?id=${product.id}">
             <img src="${product.image}">
         </a>
         <h2>${product.name}</h2>
         <div class="price">₱${product.price}</div>
         <button 
             class="addCart" 
             data-id='${product.id}'>
                 Add To Cart
         </button>`;
         listProductHTML.appendChild(newProduct);
         
    });
    const categories = [...new Set(products.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});
const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);
}