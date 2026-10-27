// Base de datos de productos de Family Pharma
const products = [
    { id: 1, name: "Paracetamol 500mg (Caja 10 tab)", price: 15.00, category: "ANALGÉSICO", img: "https://media.istockphoto.com/id/874384254/es/foto/render-3d-de-paracetamol-frasco-con-p%C3%ADldoras-sobre-blanco.jpg?s=170667a&w=0&k=20&c=Ce9NrDZpIen47eL2cutqBFrO23zqlHLaNCvnxLVCIDo=" },
    { id: 2, name: "Paracetamol 750mg (Caja 10 tab)", price: 18.00, category: "ANALGÉSICO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn7KD64K86GrxgYZrUj4Cvgtway9hPwoDKf_h1SzWVKTamy4xIgayBV_i&s=10" },
    { id: 3, name: "Paracetamol Gotas 100mg/ml (15 ml)", price: 15.00, category: "ANALGÉSICO", img: "https://http2.mlstatic.com/D_NQ_NP_816399-MLA110036714073_042026-O.webp" },
    { id: 4, name: "Paracetamol Jarabe 3.2g (120 ml)", price: 24.00, category: "ANALGÉSICO", img: "https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/163079-800-450?v=638745625018200000&width=800&height=450&aspect=true" },
    { id: 5, name: "Paracetamol Supositorios 300mg", price: 27.00, category: "ANALGÉSICO", img: "https://static.wixstatic.com/media/1105ea_aa2a19b9b86a465ab35bd3420be1e245~mv2.jpg/v1/fit/w_3024,h_4032,q_90/file.jpg/v1/fit/w_500,h_500,q_90/file.jpg" },
    { id: 6, name: "Ibuprofeno 400mg (Caja 10 grageas)", price: 21.00, category: "AINE", img: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/230341L.jpg" },
    { id: 7, name: "Ibuprofeno 600mg (Caja 10 tab)", price: 34.00, category: "AINE", img: "https://http2.mlstatic.com/D_NQ_NP_975380-MLM92306483917_092025-O.webp" },
    { id: 8, name: "Ibuprofeno Suspensión Pediátrica", price: 31.00, category: "AINE", img: "https://http2.mlstatic.com/D_NQ_NP_796272-MLM84767360599_052025-O.webp" },
    { id: 9, name: "Naproxeno Sódico 275mg (Caja 20)", price: 34.00, category: "AINE", img: "https://http2.mlstatic.com/D_NQ_NP_708379-MLM80051970357_102024-O.webp" },
    { id: 10, name: "Naproxeno Sódico 550mg (Caja 12)", price: 24.50, category: "AINE", img: "https://farmaciaherrera.com.mx/cdn/shop/files/naproxeno_sodico_inflanox_550_mg_con_12_tabletas_785118752422_55f8afa2-fd0c-4d4f-9552-da8396434906.jpg?v=1763652044&width=1214" },
    { id: 11, name: "Naproxeno / Paracetamol (Caja 15)", price: 34.00, category: "AINE", img: "https://medicinaoncologica.com/wp-content/uploads/2023/06/naproxeno-partacetamol-275_rcd_pharma_mexico.jpg" },
    { id: 12, name: "Diclofenaco Tabletas 50 mg", price: 30.00, category: "AINE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbK8sK0cLxOIQYIdcha_f-bcJzrQ6ACKjey-cq3RyFBA&s=10" },
    { id: 13, name: "Metoclopramida Tabletas 10 mg", price: 13.00, category: "GASTROINTESTINAL", img: "https://farmaciastelchi.com/wp-content/uploads/2026/02/M02993.png" },
    { id: 14, name: "Trimebutina Tabletas 200 mg", price: 84.00, category: "GASTROINTESTINAL", img: "https://production-media.fahorro.com/media/catalog/product/7/5/7502223708273_1.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144&format=jpeg" },
    { id: 15, name: "Senósidos A y B Tabletas", price: 54.00, category: "LAXANTE", img: "https://m.media-amazon.com/images/I/51YrJ0PKTQL._AC_UF350,350_QL80_.jpg" },
    { id: 16, name: "Dextrometorfano Jarabe Antitusivo", price: 48.50, category: "ANTITUSIVO", img: "https://laboratoriosifa.com/wp-content/uploads/Dextrometorfano-10-mg-600x600.jpg" }
];

let registeredUsers = JSON.parse(localStorage.getItem("fp_users")) || [
    { name: "Cliente Demo", email: "cliente@familypharma.com", password: "Password123" }
];

let currentUser = JSON.parse(localStorage.getItem("fp_current_user")) || null;
let cart = JSON.parse(localStorage.getItem("fp_cart")) || [];
let favorites = JSON.parse(localStorage.getItem("fp_favs")) || [];
let currentDetailProductId = null;

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    updateBadges();
    updateUserUI();

    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => filterProducts(searchInput.value));
        searchInput.addEventListener("keyup", (e) => { if (e.key === "Enter") filterProducts(searchInput.value); });
    }

    const authModal = document.getElementById("modal-auth");
    const closeAuthBtn = document.getElementById("close-auth-modal");

    if (closeAuthBtn && authModal) {
        closeAuthBtn.addEventListener("click", () => { 
            authModal.style.display = "none"; 
            resetAuthModal();
        });
    }

    // Alternar entre Login y Registro
    const showRegisterLink = document.getElementById("show-register");
    const showLoginLink = document.getElementById("show-login");
    const formLogin = document.getElementById("form-login");
    const formRegister = document.getElementById("form-register");
    const authModalTitle = document.getElementById("auth-modal-title");

    if (showRegisterLink && showLoginLink) {
        showRegisterLink.addEventListener("click", (e) => {
            e.preventDefault();
            formLogin.style.display = "none";
            formRegister.style.display = "block";
            authModalTitle.textContent = "Crear Nueva Cuenta";
        });
        showLoginLink.addEventListener("click", (e) => {
            e.preventDefault();
            formRegister.style.display = "none";
            formLogin.style.display = "block";
            authModalTitle.textContent = "Iniciar Sesión";
        });
    }

    // Lógica de Login
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value.trim();
            const password = document.getElementById("login-password").value;
            const found = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
            if (found) {
                currentUser = found;
                localStorage.setItem("fp_current_user", JSON.stringify(currentUser));
                updateUserUI();
                if (authModal) authModal.style.display = "none";
                resetAuthModal();
                formLogin.reset();
                alert(`¡Bienvenido de nuevo, ${currentUser.name}!`);
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        });
    }

    // Lógica de Registro de Usuario
    if (formRegister) {
        formRegister.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("reg-name").value.trim();
            const email = document.getElementById("reg-email").value.trim();
            const password = document.getElementById("reg-password").value;

            const exists = registeredUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
            if (exists) {
                alert("Este correo ya está registrado. Intenta iniciar sesión.");
                return;
            }

            const newUser = { name, email, password };
            registeredUsers.push(newUser);
            localStorage.setItem("fp_users", JSON.stringify(registeredUsers));

            currentUser = newUser;
            localStorage.setItem("fp_current_user", JSON.stringify(currentUser));

            updateUserUI();
            if (authModal) authModal.style.display = "none";
            resetAuthModal();
            formRegister.reset();
            alert(`¡Cuenta creada con éxito! Bienvenido, ${name}`);
        });
    }

    const detailModal = document.getElementById("modal-product-detail");
    const closeDetailBtn = document.getElementById("close-detail-modal");
    const detailAddBtn = document.getElementById("detail-add-btn");

    if (closeDetailBtn && detailModal) {
        closeDetailBtn.addEventListener("click", () => { detailModal.style.display = "none"; });
    }

    window.addEventListener("click", (e) => {
        if (e.target === detailModal) detailModal.style.display = "none";
        if (e.target === authModal) {
            authModal.style.display = "none";
            resetAuthModal();
        }
    });

    if (detailAddBtn) {
        detailAddBtn.addEventListener("click", () => {
            if (currentDetailProductId) {
                addToCart(currentDetailProductId);
                if (detailModal) detailModal.style.display = "none";
            }
        });
    }
});

