document.addEventListener('DOMContentLoaded', () => {
    // 1. Lire l'id du produit dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // 2. Trouver le produit correspondant
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.getElementById('product-content').innerHTML = `
            <div style="text-align: center; width: 100%; padding: 50px 0;">
                <i class="fas fa-exclamation-circle" style="font-size: 3rem; color: var(--accent-secondary); margin-bottom: 20px;"></i>
                <h2>Produit introuvable</h2>
                <p>Désolé, le produit que vous recherchez n'existe pas ou a été déplacé.</p>
                <a href="index.html" class="btn btn-cart" style="max-width: 250px; margin: 20px auto;">Retour à la boutique</a>
            </div>
        `;
        return;
    }

    // 3. Injecter dynamiquement les informations du produit
    const productContent = document.getElementById('product-content');
    productContent.innerHTML = `
        <div class="product-image-section">
            <img src="${product.image}" alt="${product.nom}">
        </div>
        <div class="product-info-section">
            <h2 class="product-title">${product.nom}</h2>
            <div class="product-price">${product.prix.toLocaleString()} DA</div>
            <p class="product-description">${product.description_longue}</p>
            
            <div class="action-buttons">
                <button id="add-to-cart-btn" class="btn btn-cart">
                    <i class="fas fa-shopping-cart"></i> Ajouter au panier
                </button>
                <button id="scroll-to-order" class="btn btn-order">
                    <i class="fas fa-credit-card"></i> Commander
                </button>
            </div>
        </div>
    `;

    // --- Fonctionnalité Panier ---
    const cartCounter = document.getElementById('cart-counter');
    const notification = document.getElementById('cart-notification');

    function updateCartUI() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCounter.textContent = totalItems;
    }

    // Initialiser le compteur
    updateCartUI();

    document.getElementById('add-to-cart-btn').addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                nom: product.nom,
                prix: product.prix,
                image: product.image,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();

        // Notification visuelle
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    });

    // --- Bouton Commander (Scroll) ---
    document.getElementById('scroll-to-order').addEventListener('click', () => {
        document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' });
    });

    // --- Formulaire de commande ---
    document.getElementById('purchase-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const customerName = `${formData.get('prenom')} ${formData.get('nom')}`;
        
        alert(`Merci pour votre commande, ${customerName} !\n\nNous avons bien reçu votre demande pour le produit : ${product.nom}.\nUn e-mail de confirmation a été envoyé à ${formData.get('email')}.`);
        
        e.target.reset();
    });
});