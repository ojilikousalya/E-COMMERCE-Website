let cartCount = 0;

function addToCart() {
    cartCount++;
    document.querySelector('.user-links span:last-child').textContent = `🛒 (${cartCount})`;
}
