function addToCart(productName) {
    // ดึงข้อมูลรถเข็นปัจจุบันจาก localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // เช็คว่ามีสินค้านี้ในรถเข็นแล้วหรือไม่
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex !== -1) {
        // เพิ่มจำนวนถ้ามีสินค้าอยู่แล้ว
        cart[productIndex].quantity += 1;
    } else {
        // เพิ่มสินค้าใหม่ถ้าไม่มีในรถเข็น
        cart.push({ name: productName, quantity: 1 });
    }

    // บันทึกข้อมูลรถเข็นกลับไปที่ localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // อัปเดตจำนวนสินค้าบนไอคอนรถเข็น
    updateCartCount();

    alert(`${productName} ถูกเพิ่มลงในตะกร้าแล้ว`);
}

// ฟังก์ชันเพื่ออัปเดตจำนวนสินค้าบนไอคอนรถเข็น
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector(".cart-count").textContent = itemCount;
}

// เรียกใช้ updateCartCount เมื่อหน้าโหลดขึ้นมา เพื่อให้แสดงจำนวนที่ถูกต้อง
document.addEventListener("DOMContentLoaded", updateCartCount);
