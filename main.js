let btn = document.getElementById("btn");
let password = document.getElementById("password");
let email = document.getElementById("email");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const darkmode = document.getElementById("darkmode");
const whitemode = document.getElementById("whitemode");
let p = document.querySelectorAll("p");

let obj = {
    email: "admin@gmail.com",
    password: "123123"
};

let form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (email.value === obj.email && password.value === obj.password) {
        showToast("Muvaffaqiyatli kirdingiz!", true);
        setTimeout(() => {
            window.location.href = "portfolio.html";
        }, 2000);
    } else {
        showToast("Email yoki parol noto‘g‘ri!", false);
        password.value = "";
    }
});

menuBtn?.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
});

function showToast(message, isSuccess) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = `fixed top-5 right-5 z-50 px-4 py-2 rounded shadow-lg text-white transition-opacity duration-300 ${
        isSuccess ? "bg-green-500" : "bg-red-500"
    }`;

    toast.classList.remove("hidden");
    toast.style.opacity = "1";

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 300); // fade out duration bilan mos
    }, 2000); // 2 sekundda yo‘q bo‘ladi
}

