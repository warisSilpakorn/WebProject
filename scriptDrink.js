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
        case 'ชาไทย': price = 40; break;
        case 'ชาเขียว': price = 40; break;
        case 'โกโก้': price = 40; break;
        case 'แตงโมปั่น': price = 40; break;
        case 'น้ำส้มคั้น': price = 35; break;
        case 'ชามะนาว': price = 40; break;
        case 'บลูฮาวาย': price = 60; break;
        case 'ลิ้นจี่โซดา': price = 60; break;
        case 'อัญชันมะนาว': price = 60; break;
        case 'อเมริกาโน่': price = 65; break;
        case 'มอคค่า': price = 70; break;
        case 'ลาเต้': price = 70; break;
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
