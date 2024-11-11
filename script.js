// สร้างข้อมูลสินค้าเริ่มต้นและโหลดข้อมูลจาก localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };

// ฟังก์ชันเพื่ออัปเดตตัวนับไอคอนรถเข็น
function updateCartIcon() {
    const cartCount = document.querySelector(".cart-count");
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = itemCount;
}

// ฟังก์ชันเพิ่มสินค้าใหม่ลงในรถเข็น
function addToCart(itemName, itemPrice) {
    const existingItem = cart.items.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1; // ถ้ามีสินค้าแล้วเพิ่มจำนวน
    } else {
        cart.items.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCart();
    alert(`${itemName} ถูกเพิ่มในรถเข็นแล้ว!`);
}

// ฟังก์ชันอัปเดตรายการสินค้าในหน้าและคำนวณราคาสินค้าทั้งหมด
function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = ""; // ล้างรายการเดิมออกก่อน
    }

    let subtotal = 0;
    cart.items.forEach((item, index) => {
        if (cartItemsContainer) {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <span>ราคา: ${item.price} บาท</span>
                <input type="number" value="${item.quantity}" min="1" onchange="changeQuantity(${index}, this.value)">
                <button onclick="removeItem(${index})">ลบ</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        }
        subtotal += item.price * item.quantity;
    });

    // คำนวณและแสดงยอดรวม
    const shipping = 20;
    const total = subtotal + shipping;
    if (document.getElementById("subtotal")) {
        document.getElementById("subtotal").textContent = subtotal;
        document.getElementById("total").textContent = total;
    }

    // เก็บข้อมูลใน localStorage
    cart.total = total;
    localStorage.setItem("cart", JSON.stringify(cart));

    // อัปเดตตัวนับสินค้าในไอคอนรถเข็น
    updateCartIcon();
}

// ฟังก์ชันเปลี่ยนจำนวนสินค้าในรายการ
function changeQuantity(index, newQuantity) {
    cart.items[index].quantity = parseInt(newQuantity);
    updateCart();
}

// ฟังก์ชันลบสินค้าออกจากรถเข็น
function removeItem(index) {
    cart.items.splice(index, 1);
    updateCart();
}

// ฟังก์ชันไปยังหน้าชำระเงิน
function proceedToCheckout() {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "checkout.html";
}

// โหลดข้อมูลเมื่อเปิดหน้า cart.html
document.addEventListener("DOMContentLoaded", function () {
    updateCart(); // โหลดข้อมูลทันทีเมื่อเปิดหน้า
});
