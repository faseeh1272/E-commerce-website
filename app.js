function addToCart() {
    const quantity = document.getElementById('quantity').value;
    const price = document.querySelector('.product-price').textContent;
    alert(`Item added to cart! Quantity: ${quantity}, Price: ${price}`);
   
}
