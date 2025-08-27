
  // Giả lập API lưu trữ giỏ hàng bằng localStorage
  const cartKey = "cartItems";

  function getCartItems() {
    return JSON.parse(localStorage.getItem(cartKey)) || [];
  }

  function saveCartItems(items) {
    localStorage.setItem(cartKey, JSON.stringify(items));
    updateCartUI();
  }

  function addToCart(product) {
    const cart = getCartItems();
    cart.push(product);
    saveCartItems(cart);
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  }

  function clearCart() {
    localStorage.removeItem(cartKey);
    updateCartUI();
  }

  function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price, 0);
  }

  function updateCartUI() {
    const cart = getCartItems();
    const cartList = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const cartCount = document.getElementById("cart-count");

    cartList.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price.toLocaleString()}₫`;
      cartList.appendChild(li);
    });

    totalPrice.textContent = calculateTotal(cart).toLocaleString() + "₫";
    cartCount.textContent = cart.length;
  }

  function buyNow(product) {
    alert(`Bạn vừa mua ${product.name} với giá ${product.price.toLocaleString()}₫`);
    // Tuỳ bạn xử lý: redirect, tạo hóa đơn, gửi đến backend thật...
  }

  // Gọi hàm để cập nhật UI khi tải trang
  document.addEventListener("DOMContentLoaded", updateCartUI);
