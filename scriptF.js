// ฟังก์ชันเพื่ออัปเดตตัวนับไอคอนรถเข็น
function updateCartIcon() {
    const cartCount = document.querySelector(".cart-count");
    const cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = itemCount;
}

// ฟังก์ชันเพิ่มสินค้าใหม่ลงในรถเข็น
function addToCart(itemName) {
    // ราคาเฉพาะของแต่ละเมนู
    const itemPrices = {
        "ปลากะพงทอดน้ำปลา": 350,
        "แกงส้มชะอมไข่ใส่กุ้ง": 180,
        "ผัดฉ่าทะเลรวม": 220,
        "ไข่เจียวปู": 200,
        "ข้าวผัดน้ำพริกลงเรือ": 150,
        "หมูสามชั้นทอดน้ำปลา": 180,
    };

    // โหลดรถเข็นจาก localStorage หรือสร้างใหม่ถ้าไม่มี
    let cart = JSON.parse(localStorage.getItem("cart")) || { items: [] };

    // ค้นหาสินค้าในรถเข็น หากมีอยู่แล้วจะเพิ่มจำนวน
    let existingItem = cart.items.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.items.push({
            name: itemName,
            price: itemPrices[itemName],
            quantity: 1
        });
    }

    // บันทึกลง localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} ถูกเพิ่มลงในรถเข็นเรียบร้อยแล้ว!`);

    // อัปเดตไอคอนตัวนับสินค้าในรถเข็น
    updateCartIcon();
}

// เรียกใช้ updateCartIcon เมื่อหน้าโหลดเสร็จเพื่อแสดงจำนวนเริ่มต้น
document.addEventListener("DOMContentLoaded", updateCartIcon);

