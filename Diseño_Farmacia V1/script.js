document.addEventListener("DOMContentLoaded", () => {
    // Estado inicial del carrito (Datos simulados)
    let cart = [
        { id: 1, name: "Paracetamol 500mg", price: 85.00, quantity: 1 },
        { id: 2, name: "Vitamina C Efervescente", price: 140.00, quantity: 1 },
        { id: 3, name: "Termómetro Digital", price: 210.00, quantity: 1 }
    ];

    const cartContainer = document.getElementById("cart-items-container");
    const subtotalEl = document.getElementById("cart-subtotal");
    const totalEl = document.getElementById("cart-total");

    // Función principal para renderizar la interfaz del carrito
    function renderCart() {
        if (!cartContainer) return;

        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            cartContainer.innerHTML = `<div style="padding: 2rem 0; text-align: center; color: var(--text-muted);">El carrito está vacío.</div>`;
            updateTotals(0);
            return;
        }

        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const row = document.createElement("div");
            row.className = "cart-item-row";
            row.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-unit-price">$${item.price.toFixed(2)} MXN c/u</span>
                </div>
                <div class="cart-controls">
                    <!-- CAMBIOS: Incrementar / Decrementar -->
                    <div class="quantity-control">
                        <button class="quantity-btn btn-decrease" data-id="${item.id}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn btn-increase" data-id="${item.id}">+</button>
                    </div>
                    <span style="font-weight: 700; width: 90px; text-align: right;">$${itemTotal.toFixed(2)}</span>
                    <!-- BAJAS: Eliminar -->
                    <button class="btn-delete" data-id="${item.id}" title="Eliminar producto"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
            cartContainer.appendChild(row);
        });

        updateTotals(total);
        attachEventListeners();
    }

    // Actualiza los montos globales
    function updateTotals(total) {
        if (subtotalEl && totalEl) {
            subtotalEl.textContent = `$${total.toFixed(2)} MXN`;
            totalEl.textContent = `$${total.toFixed(2)} MXN`;
        }
    }

    // Asignación de eventos para Bajas y Cambios
    function attachEventListeners() {
        // Disminuir cantidad (Cambio / Baja si llega a 0)
        document.querySelectorAll(".btn-decrease").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.target.getAttribute("data-id"));
                const item = cart.find(p => p.id === id);
                if (item) {
                    if (item.quantity > 1) {
                        item.quantity--;
                    } else {
                        cart = cart.filter(p => p.id !== id);
                    }
                    renderCart();
                }
            });
        });

        // Incrementar cantidad (Cambio)
        document.querySelectorAll(".btn-increase").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.target.getAttribute("data-id"));
                const item = cart.find(p => p.id === id);
                if (item) {
                    item.quantity++;
                    renderCart();
                }
            });
        });

        // Eliminar producto por completo (Baja)
        document.querySelectorAll(".btn-delete").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.currentTarget.getAttribute("data-id"));
                cart = cart.filter(p => p.id !== id);
                renderCart();
            });
        });
    }

    // Modal para ALTAS (Agregar nuevo producto)
    const modal = document.getElementById("modal-alta");
    const btnNuevo = document.getElementById("btn-nuevo-producto");
    const btnCerrar = document.getElementById("close-modal");
    const formAlta = document.getElementById("form-alta-producto");

    if (btnNuevo && modal) {
        btnNuevo.addEventListener("click", () => modal.style.display = "flex");
    }

    if (btnCerrar && modal) {
        btnCerrar.addEventListener("click", () => modal.style.display = "none");
    }

    if (formAlta) {
        formAlta.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombre-prod").value;
            const precio = parseFloat(document.getElementById("precio-prod").value);
            const cantidad = parseInt(document.getElementById("cantidad-prod").value);

            const nuevoItem = {
                id: Date.now(),
                name: nombre,
                price: precio,
                quantity: cantidad
            };

            cart.push(nuevoItem);
            renderCart();

            formAlta.reset();
            modal.style.display = "none";
        });
    }

    // Renderizado inicial
    renderCart();
});