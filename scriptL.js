// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = form.querySelector("input[type='email']").value;
        const password = form.querySelector("input[type='password']").value;

        // การตรวจสอบข้อมูลเข้าสู่ระบบ (ยกตัวอย่าง)
        if (email === "user@example.com" && password === "0123") {
            // บันทึกสถานะการล็อกอินใน localStorage
            localStorage.setItem("isLoggedIn", "true");
            alert("เข้าสู่ระบบสำเร็จ");
            window.location.href = "index.html"; // เปลี่ยนไปหน้าหลักหลังจากเข้าสู่ระบบ
        } else {
            alert("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
        }
    });
});
