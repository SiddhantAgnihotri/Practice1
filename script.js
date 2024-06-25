document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
});

function loadHomePage() {
    document.getElementById('main-content').innerHTML = `
        <h2>Featured Products</h2>
        <div id="products"></div>
    `;
    loadProducts();
}

function loadProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productsContainer = document.getElementById('products');
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productsContainer.appendChild(productElement);
            });
        });
}

function addToCart(productId) {
    // Handle add to cart functionality
}
