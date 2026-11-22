// <..!..> MITHAI BHANDAR JAVASCRIPT. Product data is the easiest place to edit the menu. <..!..>

/* <..!..> 01. EMAILJS SETTINGS: Keep your existing keys here. <..!..> */
const EMAILJS_PUBLIC_KEY = "vLbGySyPBoyokTkjN";
const EMAILJS_SERVICE_ID = "service_4xx06nq";
const EMAILJS_TEMPLATE_ID = "template_2lx2z07";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

/* <..!..> 02. PRODUCT DATA: Change name, category, price, unit, emoji, or description here. <..!..> */
const products = [
  // <..!..> SWEETS <..!..>
  { id: 1, name: "Gulab Jamun", category: "sweets", price: 50, unit: "250g", emoji: "🍯", desc: "Soft, warm and syrupy." },
  { id: 2, name: "Kaju Katli", category: "sweets", price: 140, unit: "250g", emoji: "🔺", desc: "Classic cashew sweet." },
  { id: 3, name: "Rasgulla", category: "sweets", price: 80, unit: "250g", emoji: "⚪", desc: "Light and juicy Bengali-style sweet." },
  { id: 4, name: "Motichoor Laddu", category: "sweets", price: 90, unit: "250g", emoji: "🟠", desc: "Tiny boondi pearls with rich flavour." },
  { id: 5, name: "Jalebi", category: "sweets", price: 60, unit: "250g", emoji: "🌀", desc: "Crispy spirals soaked in syrup." },
  { id: 6, name: "Milk Cake", category: "sweets", price: 110, unit: "250g", emoji: "🍰", desc: "Rich traditional milk sweet." },
  { id: 7, name: "Rasmalai", category: "sweets", price: 100, unit: "4 pcs", emoji: "🥛", desc: "Soft dumplings in creamy milk." },
  { id: 8, name: "Besan Laddu", category: "sweets", price: 85, unit: "250g", emoji: "🟡", desc: "Roasted gram-flour laddus." },
  { id: 9, name: "Soan Papdi", category: "sweets", price: 65, unit: "250g", emoji: "🍥", desc: "Light, flaky and sweet." },
  { id: 10, name: "Peda", category: "sweets", price: 90, unit: "250g", emoji: "🟤", desc: "Soft milk-based peda." },
  { id: 11, name: "Barfi", category: "sweets", price: 95, unit: "250g", emoji: "⬜", desc: "Creamy milk fudge with nuts." },
  { id: 12, name: "Gajar Halwa", category: "sweets", price: 90, unit: "250g", emoji: "🥕", desc: "Warm carrot halwa with nuts." },

  // <..!..> CHOCOLATES <..!..>
  { id: 13, name: "Milk Chocolate", category: "chocolates", price: 45, unit: "1 bar", emoji: "🍫", desc: "Smooth and creamy milk chocolate." },
  { id: 14, name: "Dark Chocolate", category: "chocolates", price: 55, unit: "1 bar", emoji: "🍫", desc: "Rich cocoa chocolate." },
  { id: 15, name: "White Chocolate", category: "chocolates", price: 50, unit: "1 bar", emoji: "🤍", desc: "Sweet and creamy white chocolate." },
  { id: 16, name: "Chocolate Truffles", category: "chocolates", price: 90, unit: "4 pcs", emoji: "🍫", desc: "Small rich chocolate treats." },
  { id: 17, name: "Choco Laddus", category: "chocolates", price: 80, unit: "4 pcs", emoji: "🍫", desc: "Indian laddus with a chocolate twist." },
  { id: 18, name: "Chocolate Fudge", category: "chocolates", price: 85, unit: "100g", emoji: "🍫", desc: "Soft, rich chocolate fudge." },

  // <..!..> SNACKS <..!..>
  { id: 19, name: "Samosa", category: "snacks", price: 15, unit: "1 pc", emoji: "🥟", desc: "Crispy pastry with spiced filling." },
  { id: 20, name: "Kachori", category: "snacks", price: 20, unit: "1 pc", emoji: "🟤", desc: "Crispy, flaky and delicious." },
  { id: 21, name: "Paneer Pakora", category: "snacks", price: 60, unit: "6 pcs", emoji: "🍘", desc: "Golden fried paneer bites." },
  { id: 22, name: "Dhokla", category: "snacks", price: 55, unit: "250g", emoji: "🟨", desc: "Soft, fluffy and savoury." },
  { id: 23, name: "Aloo Tikki", category: "snacks", price: 40, unit: "2 pcs", emoji: "🥔", desc: "Crispy potato patties." },
  { id: 24, name: "Khandvi", category: "snacks", price: 65, unit: "250g", emoji: "🌯", desc: "Soft gram-flour rolls with tempering." },
  { id: 25, name: "Mathri", category: "snacks", price: 55, unit: "250g", emoji: "🥨", desc: "Flaky North Indian savoury snack." },
  { id: 26, name: "Namak Para", category: "snacks", price: 45, unit: "250g", emoji: "🥨", desc: "Crunchy salted snack bites." },
  { id: 27, name: "Bhel Puri", category: "snacks", price: 45, unit: "1 plate", emoji: "🥗", desc: "Crispy puffed-rice chaat." },
  { id: 28, name: "Pani Puri", category: "snacks", price: 40, unit: "6 pcs", emoji: "🟤", desc: "Crispy puris with tangy pani." },

  // <..!..> CAKES <..!..>
  { id: 29, name: "Chocolate Cake", category: "cakes", price: 220, unit: "500g", emoji: "🎂", desc: "Soft chocolate cake with cream." },
  { id: 30, name: "Vanilla Cake", category: "cakes", price: 200, unit: "500g", emoji: "🍰", desc: "Classic vanilla cream cake." },
  { id: 31, name: "Black Forest Cake", category: "cakes", price: 240, unit: "500g", emoji: "🍒", desc: "Chocolate, cherry and cream cake." },
  { id: 32, name: "Butterscotch Cake", category: "cakes", price: 230, unit: "500g", emoji: "🍰", desc: "Creamy cake with butterscotch crunch." },

  // <..!..> DRY FRUITS <..!..>
  { id: 33, name: "Kaju Mix", category: "dry-fruits", price: 180, unit: "250g", emoji: "🥜", desc: "Roasted cashews and tasty nuts." },
  { id: 34, name: "Almonds", category: "dry-fruits", price: 170, unit: "250g", emoji: "🌰", desc: "Crunchy premium almonds." },
  { id: 35, name: "Pistachios", category: "dry-fruits", price: 190, unit: "250g", emoji: "🥜", desc: "Roasted salted pistachios." },
  { id: 36, name: "Dry Fruit Box", category: "dry-fruits", price: 300, unit: "500g", emoji: "🎁", desc: "Assorted premium dry fruits." },

  // <..!..> SPECIAL ITEMS <..!..>
  { id: 37, name: "Kesar Pista Roll", category: "special", price: 140, unit: "250g", emoji: "💛", desc: "Pistachio and saffron milk roll." },
  { id: 38, name: "Anjeer Barfi", category: "special", price: 150, unit: "250g", emoji: "🟣", desc: "Fig and nut based festive sweet." },
  { id: 39, name: "Pista Barfi", category: "special", price: 130, unit: "250g", emoji: "💚", desc: "Creamy pistachio milk fudge." },
  { id: 40, name: "Malai Sandwich", category: "special", price: 120, unit: "4 pcs", emoji: "🥛", desc: "Soft milk sweet with creamy filling." },
  { id: 41, name: "Mango Barfi", category: "special", price: 110, unit: "250g", emoji: "🥭", desc: "Mango-flavoured milk fudge." },
  { id: 42, name: "Festive Mithai Box", category: "special", price: 220, unit: "500g", emoji: "🎁", desc: "A colourful assorted box for celebrations." }
];

