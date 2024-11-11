// scriptSw.js

// โหลดข้อมูลรถเข็นจาก localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || { items: [], total: 0 };

// ฟังก์ชันเพื่ออัปเดตตัวนับไอคอนรถเข็น
function updateCartIcon() {
    const cartCount = document.querySelector(".cart-count");
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = itemCount;
}

// ฟังก์ชันเพิ่มสินค้าใหม่ลงในรถเข็น
function addToCart(foodName) {
    let price;
    switch (foodName) {
        case 'เค้กมะพร้าวอ่อนครีมสด': price = 80; break;
        case 'บัวลอยเผือกมะพร้าวอ่อน': price = 50; break;
        case 'ช็อกโกแลตลาวา&ไอศกรีมวานิลลา': price = 120; break;
        case 'ข้าวเหนียวมะม่วง': price = 100; break;
        case 'เครปสตอเบอร์รี่': price = 120; break;
        case 'พานาคอตต้ามะพร้าวอ่อน': price = 100; break;
        default: return;
    }

    // ตรวจสอบว่าสินค้าอยู่ในรถเข็นแล้วหรือไม่
    const existingItem = cart.items.find(item => item.name === foodName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({ name: foodName, price, quantity: 1 });
    }
    
    updateCart();
}

// ฟังก์ชันอัปเดตข้อมูลใน localStorage และอัปเดตไอคอน
function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartIcon();
    alert(`${name} ถูกเพิ่มลงในรถเข็นเรียบร้อยแล้ว!`);
}

// โหลดข้อมูลเมื่อเปิดหน้า
document.addEventListener("DOMContentLoaded", function () {
    updateCartIcon();
});
