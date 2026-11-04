# xx88 - Platform Kasino & Sukan Online Malaysia (Next.js Chuẩn SEO)

Dự án chuyển đổi toàn diện mã nguồn sang **Next.js (App Router)** với kiến trúc tối ưu hóa công cụ tìm kiếm (**SEO Standards**), đồng thời tích hợp giao diện hiện đại, sắc nét mô phỏng chuẩn xác nền tảng [xx88.uno](https://xx88.uno/).

---

## 🌟 Tổng Quan Tính Năng Nổi Bật

1. **Chuẩn SEO Quốc Tế (SEO-Ready)**:
   - **Metadata API**: Cấu hình tự động `title`, `description`, `canonical`, `alternates` (`ms-MY`, `en-MY`, `x-default`), OpenGraph, Twitter Cards.
   - **JSON-LD Structured Data**: Tích hợp Schema `WebSite`, `Organization`, `Casino`, `FAQPage`, và `BreadcrumbList` chuẩn Google Rich Snippets.
   - **Dynamic Sitemap & Robots**: Tự động sinh `sitemap.xml` và `robots.txt` qua Next.js handler (`app/sitemap.js`, `app/robots.js`).
   - **Semantic HTML5**: Cấu trúc thẻ `<h1>`, `<h2>`, `<nav>`, `<main>`, `<footer>` chuẩn mực cho các bot tìm kiếm.

2. **Giao Diện xx88 Đẳng Cấp**:
   - Tông màu chủ đạo: Xanh ngọc lục bảo (`#22c55e`), Xanh mòng két (`#10b981`), nền Đen rừng sâu (`#022c22`, `#011a15`, `#020617`).
   - Hiệu ứng phát sáng Emerald Glow, Glassmorphism, chuyển động vi mô 60fps mượt mà.
   - Toàn bộ hình ảnh, biểu trưng và banner gốc từ xx88.uno đã được tải về lưu trữ cục bộ tại thư mục `public/`.

3. **Tính Năng Tương Tác Sống Động**:
   - **Mod Demo Slot Trực Tiếp**: Trình giả lập quay slot 3 hàng với thuật toán trúng thưởng, âm thanh thị giác và tính năng nạp lại baki demo.
   - **Phiếu Cược Thông Minh (Betslip Drawer)**: Bấm chọn tỷ lệ kèo bóng đá, badminton, basketball để thêm vào phiếu cược, tự động tính tiền thắng theo thời gian thực.
   - **Jackpot Ticker**: Giá trị Jackpot tăng điểm liên tục theo từng giây.
   - **Hỗ Trợ Khách Hàng 24/7 (Live Chat)**: Widget tư vấn trực tuyến với hệ thống giải đáp tự động bằng tiếng Mã Lai và tiếng Anh.
   - **Hộp Thoại Đăng Ký / Đăng Nhập (Auth Modal)**: Tab chuyển đổi mượt mà giữa "Log Masuk" và "Daftar".
   - **Điều Hướng Mobile Đáy Màn Hình (Mobile Bottom Nav)**: Thanh dock cố định tối ưu 100% cho màn hình điện thoại cảm ứng.

---

## 🧭 Cấu Trúc Các Trang Đã Xây Dựng

| Đường Dẫn (Route) | File Mã Nguồn | Mô Tả Chi Tiết |
| :--- | :--- | :--- |
| `/` | `app/page.js` | **Laman Utama**: Hero banner, Live stats bar, Kategori Permainan, VIP Cards, Phương thức thanh toán Malaysia, Khối so sánh App/Web, Bài viết SEO chuẩn hóa, Bản đồ Google Maps. |
| `/promosi` | `app/promosi/page.js` | **Promosi & Ganjaran**: Lọc danh mục (Welcome, Cashback, Reload, VIP), chi tiết Turnover và nút nhận thưởng tương tác. |
| `/pengeluaran` | `app/pengeluaran/page.js` | **Pengeluaran & Perbankan**: Hướng dẫn nạp rút 4 bước, cổng thanh toán DuitNow, FPX, TNG, hạn mức và thời gian xử lý. |
| `/muat-turun` | `app/muat-turun/page.js` | **Muat Turun App**: Tải APK Android trực tiếp, hướng dẫn cài đặt PWA cho iPhone/iPad (Safari), chứng nhận an toàn. |
| `/slot` | `app/slot/page.js` | **Lobi Slot Online**: Thanh tìm kiếm, lọc theo nhà phát triển (Pragmatic Play, PG Soft, JILI, Spribe, Habanero), xếp theo RTP, chơi thử Demo. |
| `/sukan` | `app/sukan/page.js` | **Pertaruhan Sukan**: Bảng kèo trực tiếp Ngoại Hạng Anh, Cúp C1, Cầu lông BWF, Mobile Legends MPL, bấm chọn tỷ lệ cược tự động nhảy vào Betslip. |
| `/kasino-langsung` | `app/kasino-langsung/page.js` | **Kasino Langsung (Live Casino)**: Sảnh Baccarat, Roulette, Blackjack, Game Shows với hình ảnh Dealer thực tế và số lượng người chơi trực tiếp. |
| `/permainan-slot` | `app/permainan-slot/page.js` | **Permainan Slot Pilihan**: Tiêu điểm các tựa game hot nhất và cẩm nang phân tích tỷ lệ RTP & độ biến động (Volatility). |
| `/about-us` | `app/about-us/page.js` | **Tentang Kami**: Lịch sử hình thành, sứ mệnh, giấy phép và công nghệ bảo mật của xx88. |
| `/terms-conditions` | `app/terms-conditions/page.js` | **Terma dan Syarat**: Quy định tài khoản, độ tuổi 18+, và chính sách cá cược. |
| `/privacy-policy` | `app/privacy-policy/page.js` | **Dasar Privasi**: Cam kết mã hóa SSL 256-Bit và bảo vệ quyền riêng tư người dùng. |
| `/responsible-gaming` | `app/responsible-gaming/page.js` | **Permainan Bertanggungjawab**: Công cụ tự loại trừ và hướng dẫn chơi cược có kiểm soát. |
| `/faq` | `app/faq/page.js` | **Soalan Lazim (FAQ)**: Accordion câu hỏi đáp phổ biến tích hợp Schema `FAQPage`. |
| `/sitemap.xml` | `app/sitemap.js` | **Sitemap Động**: Danh sách toàn bộ URL, tần suất cập nhật và mức độ ưu tiên SEO. |
| `/robots.txt` | `app/robots.js` | **Robots.txt Động**: Chỉ dẫn cho bot tìm kiếm (Googlebot, Bingbot). |
| `*` (404) | `app/not-found.js` | **Trang 404 Tùy Biến**: Thiết kế đồng bộ với hệ thống liên kết điều hướng nhanh. |

---

## 🚀 Hướng Dẫn Khởi Chạy Dự Án

### 1. Cài đặt dependencies (nếu cần)
```bash
npm install
```

### 2. Chạy môi trường phát triển (Development Server)
```bash
npm run dev
```
Mở trình duyệt truy cập: `http://localhost:3000`

### 3. Build kiểm tra sản phẩm hoàn chỉnh (Production Build)
```bash
npm run build
npm run start
```
