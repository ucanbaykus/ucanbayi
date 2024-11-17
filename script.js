// Sepete öğe ekleme
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Sepetteki öğeleri gösterme
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Sepetiniz boş.</p>';
        return;
    }

    cart.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.title}</span>
            <span>${item.price}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Sepet popup'ını gösterme
document.getElementById('cartBtn').addEventListener('click', function() {
    document.getElementById('cartPopup').style.display = 'block';
    displayCartItems();
});

// Sepet popup'ını kapatma
function closeCartPopup() {
    document.getElementById('cartPopup').style.display = 'none';
}

// Sepete gitme
function goToCart() {
    window.location.href = '/sepet';
}
