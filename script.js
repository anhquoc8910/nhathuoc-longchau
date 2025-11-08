let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price.toLocaleString()}đ`;
        cartItems.appendChild(li);
    });
    totalPrice.textContent = `Tổng tiền: ${total.toLocaleString()}đ`;
}