// Función para restablecer el modal de autenticación a Login por defecto
function resetAuthModal() {
    const formLogin = document.getElementById("form-login");
    const formRegister = document.getElementById("form-register");
    const authModalTitle = document.getElementById("auth-modal-title");
    
    if (formLogin && formRegister) {
        formLogin.style.display = "block";
        formRegister.style.display = "none";
        formLogin.reset();
        formRegister.reset();
        if (authModalTitle) authModalTitle.textContent = "Iniciar Sesión";
    }
}

function renderProducts(items) {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No se encontraron medicamentos.</p>`;
        return;
    }

    grid.innerHTML = items.map(p => `
        <div style="background: white; border-radius: 8px; padding: 1rem; border: 1px solid #e2e8f0; display: flex; flex-direction: column; justify-content: space-between; height: 380px; position: relative; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);" onclick="openProductDetail(${p.id})">
            <div style="width: 100%;">
                <div style="width: 100%; height: 140px; background: #fff; border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 0.8rem;">
                    <img src="${p.img}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: contain; display: block;">
                </div>
                <div style="font-size: 0.75rem; color: #64748b; font-weight: bold; text-transform: uppercase; margin-bottom: 0.3rem;">${p.category}</div>
                <h3 style="font-size: 0.95rem; color: #0f172a; height: 2.4rem; overflow: hidden; margin-bottom: 0.3rem;">${p.name}</h3>
            </div>
            <div style="width: 100%;">
                <div style="font-size: 1.1rem; font-weight: bold; color: #0284c7; margin-bottom: 0.8rem;">$${p.price.toFixed(2)} MXN</div>
                <div style="display: flex; gap: 0.5rem; justify-content: center;" onclick="event.stopPropagation()">
                    <button onclick="addToCart(${p.id})" class="btn btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Agregar</button>
                    <button onclick="addToFavs(${p.id})" class="btn btn-outline" style="padding: 0.4rem 0.7rem;" title="Favoritos"><i class="fa-regular fa-heart"></i></button>
                </div>
            </div>
        </div>
    `).join("");
}

function openProductDetail(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    currentDetailProductId = prod.id;
    document.getElementById("detail-img").src = prod.img;
    document.getElementById("detail-category").textContent = prod.category;
    document.getElementById("detail-title").textContent = prod.name;
    document.getElementById("detail-price").textContent = `$${prod.price.toFixed(2)} MXN`;

    const detailModal = document.getElementById("modal-product-detail");
    if (detailModal) detailModal.style.display = "flex";
}

function filterProducts(query) {
    const q = query.toLowerCase().trim();
    const filtered = products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    renderProducts(filtered);
}

function addToCart(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ id: prod.id, name: prod.name, price: prod.price, quantity: 1, img: prod.img, category: prod.category });
    }

    localStorage.setItem("fp_cart", JSON.stringify(cart));
    updateBadges();
    alert(`¡"${prod.name}" fue agregado al carrito!`);
}

function addToFavs(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    const exists = favorites.some(p => p.id === id);
    if (!exists) {
        favorites.push(prod);
        localStorage.setItem("fp_favs", JSON.stringify(favorites));
        updateBadges();
        alert(`¡"${prod.name}" fue agregado a tus Favoritos!`);
    } else {
        alert("Este producto ya está en tus favoritos.");
    }
}

function updateBadges() {
    const cartBadges = document.querySelectorAll("#cart-badge");
    const favBadges = document.querySelectorAll("#fav-badge");

    const totalCartItems = cart.reduce((acc, i) => acc + (i.quantity || 1), 0);
    
    cartBadges.forEach(b => b.textContent = totalCartItems);
    favBadges.forEach(b => b.textContent = favorites.length);
}

function updateUserUI() {
    const userContainer = document.getElementById("user-session-container");
    if (!userContainer) return;

    if (currentUser) {
        userContainer.innerHTML = `
            <span style="font-weight: 600; font-size: 0.9rem; color: var(--primary); margin-right: 0.5rem;">Hola, ${currentUser.name}</span>
            <button id="logout-btn" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.8rem;">Cerrar Sesión</button>
        `;
        document.getElementById("logout-btn").addEventListener("click", () => {
            currentUser = null;
            localStorage.removeItem("fp_current_user");
            updateUserUI();
        });
    } else {
        userContainer.innerHTML = `
            <button id="btn-open-login" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;"><i class="fa-solid fa-user"></i> Iniciar Sesión</button>
        `;
        document.getElementById("btn-open-login").addEventListener("click", () => {
            resetAuthModal();
            const authModal = document.getElementById("modal-auth");
            if (authModal) authModal.style.display = "flex";
        });
    }
}