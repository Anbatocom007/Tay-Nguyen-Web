let allProducts = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
});

async function fetchProducts() {
  try {
    const res = await fetch("products.json");
    allProducts = await res.json();
    displayProducts(allProducts);
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu sản phẩm:", error);
    document.getElementById("productGrid").innerHTML =
      "<p>Không thể tải danh sách sản phẩm. Hãy chạy website qua Local Server (Live Server).</p>";
  }
}

function displayProducts(products) {
  const container = document.getElementById("productGrid");
  if (!container) return;

  container.innerHTML = products
    .map(
      (item) => `
    <div class="product-card">
      <img src="${item.image}" alt="${item.name}" class="product-img">
      <div class="product-body">
        <div class="product-origin">📍 Nguồn gốc: ${item.origin}</div>
        <div class="product-title">${item.name}</div>
        <div class="product-desc">${item.desc}</div>
        <div class="product-footer">
          <span class="product-price">${item.price}</span>
          <button class="buy-btn" onclick="alert('Đã thêm ${item.name} vào giỏ!')">Chọn mua</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function filterProducts(category) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  if (category === "all") {
    displayProducts(allProducts);
  } else {
    const filtered = allProducts.filter((item) => item.category === category);
    displayProducts(filtered);
  }
}
