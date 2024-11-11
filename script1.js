// โหลดข้อมูลจาก localStorage หรือสร้างใหม่ถ้าไม่มีข้อมูล
let cart = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };

// ฟังก์ชันเพิ่มสินค้าในรถเข็น
function addToCart(name, price) {
    const existingItem = cart.items.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({ name, price, quantity: 1 });
    }
    cart.total += price;
    updateCartCount();
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} ถูกเพิ่มลงในรถเข็นเรียบร้อยแล้ว!`);
}

// ฟังก์ชันอัปเดตจำนวนสินค้าที่แสดงบนไอคอนรถเข็น
function updateCartCount() {
    const cartCount = document.querySelector(".cart-count");
    const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// เรียกใช้งานฟังก์ชันเมื่อโหลดหน้าเว็บ
document.addEventListener("DOMContentLoaded", updateCartCount);
