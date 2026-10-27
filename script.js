// Base de datos de 50 Medicamentos reales
const defaultProducts = [
    { id: 1, name: "Paracetamol 500mg (Caja 10 tab)", price: 15.00, category: "ANALGÉSICO", img: "https://media.istockphoto.com/id/874384254/es/foto/render-3d-de-paracetamol-frasco-con-p%C3%ADldoras-sobre-blanco.jpg?s=170667a&w=0&k=20&c=Ce9NrDZpIen47eL2cutqBFrO23zqlHLaNCvnxLVCIDo=" },
    { id: 2, name: "Paracetamol 750mg (Caja 10 tab)", price: 18.00, category: "ANALGÉSICO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn7KD64K86GrxgYZrUj4Cvgtway9hPwoDKf_h1SzWVKTamy4xIgayBV_i&s=10" },
    { id: 3, name: "Paracetamol Gotas 100mg/ml (15 ml)", price: 15.00, category: "ANALGÉSICO", img: "https://http2.mlstatic.com/D_NQ_NP_816399-MLA110036714073_042026-O.webp" },
    { id: 4, name: "Paracetamol Jarabe 3.2g (120 ml)", price: 24.00, category: "ANALGÉSICO", img: "https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/163079-800-450?v=638745625018200000&width=800&height=450&aspect=true" },
    { id: 5, name: "Paracetamol Supositorios 300mg", price: 27.00, category: "ANALGÉSICO", img: "https://static.wixstatic.com/media/1105ea_aa2a19b9b86a465ab35bd3420be1e245~mv2.jpg/v1/fit/w_3024,h_4032,q_90/file.jpg" },
    { id: 6, name: "Ibuprofeno 400mg (Caja 10 grageas)", price: 21.00, category: "AINE", img: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/230341L.jpg" },
    { id: 7, name: "Ibuprofeno 600mg (Caja 10 tab)", price: 34.00, category: "AINE", img: "https://http2.mlstatic.com/D_NQ_NP_975380-MLM92306483917_092025-O.webp" },
    { id: 8, name: "Ibuprofeno Suspensión Pediátrica", price: 31.00, category: "AINE", img: "https://http2.mlstatic.com/D_NQ_NP_796272-MLM84767360599_052025-O.webp" },
    { id: 9, name: "Naproxeno Sódico 275mg (Caja 20)", price: 34.00, category: "AINE", img: "https://http2.mlstatic.com/D_NQ_NP_708379-MLM80051970357_102024-O.webp" },
    { id: 10, name: "Naproxeno Sódico 550mg (Caja 12)", price: 24.50, category: "AINE", img: "https://farmaciaherrera.com.mx/cdn/shop/files/naproxeno_sodico_inflanox_550_mg_con_12_tabletas_785118752422_55f8afa2-fd0c-4d4f-9552-da8396434906.jpg?v=1763652044&width=1214" },
    { id: 11, name: "Naproxeno / Paracetamol (Caja 15)", price: 34.00, category: "AINE", img: "https://medicinaoncologica.com/wp-content/uploads/2023/06/naproxeno-partacetamol-275_rcd_pharma_mexico.jpg" },
    { id: 12, name: "Diclofenaco Tabletas 50 mg", price: 30.00, category: "AINE", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbK8sK0cLxOIQYIdcha_f-bcJzrQ6ACKjey-cq3RyFBA&s=10" },
    { id: 13, name: "Metoclopramida Tabletas 10 mg", price: 13.00, category: "GASTROINTESTINAL", img: "https://farmaciastelchi.com/wp-content/uploads/2026/02/M02993.png" },
    { id: 14, name: "Trimebutina Tabletas 200 mg", price: 84.00, category: "GASTROINTESTINAL", img: "https://production-media.fahorro.com/media/catalog/product/7/5/7502223708273_1.png" },
    { id: 15, name: "Senósidos A y B Tabletas", price: 54.00, category: "LAXANTE", img: "https://m.media-amazon.com/images/I/51YrJ0PKTQL._AC_UF350,350_QL80_.jpg" },
    { id: 16, name: "Dextrometorfano Jarabe Antitusivo", price: 48.50, category: "ANTITUSIVO", img: "https://laboratoriosifa.com/wp-content/uploads/Dextrometorfano-10-mg-600x600.jpg" },
    { id: 17, name: "Amoxicilina 500mg Cápsulas c/12", price: 65.00, category: "ANTIBIÓTICO", img: "https://media.istockphoto.com/id/874384254/es/foto/render-3d-de-paracetamol-frasco-con-p%C3%ADldoras-sobre-blanco.jpg?s=170667a&w=0&k=20&c=Ce9NrDZpIen47eL2cutqBFrO23zqlHLaNCvnxLVCIDo=" },
    { id: 18, name: "Amoxicilina / Ácido Clavulánico 875mg", price: 185.00, category: "ANTIBIÓTICO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn7KD64K86GrxgYZrUj4Cvgtway9hPwoDKf_h1SzWVKTamy4xIgayBV_i&s=10" },
    { id: 19, name: "Azitromicina 500mg Tabletas c/3", price: 120.00, category: "ANTIBIÓTICO", img: "https://http2.mlstatic.com/D_NQ_NP_816399-MLA110036714073_042026-O.webp" },
    { id: 20, name: "Ciprofloxacino 500mg Tabletas c/14", price: 75.00, category: "ANTIBIÓTICO", img: "https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/163079-800-450?v=638745625018200000&width=800&height=450&aspect=true" },
    { id: 21, name: "Loratadina 10mg Tabletas c/20", price: 35.00, category: "ANTIHISTAMÍNICOS", img: "https://static.wixstatic.com/media/1105ea_aa2a19b9b86a465ab35bd3420be1e245~mv2.jpg/v1/fit/w_3024,h_4032,q_90/file.jpg" },
    { id: 22, name: "Cetirizina 10mg Tabletas c/10", price: 42.00, category: "ANTIHISTAMÍNICOS", img: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/230341L.jpg" },
    { id: 23, name: "Clorfenamina Compuesta c/50", price: 28.00, category: "ANTIHISTAMÍNICOS", img: "https://http2.mlstatic.com/D_NQ_NP_975380-MLM92306483917_092025-O.webp" },
    { id: 24, name: "Omeprazol 20mg Cápsulas c/14", price: 45.00, category: "GASTROINTESTINAL", img: "https://http2.mlstatic.com/D_NQ_NP_796272-MLM84767360599_052025-O.webp" },
    { id: 25, name: "Pantoprazol 40mg Tabletas c/14", price: 95.00, category: "GASTROINTESTINAL", img: "https://http2.mlstatic.com/D_NQ_NP_708379-MLM80051970357_102024-O.webp" },
    { id: 26, name: "Ranitidina 150mg Tabletas c/20", price: 38.00, category: "GASTROINTESTINAL", img: "https://farmaciaherrera.com.mx/cdn/shop/files/naproxeno_sodico_inflanox_550_mg_con_12_tabletas_785118752422_55f8afa2-fd0c-4d4f-9552-da8396434906.jpg?v=1763652044&width=1214" },
    { id: 27, name: "Butilhioscina 10mg c/20 tab", price: 72.00, category: "GASTROINTESTINAL", img: "https://medicinaoncologica.com/wp-content/uploads/2023/06/naproxeno-partacetamol-275_rcd_pharma_mexico.jpg" },
    { id: 28, name: "Suero Oral Electrolitos 500ml", price: 26.00, category: "HIDRATACIÓN", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbK8sK0cLxOIQYIdcha_f-bcJzrQ6ACKjey-cq3RyFBA&s=10" },
    { id: 29, name: "Ácido Acetilsalicílico 500mg c/20", price: 22.00, category: "ANALGÉSICO", img: "https://farmaciastelchi.com/wp-content/uploads/2026/02/M02993.png" },
    { id: 30, name: "Ketorolaco 10mg Tabletas c/10", price: 58.00, category: "AINE", img: "https://production-media.fahorro.com/media/catalog/product/7/5/7502223708273_1.png" },
    { id: 31, name: "Metamizol Sódico 500mg c/10", price: 40.00, category: "ANALGÉSICO", img: "https://m.media-amazon.com/images/I/51YrJ0PKTQL._AC_UF350,350_QL80_.jpg" },
    { id: 32, name: "Salbutamol Inusor Aerosol", price: 145.00, category: "RESPIRATORIO", img: "https://laboratoriosifa.com/wp-content/uploads/Dextrometorfano-10-mg-600x600.jpg" },
    { id: 33, name: "Ambroxol Jarabe 120ml", price: 50.00, category: "RESPIRATORIO", img: "https://media.istockphoto.com/id/874384254/es/foto/render-3d-de-paracetamol-frasco-con-p%C3%ADldoras-sobre-blanco.jpg?s=170667a&w=0&k=20&c=Ce9NrDZpIen47eL2cutqBFrO23zqlHLaNCvnxLVCIDo=" },
    { id: 34, name: "Guaifenesina Jarabe 150ml", price: 55.00, category: "RESPIRATORIO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn7KD64K86GrxgYZrUj4Cvgtway9hPwoDKf_h1SzWVKTamy4xIgayBV_i&s=10" },
    { id: 35, name: "Loperamida 2mg Cápsulas c/12", price: 32.00, category: "GASTROINTESTINAL", img: "https://http2.mlstatic.com/D_NQ_NP_816399-MLA110036714073_042026-O.webp" },
    { id: 36, name: "Carbon Activado Tabletas c/20", price: 48.00, category: "GASTROINTESTINAL", img: "https://farmaciassimilaresmx.vtexassets.com/arquivos/ids/163079-800-450?v=638745625018200000&width=800&height=450&aspect=true" },
    { id: 37, name: "Vitamina C 1g Efervescente c/10", price: 85.00, category: "VITAMINAS", img: "https://static.wixstatic.com/media/1105ea_aa2a19b9b86a465ab35bd3420be1e245~mv2.jpg/v1/fit/w_3024,h_4032,q_90/file.jpg" },
    { id: 38, name: "Complejo B Cápsulas c/30", price: 110.00, category: "VITAMINAS", img: "https://dcuk1cxrnzjkh.cloudfront.net/imagesproducto/230341L.jpg" },
    { id: 39, name: "Ácido Fólico 5mg c/50 tab", price: 20.00, category: "VITAMINAS", img: "https://http2.mlstatic.com/D_NQ_NP_975380-MLM92306483917_092025-O.webp" },
    { id: 40, name: "Multivitamínico Adultos c/60", price: 160.00, category: "VITAMINAS", img: "https://http2.mlstatic.com/D_NQ_NP_796272-MLM84767360599_052025-O.webp" },
    { id: 41, name: "Insulina NPH Frasco 10ml", price: 450.00, category: "DIABETES", img: "https://http2.mlstatic.com/D_NQ_NP_708379-MLM80051970357_102024-O.webp" },
    { id: 42, name: "Metformina 850mg Tabletas c/30", price: 60.00, category: "DIABETES", img: "https://farmaciaherrera.com.mx/cdn/shop/files/naproxeno_sodico_inflanox_550_mg_con_12_tabletas_785118752422_55f8afa2-fd0c-4d4f-9552-da8396434906.jpg?v=1763652044&width=1214" },
    { id: 43, name: "Glibenclamida 5mg c/50 tab", price: 50.00, category: "DIABETES", img: "https://medicinaoncologica.com/wp-content/uploads/2023/06/naproxeno-partacetamol-275_rcd_pharma_mexico.jpg" },
    { id: 44, name: "Losartán 50mg Tabletas c/30", price: 80.00, category: "CARDIOVASCULAR", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbK8sK0cLxOIQYIdcha_f-bcJzrQ6ACKjey-cq3RyFBA&s=10" },
    { id: 45, name: "Captopril 25mg Tabletas c/30", price: 45.00, category: "CARDIOVASCULAR", img: "https://farmaciastelchi.com/wp-content/uploads/2026/02/M02993.png" },
    { id: 46, name: "Enalapril 10mg Tabletas c/30", price: 65.00, category: "CARDIOVASCULAR", img: "https://production-media.fahorro.com/media/catalog/product/7/5/7502223708273_1.png" },
    { id: 47, name: "Clindamicina 300mg Cápsulas c/16", price: 210.00, category: "ANTIBIÓTICO", img: "https://m.media-amazon.com/images/I/51YrJ0PKTQL._AC_UF350,350_QL80_.jpg" },
    { id: 48, name: "Fluconazol 150mg Cápsula única", price: 90.00, category: "ANTIMICÓTICO", img: "https://laboratoriosifa.com/wp-content/uploads/Dextrometorfano-10-mg-600x600.jpg" },
    { id: 49, name: "Ketoconazol Crema 2% 30g", price: 68.00, category: "ANTIMICÓTICO", img: "https://media.istockphoto.com/id/874384254/es/foto/render-3d-de-paracetamol-frasco-con-p%C3%ADldoras-sobre-blanco.jpg?s=170667a&w=0&k=20&c=Ce9NrDZpIen47eL2cutqBFrO23zqlHLaNCvnxLVCIDo=" },
    { id: 50, name: "Hidrocortisona Crema 1% 30g", price: 85.00, category: "DERMATOLÓGICO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn7KD64K86GrxgYZrUj4Cvgtway9hPwoDKf_h1SzWVKTamy4xIgayBV_i&s=10" }
];

let products = JSON.parse(localStorage.getItem("fp_products")) || defaultProducts;

let registeredUsers = JSON.parse(localStorage.getItem("fp_users")) || [
    { name: "Cliente Demo", email: "cliente@familypharma.com", password: "Password123", role: "client" },
    { name: "Administrador", email: "admin@familypharma.com", password: "Admin123", role: "admin" }
];

let currentUser = JSON.parse(localStorage.getItem("fp_current_user")) || null;
let cart = JSON.parse(localStorage.getItem("fp_cart")) || [];
let favorites = JSON.parse(localStorage.getItem("fp_favs")) || [];
let currentDetailProductId = null;

function normalizeText(text) {
    if (!text) return "";
    return text.toString().toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function showToast(message) {
    let toast = document.getElementById("fp-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "fp-toast";
        toast.style.cssText = `
            position: fixed; bottom: 20px; right: 20px; z-index: 9999;
            background: #0f172a; color: white; padding: 0.8rem 1.2rem;
            border-radius: 8px; font-size: 0.85rem; font-weight: 500;
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3); transition: all 0.3s ease;
            display: flex; align-items: center; gap: 0.5rem; opacity: 0; transform: translateY(10px);
        `;
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #22c55e;"></i> ${message}`;
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";

    // Actualizado a 4000ms (4 segundos) para cumplir con el tiempo de muestra
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
    }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    updateBadges();
    updateUserUI();

    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => filterProducts(e.target.value));
        if (searchBtn) searchBtn.addEventListener("click", () => filterProducts(searchInput.value));
    }

    const authModal = document.getElementById("modal-auth");
    const closeAuthBtn = document.getElementById("close-auth-modal");
    if (closeAuthBtn && authModal) {
        closeAuthBtn.addEventListener("click", () => { authModal.style.display = "none"; resetAuthModal(); });
    }

    const showRegister = document.getElementById("show-register");
    const showLoginFromReg = document.getElementById("show-login-from-reg");
    const showForgot = document.getElementById("show-forgot");
    const backToLogin = document.getElementById("back-to-login");
    const formLogin = document.getElementById("form-login");
    const formRegister = document.getElementById("form-register");
    const formForgot = document.getElementById("form-forgot");
    const authModalTitle = document.getElementById("auth-modal-title");

    if (showRegister) {
        showRegister.addEventListener("click", (e) => {
            e.preventDefault();
            formLogin.style.display = "none";
            formRegister.style.display = "block";
            formForgot.style.display = "none";
            authModalTitle.textContent = "Crear Cuenta";
        });
    }
    if (showLoginFromReg) {
        showLoginFromReg.addEventListener("click", (e) => {
            e.preventDefault();
            formRegister.style.display = "none";
            formLogin.style.display = "block";
            formForgot.style.display = "none";
            authModalTitle.textContent = "Iniciar Sesión";
        });
    }
    if (showForgot) {
        showForgot.addEventListener("click", (e) => {
            e.preventDefault();
            formLogin.style.display = "none";
            formRegister.style.display = "none";
            formForgot.style.display = "block";
            authModalTitle.textContent = "Recuperar Contraseña";
        });
    }
    if (backToLogin) {
        backToLogin.addEventListener("click", (e) => {
            e.preventDefault();
            formForgot.style.display = "none";
            formLogin.style.display = "block";
            authModalTitle.textContent = "Iniciar Sesión";
        });
    }

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
                showToast(`¡Bienvenido de nuevo, ${currentUser.name}!`);
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        });
    }

    if (formRegister) {
        formRegister.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("reg-name").value.trim();
            const email = document.getElementById("reg-email").value.trim();
            const password = document.getElementById("reg-password").value;

            const exists = registeredUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
            if (exists) {
                alert("Este correo ya está registrado.");
                return;
            }

            const newUser = { name, email, password, role: "client" };
            registeredUsers.push(newUser);
            localStorage.setItem("fp_users", JSON.stringify(registeredUsers));

            currentUser = newUser;
            localStorage.setItem("fp_current_user", JSON.stringify(currentUser));

            updateUserUI();
            if (authModal) authModal.style.display = "none";
            resetAuthModal();
            formRegister.reset();
            showToast(`¡Cuenta creada con éxito! Bienvenido, ${name}`);
        });
    }

    if (formForgot) {
        formForgot.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("forgot-email").value.trim();
            const found = registeredUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
            if (found) {
                showToast(`Enlace enviado a: ${email}`);
                if (authModal) authModal.style.display = "none";
                resetAuthModal();
                formForgot.reset();
            } else {
                alert("El correo ingresado no está registrado.");
            }
        });
    }

    const addModal = document.getElementById("modal-add-product");
    const btnOpenAdd = document.getElementById("btn-open-add-product");
    const navOpenAdd = document.getElementById("nav-open-add-modal");
    const closeAddModal = document.getElementById("close-add-product-modal");

    const openAddFn = (e) => {
        e.preventDefault();
        if (addModal) addModal.style.display = "flex";
    };

    if (btnOpenAdd) btnOpenAdd.addEventListener("click", openAddFn);
    if (navOpenAdd) navOpenAdd.addEventListener("click", openAddFn);
    if (closeAddModal && addModal) {
        closeAddModal.addEventListener("click", () => { addModal.style.display = "none"; });
    }

    const formAddProduct = document.getElementById("form-add-product");
    if (formAddProduct) {
        formAddProduct.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("new-prod-name").value.trim();
            const category = document.getElementById("new-prod-cat").value.trim().toUpperCase();
            const price = parseFloat(document.getElementById("new-prod-price").value);
            let img = document.getElementById("new-prod-img").value.trim();

            if (!img) img = "https://media.istockphoto.com/id/874384254/es/foto/render-3d-de-paracetamol-frasco-con-p%C3%ADldoras-sobre-blanco.jpg?s=170667a&w=0&k=20&c=Ce9NrDZpIen47eL2cutqBFrO23zqlHLaNCvnxLVCIDo=";

            const newProd = {
                id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
                name, category, price, img
            };

            products.unshift(newProd);
            localStorage.setItem("fp_products", JSON.stringify(products));
            renderProducts(products);

            if (addModal) addModal.style.display = "none";
            formAddProduct.reset();
            showToast(`¡Medicamento "${name}" dado de alta!`);
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
        if (e.target === authModal) { authModal.style.display = "none"; resetAuthModal(); }
        if (e.target === addModal) addModal.style.display = "none";
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

function resetAuthModal() {
    const formLogin = document.getElementById("form-login");
    const formRegister = document.getElementById("form-register");
    const formForgot = document.getElementById("form-forgot");
    const authModalTitle = document.getElementById("auth-modal-title");
    
    if (formLogin && formRegister && formForgot) {
        formLogin.style.display = "block";
        formRegister.style.display = "none";
        formForgot.style.display = "none";
        formLogin.reset(); formRegister.reset(); formForgot.reset();
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

    grid.innerHTML = items.map(p => {
        const isFav = favorites.some(f => f.id === p.id);
        const heartClass = isFav ? "fa-solid fa-heart" : "fa-regular fa-heart";
        const heartStyle = isFav ? "color: #ef4444;" : "color: #64748b;";

        return `
            <div style="background: white; border-radius: 8px; padding: 1rem; border: 1px solid #e2e8f0; display: flex; flex-direction: column; justify-content: space-between; height: 380px; position: relative; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);" onclick="openProductDetail(${p.id})">
                <div style="width: 100%;">
                    <div style="width: 100%; height: 140px; background: #fff; border-radius: 6px; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-bottom: 0.8rem;">
                        <img src="${p.img}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: contain; display: block;">
                    </div>
                    <div style="font-size: 0.75rem; color: #64748b; font-weight: bold; text-transform: uppercase; margin-bottom: 0.3rem;">${p.category}</div>
                    <h3 style="font-size: 0.95rem; color: #0f172a; height: 2.4rem; overflow: hidden; margin-bottom: 0.3rem;">${p.name}</h3>
                </div>
                <div style="width: 100%;">
                    <div style="font-size: 1.1rem; font-weight: bold; color: var(--primary); margin-bottom: 0.8rem;">$${p.price.toFixed(2)} MXN</div>
                    <div style="display: flex; gap: 0.5rem; justify-content: center;" onclick="event.stopPropagation()">
                        <button onclick="addToCart(${p.id})" class="btn btn-primary" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Agregar</button>
                        <button onclick="toggleFav(${p.id})" class="btn btn-outline" style="padding: 0.4rem 0.7rem;" title="Favoritos">
                            <i class="${heartClass}" style="${heartStyle}"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
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
    const q = normalizeText(query.trim());
    const filtered = products.filter(p => 
        normalizeText(p.name).includes(q) || normalizeText(p.category).includes(q)
    );
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
    showToast(`"${prod.name}" agregado al carrito`);
}

function toggleFav(id) {
    if (!currentUser) {
        alert("⚠️ Acceso denegado: Debe iniciar sesión obligatoriamente para agregar productos a sus favoritos.");
        resetAuthModal();
        const authModal = document.getElementById("modal-auth");
        if (authModal) authModal.style.display = "flex";
        return;
    }

    const prod = products.find(p => p.id === id);
    if (!prod) return;

    const index = favorites.findIndex(p => p.id === id);
    if (index === -1) {
        favorites.push(prod);
        showToast(`Agregado a Favoritos`);
    } else {
        favorites.splice(index, 1);
        showToast(`Removido de Favoritos`);
    }

    localStorage.setItem("fp_favs", JSON.stringify(favorites));
    updateBadges();
    renderProducts(products);
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
    const navAddBtn = document.getElementById("nav-open-add-modal");
    const bodyAddBtn = document.getElementById("btn-open-add-product");

    const isAdmin = currentUser && currentUser.role === "admin";

    if (navAddBtn) navAddBtn.style.display = isAdmin ? "inline-block" : "none";
    if (bodyAddBtn) bodyAddBtn.style.display = isAdmin ? "inline-block" : "none";

    if (!userContainer) return;

    if (currentUser) {
        userContainer.innerHTML = `
            <span style="font-weight: 600; font-size: 0.9rem; color: var(--primary); margin-right: 0.5rem;">
                Hola, ${currentUser.name} ${isAdmin ? '<span style="font-size:0.65rem; background:var(--primary); color:white; padding:1px 5px; border-radius:3px; vertical-align:middle;">ADMIN</span>' : ''}
            </span>
            <button id="logout-btn" class="btn btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.8rem;">Cerrar Sesión</button>
        `;
        document.getElementById("logout-btn").addEventListener("click", () => {
            currentUser = null;
            cart = [];
            favorites = [];
            localStorage.removeItem("fp_current_user");
            localStorage.removeItem("fp_cart");
            localStorage.removeItem("fp_favs");
            
            updateUserUI();
            updateBadges();
            renderProducts(products);
            showToast("Sesión cerrada y datos temporales borrados.");
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