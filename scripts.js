// scripts.js
let selectedRole = "customer";

const customerBtn = document.getElementById("customerBtn");
const workerBtn = document.getElementById("workerBtn");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

// Role selection
customerBtn.addEventListener("click", () => {
    selectedRole = "customer";
    customerBtn.classList.add("active");
    workerBtn.classList.remove("active");
});

workerBtn.addEventListener("click", () => {
    selectedRole = "worker";
    workerBtn.classList.add("active");
    customerBtn.classList.remove("active");
});

// Login click
loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(!email || !password){
        message.innerText = "Please enter email and password";
        return;
    }

    // For now, just demo login
    if(selectedRole === "customer"){
        window.location.href = "customer.html";
    } else {
        window.location.href = "worker.html";
    }
});



// Navigation between sections
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        navButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const target = btn.getAttribute("data-section");
        sections.forEach(sec => sec.classList.remove("active"));
        document.getElementById(target).classList.add("active");
    });
});

// Logout
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
    // Clear session / localStorage if using
    localStorage.removeItem("userRole"); // optional
    window.location.href = "index.html";
});

const featuredProducts = [
    {name: "Product 1", price: "$20", img: "https://via.placeholder.com/200"},
    {name: "Product 2", price: "$35", img: "https://via.placeholder.com/200"},
];

const container = document.getElementById('featuredProducts');

featuredProducts.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <div class="product-info">
            <h3>${p.name}</h3>
            <p class="price">${p.price}</p>
        </div>
    `;
    container.appendChild(card);
});