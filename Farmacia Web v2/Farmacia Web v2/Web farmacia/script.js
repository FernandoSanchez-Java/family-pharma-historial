document.addEventListener("DOMContentLoaded", () => {
    // --- CATÁLOGO DE 50 MEDICAMENTOS REALES (Extraídos del Excel de Family Pharma) ---
    const productCatalog = [
        { id: 1, name: "Paracetamol 500mg (Caja 10 tab)", category: "Analgésico", price: 15.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 2, name: "Paracetamol 750mg (Caja 10 tab)", category: "Analgésico", price: 18.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 3, name: "Paracetamol Gotas 100mg/ml (15 ml)", category: "Analgésico", price: 15.00, stock: "Últimas piezas", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 4, name: "Paracetamol Jarabe 3.2g (120 ml)", category: "Analgésico", price: 24.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 5, name: "Paracetamol Supositorios 300mg", category: "Analgésico", price: 27.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 6, name: "Ibuprofeno 400mg (Caja 10 grageas)", category: "AINE", price: 21.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 7, name: "Ibuprofeno 600mg (Caja 10 tab)", category: "AINE", price: 34.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 8, name: "Ibuprofeno Suspensión Pediátrica", category: "AINE", price: 31.00, stock: "Últimas piezas", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 9, name: "Naproxeno Sódico 275mg (Caja 20)", category: "AINE", price: 34.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 10, name: "Naproxeno Sódico 550mg (Caja 12)", category: "AINE", price: 24.50, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 11, name: "Naproxeno / Paracetamol (Caja 15)", category: "AINE", price: 34.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 12, name: "Diclofenaco Tabletas 50 mg", category: "AINE", price: 30.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 13, name: "Diclofenaco Lib. Prolongada 100mg", category: "AINE", price: 26.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 14, name: "Diclofenaco Gel Tópico (Tubo 60g)", category: "AINE", price: 42.00, stock: "Últimas piezas", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 15, name: "Ketorolaco Tabletas 10 mg", category: "AINE", price: 25.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 16, name: "Ácido Acetilsalicílico 500mg", category: "Analgésico", price: 15.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 17, name: "Metamizol Sódico 500mg", category: "Analgésico", price: 11.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 18, name: "Meloxicam Tabletas 15 mg", category: "AINE", price: 40.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 19, name: "Celecoxib Cápsulas 200 mg", category: "AINE", price: 99.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 20, name: "Butilhioscina Grageas 10 mg", category: "Antiespasmódico", price: 29.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 21, name: "Omeprazol Cápsulas 20 mg (14 cap)", category: "Gastrointestinal", price: 59.00, stock: "Últimas 2 piezas", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 22, name: "Omeprazol Cápsulas 20 mg (30 cap)", category: "Gastrointestinal", price: 74.50, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 23, name: "Pantoprazol Tabletas 40 mg", category: "Gastrointestinal", price: 139.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 24, name: "Lansoprazol Cápsulas 30 mg", category: "Gastrointestinal", price: 86.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 25, name: "Magaldrato / Simeticona Suspensión", category: "Antiácido", price: 88.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 26, name: "Hidróxido de Aluminio y Magnesio", category: "Antiácido", price: 34.20, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 27, name: "Subsalicilato de Bismuto Suspensión", category: "Gastrointestinal", price: 46.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 28, name: "Loperamida Tabletas 2 mg", category: "Antidiarreico", price: 12.50, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 29, name: "Metoclopramida Tabletas 10 mg", category: "Gastrointestinal", price: 13.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 30, name: "Trimebutina Tabletas 200 mg", category: "Gastrointestinal", price: 84.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 31, name: "Senósidos A y B Tabletas", category: "Laxante", price: 54.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 32, name: "Dextrometorfano Jarabe Antitusivo", category: "Antitusivo", price: 48.50, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 33, name: "Ambroxol Jarabe Adulto 300mg", category: "Expectorante", price: 27.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 34, name: "Antigripal Fórmula Día y Noche", category: "Antigripal", price: 12.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 35, name: "Loratadina Tabletas 10 mg", category: "Antihistamínico", price: 31.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 36, name: "Cetirizina Tabletas 10 mg", category: "Antihistamínico", price: 60.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=400&q=80" },
        { id: 37, name: "Oximetazolina Spray Nasal Adulto", category: "Descongestivo", price: 52.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 38, name: "Salbutamol Inhalador 100 mcg", category: "Respiratorio", price: 105.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 39, name: "Ácido Ascórbico Vitamina C 1g", category: "Inmunológico", price: 51.00, stock: "Disponible", img: "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?cs=tinysrgb&dpr=1&w=500" },
        { id: 40, name: "Complejo B Grageas (Caja 30)", category: "Vitamina", price: 58.00, stock: "Disponible", img: "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?cs=tinysrgb&dpr=1&w=500" },
        { id: 41, name: "Ácido Fólico Tabletas 5 mg", category: "Vitamina", price: 15.00, stock: "Disponible", img: "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?cs=tinysrgb&dpr=1&w=500" },
        { id: 42, name: "Sulfato Ferroso Grageas 200 mg", category: "Vitamina", price: 9.00, stock: "Disponible", img: "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?cs=tinysrgb&dpr=1&w=500" },
        { id: 43, name: "Citrato de Calcio + Vitamina D", category: "Suplemento", price: 79.00, stock: "Disponible", img: "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?cs=tinysrgb&dpr=1&w=500" },
        { id: 44, name: "Omega 3 Cápsulas 1000 mg", category: "Suplemento", price: 209.00, stock: "Disponible", img: "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?cs=tinysrgb&dpr=1&w=500" },
        { id: 45, name: "Losartán Tabletas 50 mg", category: "Crónico", price: 66.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 46, name: "Metformina Tabletas 850 mg", category: "Crónico", price: 30.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 47, name: "Suero Oral Electrolitos (Botella)", category: "Hidratación", price: 25.50, stock: "Disponible", img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=400&q=80" },
        { id: 48, name: "Alcohol Etílico Desnaturalizado 250ml", category: "Primeros Aux.", price: 54.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 49, name: "Prueba de Embarazo Cassette", category: "Varios", price: 50.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" },
        { id: 50, name: "Melatonina Tabletas 3 mg", category: "Ansiedad/Sueño", price: 85.00, stock: "Disponible", img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=400&q=80" }
    ];

    // --- BASE DE DATOS LOCAL (localStorage) ---
    let cart = JSON.parse(localStorage.getItem("fp_cart")) || [
        { id: 1, name: "Paracetamol 500mg (Caja 10 tab)", price: 15.00, quantity: 1 }
    ];
    let favorites = JSON.parse(localStorage.getItem("fp_favs")) || [];
    let registeredUsers = JSON.parse(localStorage.getItem("fp_users_db")) || [
        { name: "Usuario Demo", email: "demo@familypharma.com", password: "password123" }
    ];
    let currentUser = JSON.parse(localStorage.getItem("fp_user")) || null;
    let appliedDiscount = 0;

    function saveState() {
        localStorage.setItem("fp_cart", JSON.stringify(cart));
        localStorage.setItem("fp_favs", JSON.stringify(favorites));
        localStorage.setItem("fp_users_db", JSON.stringify(registeredUsers));
        if (currentUser) {
            localStorage.setItem("fp_user", JSON.stringify(currentUser));
        } else {
            localStorage.removeItem("fp_user");
        }
        updateBadges();
    }

    function updateBadges() {
        const cartBadge = document.getElementById("cart-badge");
        const favBadge = document.getElementById("fav-badge");
        if (cartBadge) cartBadge.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
        if (favBadge) favBadge.textContent = favorites.length;
    }

    // --- FUNCIÓN DE NORMALIZACIÓN PARA BÚSQUEDA (Ignora acentos y mayúsculas) ---
    function normalizeText(text) {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    // --- RENDERIZAR CATÁLOGO Y BÚSQUEDA MEJORADA ---
    const catalogContainer = document.getElementById("catalogo-productos-container");
    const inputBusqueda = document.getElementById("input-busqueda-ml");
    const btnBuscar = document.getElementById("btn-buscar-ml");
    const tituloCatalogo = document.getElementById("titulo-catalogo");

    function renderCatalog(productsToDisplay) {
        if (!catalogContainer) return;
        catalogContainer.innerHTML = "";

        if (productsToDisplay.length === 0) {
            catalogContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">No se encontraron medicamentos con ese criterio de búsqueda.</div>`;
            return;
        }

        productsToDisplay.forEach(prod => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="product-img-wrapper">
                    ${prod.stock.includes("Últimas") ? `<span class="stock-tag">${prod.stock}</span>` : ""}
                    <img src="${prod.img}" alt="${prod.name}">
                </div>
                <div class="product-content">
                    <span class="product-category">${prod.category}</span>
                    <h3 class="product-name">${prod.name}</h3>
                    <div class="product-price">$${prod.price.toFixed(2)} MXN</div>
                    <div class="product-buttons">
                        <button class="btn btn-primary btn-add-catalog" data-id="${prod.id}">Agregar</button>
                        <button class="btn btn-outline btn-add-fav" data-id="${prod.id}"><i class="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            `;
            catalogContainer.appendChild(card);
        });

        attachCatalogEvents();
    }

    function attachCatalogEvents() {
        document.querySelectorAll(".btn-add-catalog").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.target.getAttribute("data-id"));
                const prod = productCatalog.find(p => p.id === id);
                if (prod) {
                    const existing = cart.find(p => p.id === id);
                    if (existing) existing.quantity++;
                    else cart.push({ id: prod.id, name: prod.name, price: prod.price, quantity: 1 });
                    saveState();
                    alert(`¡"${prod.name}" se agregó al carrito!`);
                }
            });
        });
    }

    if (inputBusqueda) {
        inputBusqueda.addEventListener("input", (e) => {
            const query = normalizeText(e.target.value.trim());
            const filtered = productCatalog.filter(p => 
                normalizeText(p.name).includes(query) || normalizeText(p.category).includes(query)
            );
            if (tituloCatalogo) {
                tituloCatalogo.textContent = e.target.value.trim() ? `Resultados para "${e.target.value}"` : "Catálogo Completo de Medicamentos";
            }
            renderCatalog(filtered);
        });
    }

    if (btnBuscar && inputBusqueda) {
        btnBuscar.addEventListener("click", () => {
            const query = normalizeText(inputBusqueda.value.trim());
            const filtered = productCatalog.filter(p => 
                normalizeText(p.name).includes(query) || normalizeText(p.category).includes(query)
            );
            renderCatalog(filtered);
        });
    }

    // --- SESIÓN DE USUARIO ---
    function renderUserSession() {
        const container = document.getElementById("user-session-container");
        if (!container) return;

        if (currentUser) {
            container.innerHTML = `
                <span style="font-size:0.85rem; font-weight:600; margin-right: 0.5rem;"><i class="fa-solid fa-circle-user"></i> ${currentUser.name}</span>
                <button id="btn-logout" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.75rem;"><i class="fa-solid fa-right-from-bracket"></i></button>
            `;
            document.getElementById("btn-logout").addEventListener("click", () => {
                currentUser = null;
                saveState();
                renderUserSession();
            });
        } else {
            container.innerHTML = `
                <button id="btn-open-login" class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;"><i class="fa-solid fa-user"></i> Iniciar Sesión</button>
            `;
            document.getElementById("btn-open-login").addEventListener("click", openAuthModal);
        }
    }

    // --- MODALES AUTENTICACIÓN Y SEGURIDAD ESTRICTA ---
    const modalAuth = document.getElementById("modal-auth");
    const closeAuthModal = document.getElementById("close-auth-modal");
    const formLogin = document.getElementById("form-login");
    const formRegister = document.getElementById("form-register");
    const formForgot = document.getElementById("form-forgot");
    const linkShowRegister = document.getElementById("link-show-register");
    const linkShowLogin = document.getElementById("link-show-login");
    const linkForgotPass = document.getElementById("link-forgot-pass");
    const linkBackLogin = document.getElementById("link-back-login");
    const authTitle = document.getElementById("auth-title");

    function openAuthModal() {
        if (modalAuth) modalAuth.style.display = "flex";
    }

    if (closeAuthModal && modalAuth) {
        closeAuthModal.addEventListener("click", () => modalAuth.style.display = "none");
    }

    if (linkShowRegister) {
        linkShowRegister.addEventListener("click", (e) => {
            e.preventDefault();
            formLogin.style.display = "none";
            formForgot.style.display = "none";
            formRegister.style.display = "block";
            authTitle.textContent = "Crear Cuenta";
        });
    }

    if (linkShowLogin) {
        linkShowLogin.addEventListener("click", (e) => {
            e.preventDefault();
            formRegister.style.display = "none";
            formForgot.style.display = "none";
            formLogin.style.display = "block";
            authTitle.textContent = "Iniciar Sesión";
        });
    }

    if (linkForgotPass) {
        linkForgotPass.addEventListener("click", (e) => {
            e.preventDefault();
            formLogin.style.display = "none";
            formRegister.style.display = "none";
            formForgot.style.display = "block";
            authTitle.textContent = "Recuperar Contraseña";
        });
    }

    if (linkBackLogin) {
        linkBackLogin.addEventListener("click", (e) => {
            e.preventDefault();
            formForgot.style.display = "none";
            formLogin.style.display = "block";
            authTitle.textContent = "Iniciar Sesión";
        });
    }

    // VALIDACIÓN ESTRICTA DE LOGIN (Con bloqueo total ante errores)
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value.trim();
            const pass = document.getElementById("login-password").value;
            const errorDiv = document.getElementById("login-error");

            const foundUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

            if (!foundUser) {
                errorDiv.style.display = "block";
                errorDiv.textContent = "Acceso denegado: El correo no está registrado en el sistema.";
                return;
            }

            if (foundUser.password !== pass) {
                errorDiv.style.display = "block";
                errorDiv.textContent = "Error de seguridad: Contraseña incorrecta.";
                return;
            }

            errorDiv.style.display = "none";
            currentUser = { name: foundUser.name, email: foundUser.email };
            saveState();
            renderUserSession();
            modalAuth.style.display = "none";
            formLogin.reset();
        });
    }

    // REGISTRO SEGURO CON BLOQUEO DE DUPLICADOS
    if (formRegister) {
        formRegister.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("reg-name").value.trim();
            const email = document.getElementById("reg-email").value.trim();
            const pass = document.getElementById("reg-password").value;
            const errorDiv = document.getElementById("reg-error");

            const existing = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
            if (existing) {
                errorDiv.style.display = "block";
                errorDiv.textContent = "Este correo ya cuenta con un registro previo en la base de datos.";
                return;
            }

            const newUser = { name, email, password: pass };
            registeredUsers.push(newUser);
            currentUser = { name: newUser.name, email: newUser.email };
            saveState();
            renderUserSession();
            modalAuth.style.display = "none";
            formRegister.reset();
            alert("¡Cuenta registrada y validada con éxito!");
        });
    }

    // RECUPERACIÓN DE CONTRASEÑA VALIDADA
    if (formForgot) {
        formForgot.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("forgot-email").value.trim();
            const msgDiv = document.getElementById("forgot-msg");
            
            const foundUser = registeredUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
            msgDiv.style.display = "block";

            if (foundUser) {
                msgDiv.style.color = "#16a34a";
                msgDiv.textContent = `Enlace de restablecimiento enviado a ${foundUser.email}. Revisa tu bandeja.`;
            } else {
                msgDiv.style.color = "var(--accent-red)";
                msgDiv.textContent = "El correo ingresado no pertenece a ningún usuario registrado.";
            }
        });
    }

    // --- CARRITO Y PAGOS ---
    const cartContainer = document.getElementById("cart-items-container");
    const subtotalEl = document.getElementById("cart-subtotal");
    const discountRow = document.getElementById("discount-row");
    const discountEl = document.getElementById("cart-discount");
    const totalEl = document.getElementById("cart-total");

    function renderCart() {
        if (!cartContainer) return;
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = `<div style="padding: 2rem 0; text-align: center; color: var(--text-muted);">El carrito está vacío.</div>`;
            updateTotals(0);
            return;
        }

        let subtotal = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const row = document.createElement("div");
            row.className = "cart-item-row";
            row.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-unit-price">$${item.price.toFixed(2)} MXN c/u</span>
                </div>
                <div class="cart-controls">
                    <div class="quantity-control">
                        <button class="quantity-btn btn-decrease" data-id="${item.id}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn btn-increase" data-id="${item.id}">+</button>
                    </div>
                    <span style="font-weight: 700; width: 90px; text-align: right;">$${itemTotal.toFixed(2)}</span>
                    <button class="btn-delete" data-id="${item.id}" title="Eliminar producto"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            cartContainer.appendChild(row);
        });

        updateTotals(subtotal);
        attachCartEvents();
    }

    function updateTotals(subtotal) {
        if (!subtotalEl || !totalEl) return;
        const discountAmount = subtotal * appliedDiscount;
        const finalTotal = subtotal - discountAmount;

        subtotalEl.textContent = `$${subtotal.toFixed(2)} MXN`;
        if (appliedDiscount > 0) {
            discountRow.style.display = "flex";
            discountEl.textContent = `-$${discountAmount.toFixed(2)} MXN`;
        } else if (discountRow) {
            discountRow.style.display = "none";
        }
        totalEl.textContent = `$${finalTotal.toFixed(2)} MXN`;
    }

    function attachCartEvents() {
        document.querySelectorAll(".btn-decrease").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.target.getAttribute("data-id"));
                const item = cart.find(p => p.id === id);
                if (item) {
                    if (item.quantity > 1) item.quantity--;
                    else cart = cart.filter(p => p.id !== id);
                    saveState();
                    renderCart();
                }
            });
        });

        document.querySelectorAll(".btn-increase").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.target.getAttribute("data-id"));
                const item = cart.find(p => p.id === id);
                if (item) {
                    item.quantity++;
                    saveState();
                    renderCart();
                }
            });
        });

        document.querySelectorAll(".btn-delete").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.currentTarget.getAttribute("data-id"));
                cart = cart.filter(p => p.id !== id);
                saveState();
                renderCart();
            });
        });
    }

    const btnApplyCoupon = document.getElementById("btn-apply-coupon");
    if (btnApplyCoupon) {
        btnApplyCoupon.addEventListener("click", () => {
            const input = document.getElementById("coupon-input").value.trim().toUpperCase();
            const msg = document.getElementById("coupon-message");
            if (input === "FAMILY10") {
                appliedDiscount = 0.10;
                msg.style.color = "#16a34a";
                msg.textContent = "¡Cupón 'FAMILY10' aplicado (10% de descuento)!";
                renderCart();
            } else {
                msg.style.color = "var(--accent-red)";
                msg.textContent = "Cupón no válido o expirado.";
            }
        });
    }

    // Modal Alta manual
    const modalAlta = document.getElementById("modal-alta");
    const btnNuevo = document.getElementById("btn-nuevo-producto");
    const btnCerrarAlta = document.getElementById("close-modal");
    const formAlta = document.getElementById("form-alta-producto");

    if (btnNuevo && modalAlta) btnNuevo.addEventListener("click", () => modalAlta.style.display = "flex");
    if (btnCerrarAlta && modalAlta) btnCerrarAlta.addEventListener("click", () => modalAlta.style.display = "none");

    if (formAlta) {
        formAlta.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombre-prod").value;
            const precio = parseFloat(document.getElementById("precio-prod").value);
            const cantidad = parseInt(document.getElementById("cantidad-prod").value);

            cart.push({ id: Date.now(), name: nombre, price: precio, quantity: cantidad });
            saveState();
            renderCart();
            formAlta.reset();
            modalAlta.style.display = "none";
        });
    }

    // Pasarela de Pagos Protegida
    const btnProcederPago = document.getElementById("btn-proceder-pago");
    const modalPayment = document.getElementById("modal-payment");
    const closePaymentModal = document.getElementById("close-payment-modal");
    const formPaymentCard = document.getElementById("form-payment-card");
    const paymentLoading = document.getElementById("payment-status-loading");
    const paymentSuccessBox = document.getElementById("payment-success-box");

    if (btnProcederPago) {
        btnProcederPago.addEventListener("click", () => {
            if (cart.length === 0) {
                alert("El carrito está vacío. Agrega productos antes de proceder.");
                return;
            }
            if (!currentUser) {
                alert("Brecha de Seguridad Bloqueada: Se requiere inicio de sesión obligatorio para procesar compras.");
                openAuthModal();
                return;
            }
            modalPayment.style.display = "flex";
            formPaymentCard.style.display = "block";
            paymentLoading.style.display = "none";
            paymentSuccessBox.style.display = "none";
        });
    }

    if (closePaymentModal && modalPayment) {
        closePaymentModal.addEventListener("click", () => modalPayment.style.display = "none");
    }

    if (formPaymentCard) {
        formPaymentCard.addEventListener("submit", (e) => {
            e.preventDefault();
            formPaymentCard.style.display = "none";
            paymentLoading.style.display = "block";

            setTimeout(() => {
                paymentLoading.style.display = "none";
                paymentSuccessBox.style.display = "block";
                const randomOrder = "FP-" + Math.floor(1000 + Math.random() * 9000);
                document.getElementById("order-id-label").textContent = `#${randomOrder}`;
                cart = [];
                saveState();
                renderCart();
            }, 2000);
        });
    }

    // Facturación CFDI
    const btnAbrirFactura = document.getElementById("btn-abrir-factura");
    const modalInvoice = document.getElementById("modal-invoice");
    const closeInvoiceModal = document.getElementById("close-invoice-modal");
    const formInvoice = document.getElementById("form-invoice");
    const invoicePreview = document.getElementById("invoice-preview");

    if (btnAbrirFactura && modalInvoice) {
        btnAbrirFactura.addEventListener("click", () => {
            modalPayment.style.display = "none";
            modalInvoice.style.display = "flex";
        });
    }

    if (closeInvoiceModal && modalInvoice) {
        closeInvoiceModal.addEventListener("click", () => modalInvoice.style.display = "none");
    }

    if (formInvoice) {
        formInvoice.addEventListener("submit", (e) => {
            e.preventDefault();
            const rfc = document.getElementById("inv-rfc").value;
            const name = document.getElementById("inv-name").value;

            document.getElementById("fact-receptor-label").textContent = name;
            document.getElementById("fact-rfc-label").textContent = rfc;
            document.getElementById("fact-total-label").textContent = subtotalEl ? subtotalEl.textContent : "$0.00 MXN";
            invoicePreview.style.display = "block";
        });
    }

    // Inicializadores
    saveState();
    renderUserSession();
    renderCatalog(productCatalog);
    renderCart();
});