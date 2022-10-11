fetch('products.json')
    .then((response) => response.json())
    .then((data) => getProducts(data));

function getProducts(data) {
    let output = '';
    data.forEach((product) => {
        output += `
            <div id = "prod-pic">
            <img src = ${product.image} alt=${product.type}>
            </div>
            <div id = "card">
            <h2>${product.type}</h2>
            <h3>${product.price}</h3>
            <p>${product.description}</p>
            <button id = "cart"> Add To Cart </button>
            </div>`;
    }); document.getElementById('data').innerHTML = output;
}