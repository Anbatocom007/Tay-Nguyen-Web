# 🌿 Tây Nguyên Mart - Tinh Hoa Nông Sản Đại Ngàn

Website thương mại & giới thiệu các sản phẩm nông sản, thảo dược và đặc sản cao cấp từ vùng đất Tây Nguyên (Đắk Lắk, Gia Lai, Lâm Đồng, Kontum, Đắk Nông).

---

## 🌟 Tính Năng Nổi Bật

- **Trang Chủ (`index.html`)**: 
  - Hero Banner ấn tượng tôn vinh giá trị nông sản Tây Nguyên.
  - Giới thiệu tổng quan về các nhóm đặc sản nổi tiếng (Cà phê Buôn Ma Thuột, Hạt dinh dưỡng, Dược liệu & Mật ong rừng).

- **Trang Sản Phẩm (`products.html`)**:
  - Tải dữ liệu sản phẩm động từ file `products.json`.
  - Bộ lọc sản phẩm theo từng danh mục: *Cà Phê*, *Hạt Dinh Dưỡng*, *Mật Ong*, *Thảo Dược & Trà*, *Đặc Sản Khác*.
  - Thẻ sản phẩm trực quan hiển thị giá, nguồn gốc xuất xứ và nút chọn mua.

- **Trang Liên Hệ Trực Tuyến (`contact.html`)**:
  - Khung thông tin liên hệ đa kênh (Trụ sở chính, Hotline Sỉ/Lẻ, Email CSKH, Giờ mở cửa, Mạng xã hội).
  - Form gửi thắc mắc & đăng ký nguồn sỉ / đại lý với phản hồi tức thì.
  - Hệ thống danh sách showroom chi nhánh tại Buôn Ma Thuột, Pleiku, Đà Lạt và TP. Hồ Chí Minh.
  - Tích hợp bản đồ trực quan Google Maps & Mục Giải Đáp Thắc Mắc (FAQ).

- **Giao Diện Responsive**:
  - Tương thích tối ưu trên mọi thiết bị (Desktop, Tablet, Mobile).
  - Tông màu chủ đạo xanh lá thiên nhiên tươi mát (`#2d6a4f`, `#1b4332`, `#d8f3dc`).

---

## 📁 Cấu Trúc Thư Mục Project

```text
Tay-Nguyen-Web/
├── index.html        # Trang chủ website
├── products.html     # Trang danh sách & lọc sản phẩm
├── contact.html      # Trang liên hệ & thông tin chi nhánh
├── products.json     # Dữ liệu sản phẩm (JSON)
├── script.js         # Xử lý logic tải sản phẩm & bộ lọc
├── Css/
│   └── style.css     # File định dạng giao diện CSS chính
└── README.md         # Tài liệu hướng dẫn dự án
```

---

## 🚀 Hướng Dẫn Chạy Website

Do trang sản phẩm sử dụng API `fetch()` để tải dữ liệu từ file `products.json`, bạn nên khởi chạy website qua một Local Server để tránh lỗi CORS của trình duyệt:

### Cách 1: Sử dụng Extension "Live Server" trên VS Code (Khuyên dùng)
1. Mở thư mục dự án trong **Visual Studio Code**.
2. Cài đặt Extension **Live Server** (của Ritwick Dey).
3. Click chuột phải vào file `index.html` và chọn **Open with Live Server**.

### Cách 2: Sử dụng Python HTTP Server
Mở Terminal tại thư mục project và chạy lệnh:
```bash
# Đối với Python 3
python -m http.server 8000
```
Sau đó mở trình duyệt và truy cập: `http://localhost:8000`

---

## 🛠️ Công Nghệ Sử Dụng

- **HTML5**: Cấu trúc ngữ nghĩa chuẩn SEO.
- **CSS3**: Layout Flexbox & CSS Grid, Biến CSS (CSS Variables), Media Queries cho Responsive design.
- **JavaScript (ES6+)**: Fetch API, Filter dữ liệu mảng, Event Listeners.

---

## 📝 Bản Quyền & Phát Triển

&copy; 2026 **Tây Nguyên Mart**. Kết nối và lan tỏa giá trị nông sản Việt.
