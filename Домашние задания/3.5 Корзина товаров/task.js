const cartProducts = document.querySelector('.cart__products');

document.querySelectorAll('.product').forEach((product) => {
  const quantityValue = product.querySelector('.product__quantity-value');

  product.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
    const value = parseInt(quantityValue.textContent, 10);
    if (value > 1) {
      quantityValue.textContent = value - 1;
    }
  });

  product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
    const value = parseInt(quantityValue.textContent, 10);
    quantityValue.textContent = value + 1;
  });

  product.querySelector('.product__add').addEventListener('click', () => {
    const id = product.dataset.id;
    const quantity = parseInt(quantityValue.textContent, 10);
    const imageSrc = product.querySelector('.product__image').src;
    const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

    if (existingProduct) {
      const countEl = existingProduct.querySelector('.cart__product-count');
      countEl.textContent = parseInt(countEl.textContent, 10) + quantity;
    } else {
      const cartProduct = document.createElement('div');
      cartProduct.className = 'cart__product';
      cartProduct.dataset.id = id;
      cartProduct.innerHTML = `
        <img class="cart__product-image" src="${imageSrc}">
        <div class="cart__product-count">${quantity}</div>
      `;
      cartProducts.appendChild(cartProduct);
    }
  });
});
