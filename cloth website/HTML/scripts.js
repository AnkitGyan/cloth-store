// Example products data
const products = [
    { id: 1, name: 'T-Shirt', price: 20, image: 'tshirt.jpg' },
    { id: 2, name: 'Jeans', price: 40, image: 'jeans.jpg' },
    { id: 3, name: 'Jacket', price: 60, image: 'jacket.jpg' },
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to handle adding products to the cart
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

// Initialize
document.addEventListener('DOMContentLoaded', displayProducts);