/* <..!..> 03. CART STATE: Saved in the browser so refresh does not empty it. <..!..> */
const CART_KEY = "mithai_bhandar_cart";

let cart = loadCart();

/* <..!..> 04. DOM REFERENCES: All important HTML elements are collected here. <..!..> */
const productGrid = document.getElementById("productGrid");
const menuCount = document.getElementById("menuCount");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutModal = document.getElementById("checkoutModal");
const successModal = document.getElementById("successModal");
const orderForm = document.getElementById("orderForm");

/* <..!..> 05. HELPER FUNCTIONS: Small reusable functions. <..!..> */
function money(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

function getProduct(id) {
  return products.find(product => product.id === id);
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    if (!Array.isArray(saved)) return [];

    return saved
      .filter(item => getProduct(item.id) && Number(item.qty) > 0)
      .map(item => ({
        id: Number(item.id),
        qty: Number(item.qty)
      }));
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

/* <..!..> 06. PRODUCT MENU: Search and category filtering happen here. <..!..> */
function renderProducts(category = "all", query = "") {
  const search = query.trim().toLowerCase();

  const visibleProducts = products.filter(product => {
    const categoryMatches = category === "all" || product.category === category;
    const searchableText = `${product.name} ${product.category} ${product.desc} ${product.unit}`.toLowerCase();
    const searchMatches = !search || searchableText.includes(search);
    return categoryMatches && searchMatches;
  });

  menuCount.textContent = `${visibleProducts.length} item${visibleProducts.length === 1 ? "" : "s"} found`;

  if (!visibleProducts.length) {
    productGrid.innerHTML = `
      <div class="no-results">
        <div class="big">🔎</div>
        <h3>No items found</h3>
        <p>Try another search or choose a different category.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = visibleProducts.map(product => `
    <article class="product">
      <div class="product-img" aria-hidden="true">${product.emoji}</div>

      <div class="product-body">
        <div class="product-cat">${formatCategory(product.category)}</div>
        <h3>${product.name}</h3>
        <p>${product.desc} • ${product.unit}</p>

        <div class="product-bottom">
          <span class="price">${money(product.price)}</span>
          <button class="add-btn" type="button" data-add="${product.id}">+ Add</button>
        </div>
      </div>
    </article>
  `).join("");
}

function formatCategory(category) {
  const names = {
    sweets: "Sweets",
    chocolates: "Chocolates",
    snacks: "Snacks",
    cakes: "Cakes",
    "dry-fruits": "Dry Fruits",
    special: "Special"
  };

  return names[category] || category;
}

/* <..!..> 07. CART ACTIONS: Add, remove, and change quantities. <..!..> */
function addToCart(id) {
  const item = cart.find(cartItem => cartItem.id === id);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }

  saveCart();
  openCart();
}

function changeQty(id, amount) {
  const item = cart.find(cartItem => cartItem.id === id);
  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(cartItem => cartItem.id !== id);
  }

  saveCart();
}

function removeItem(id) {
  cart = cart.filter(cartItem => cartItem.id !== id);
  saveCart();
}

/* <..!..> 08. CART DISPLAY: Builds the shopping cart panel. <..!..> */
function renderCart() {
  cartCount.textContent = getCartCount();
  cartTotal.textContent = money(getCartTotal());

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty">
        <div class="empty-emoji">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add something delicious from the menu.</p>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = cart.map(item => {
    const product = getProduct(item.id);

    return `
      <div class="cart-item">
        <div class="cart-item-img" aria-hidden="true">${product.emoji}</div>

        <div>
          <h4>${product.name}</h4>
          <small>${money(product.price)} • ${product.unit}</small>

          <div class="qty">
            <button type="button" data-minus="${product.id}" aria-label="Decrease ${product.name} quantity">−</button>
            <b>${item.qty}</b>
            <button type="button" data-plus="${product.id}" aria-label="Increase ${product.name} quantity">+</button>
          </div>

          <button class="remove" type="button" data-remove="${product.id}">Remove</button>
        </div>

        <strong>${money(product.price * item.qty)}</strong>
      </div>
    `;
  }).join("");
}

/* <..!..> 09. CART PANEL OPEN/CLOSE <..!..> */
function openCart() {
  cartPanel.classList.add("open");
  overlay.classList.add("show");
}

function closeCart() {
  cartPanel.classList.remove("open");
  overlay.classList.remove("show");
}

/* <..!..> 10. ORDER ID AND PICKUP TIME <..!..> */
function buildOrderId() {
  const now = new Date();
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("");

  const random = Math.floor(100 + Math.random() * 900);
  return `MB-${date}-${random}`;
}

function getPickupTime() {
  const hour = document.getElementById("pickupHour").value;
  const minute = document.getElementById("pickupMinute").value;
  const period = document.getElementById("pickupPeriod").value;

  if (!hour || !minute || !period) return "";
  return `${hour}:${minute} ${period}`;
}

function getLocalDateString() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().split("T")[0];
}

/* <..!..> 11. ORDER PREVIEW: The improved preview shown before customer submits. <..!..> */
function renderPreview() {
  const total = getCartTotal();
  const count = getCartCount();

  document.getElementById("orderPreview").innerHTML = `
    <div class="preview-title">
      <span>🧾 Order summary</span>
      <b>${count} item${count === 1 ? "" : "s"}</b>
    </div>

    ${cart.map(item => {
      const product = getProduct(item.id);

      return `
        <div class="preview-item">
          <div class="preview-emoji" aria-hidden="true">${product.emoji}</div>

          <div class="preview-item-info">
            <strong>${product.name}</strong>
            <span>${product.unit} • Quantity: ${item.qty}</span>
          </div>

          <div class="preview-price">
            <b>${money(product.price * item.qty)}</b>
          </div>
        </div>
      `;
    }).join("")}

    <div class="preview-total">
      <span>Total</span>
      <strong>${money(total)}</strong>
    </div>

    <div class="payment-badge">
      💵 Pay at the shop when you collect your order
    </div>
  `;
}

/* <..!..> 12. EVENT HANDLERS: Search, filters, cart, and checkout buttons. <..!..> */
searchInput.addEventListener("input", () => {
  const category = document.querySelector(".filter.active")?.dataset.category || "all";
  renderProducts(category, searchInput.value);
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  const category = document.querySelector(".filter.active")?.dataset.category || "all";
  renderProducts(category, "");
  searchInput.focus();
});

document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest(".filter");
  if (!button) return;

  document.querySelectorAll(".filter").forEach(filter => filter.classList.remove("active"));
  button.classList.add("active");

  renderProducts(button.dataset.category, searchInput.value);
});

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

cartItems.addEventListener("click", event => {
  const plus = event.target.closest("[data-plus]");
  const minus = event.target.closest("[data-minus]");
  const remove = event.target.closest("[data-remove]");

  if (plus) changeQty(Number(plus.dataset.plus), 1);
  if (minus) changeQty(Number(minus.dataset.minus), -1);
  if (remove) removeItem(Number(remove.dataset.remove));
});

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

/* <..!..> 13. CHECKOUT OPENING <..!..> */
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (!cart.length) {
    alert("Your cart is empty. Please add an item first.");
    return;
  }

  closeCart();
  renderPreview();

  document.getElementById("pickupDate").min = getLocalDateString();
  checkoutModal.classList.add("show");
  checkoutModal.setAttribute("aria-hidden", "false");
});

/* <..!..> 14. CHECKOUT CLOSING <..!..> */
function closeCheckout() {
  checkoutModal.classList.remove("show");
  checkoutModal.setAttribute("aria-hidden", "true");
}

document.getElementById("closeCheckout").addEventListener("click", closeCheckout);

/* <..!..> 15. EMAILJS ORDER SUBMISSION <..!..> */
orderForm.addEventListener("submit", async event => {
  event.preventDefault();

  const pickupTime = getPickupTime();

  if (!pickupTime) {
    alert("Please select a pickup time.");
    return;
  }

  document.getElementById("pickupTime").value = pickupTime;

  const status = document.getElementById("emailStatus");
  const submitButton = document.getElementById("submitOrder");

  if (
    EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" ||
    EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
    EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID"
  ) {
    status.textContent = "EmailJS is not configured. Add your EmailJS values in script.js.";
    status.style.color = "#a44b32";
    return;
  }

  const orderId = buildOrderId();
  const orderItems = cart.map(item => {
    const product = getProduct(item.id);
    return `${item.qty} × ${product.name} (${product.unit}) = ${money(product.price * item.qty)}`;
  });

  document.getElementById("emailOrderId").value = orderId;
  document.getElementById("emailOrderItems").value = orderItems.join("\n");
  document.getElementById("emailOrderTotal").value = money(getCartTotal());

  submitButton.disabled = true;
  submitButton.textContent = "Sending order...";
  status.textContent = "Sending your pre-order...";
  status.style.color = "";

  try {
    await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, orderForm);

    document.getElementById("successOrderId").textContent = orderId;

    closeCheckout();
    successModal.classList.add("show");
    successModal.setAttribute("aria-hidden", "false");

    cart = [];
    saveCart();
    orderForm.reset();
    status.textContent = "";
  } catch (error) {
    console.error(error);
    status.textContent = "Could not send the order. Please check your EmailJS settings and try again.";
    status.style.color = "#a44b32";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Place Pre-Order";
  }
});

/* <..!..> 16. SUCCESS MODAL <..!..> */
document.getElementById("doneBtn").addEventListener("click", () => {
  successModal.classList.remove("show");
  successModal.setAttribute("aria-hidden", "true");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* <..!..> 17. ESCAPE KEY: Close open panels/modals. <..!..> */
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;

  closeCart();
  closeCheckout();

  successModal.classList.remove("show");
  successModal.setAttribute("aria-hidden", "true");
});

/* <..!..> 18. START WEBSITE <..!..> */
renderProducts();
renderCart();
