import { Smartphone, Zap, Shield, Star, Download, Menu, X, Check, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Navigation */}
      <nav className="border-b-4 border-black bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Smartphone className="w-8 h-8" strokeWidth={3} />
              <span className="text-2xl font-black">TÊN ỨNG DỤNG</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-lg font-bold hover:underline decoration-4">Tính năng</a>
              <a href="#pricing" className="text-lg font-bold hover:underline decoration-4">Bảng giá</a>
              <a href="#contact" className="text-lg font-bold hover:underline decoration-4">Liên hệ</a>
              <button className="px-6 py-3 bg-black text-white font-bold border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-transform">
                BẮT ĐẦU NGAY
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border-4 border-black bg-white hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-4 border-black bg-yellow-400 px-4 py-6 space-y-4">
            <a href="#features" className="block text-lg font-bold hover:underline decoration-4">Tính năng</a>
            <a href="#pricing" className="block text-lg font-bold hover:underline decoration-4">Bảng giá</a>
            <a href="#contact" className="block text-lg font-bold hover:underline decoration-4">Liên hệ</a>
            <button className="w-full px-6 py-3 bg-black text-white font-bold border-4 border-black">
              BẮT ĐẦU NGAY
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-6">
              ỨNG DỤNG
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500" style={{ WebkitTextStroke: '2px black' }}>
                ĐỈNH CAO
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold mb-8 max-w-xl">
              Trải nghiệm di động mạnh mẽ nhất phá vỡ mọi giới hạn. Nhanh chóng, bảo mật và hoàn toàn vượt trội.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-pink-500 text-white text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2">
                <Download className="w-6 h-6" />
                TẢI NGAY
              </button>
              <button className="px-8 py-4 bg-white text-black text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
                XEM DEMO
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-cyan-400 border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-white border-4 border-black p-4">
                <Smartphone className="w-full h-96" strokeWidth={2} />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-yellow-400 border-4 border-black px-6 py-3 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-black text-2xl">MỚI!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-lime-300 border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-black text-center mb-16">
            TẠI SAO CHỌN CHÚNG TÔI?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-pink-500 border-4 border-black w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black mb-4">CỰC KỲ NHANH</h3>
              <p className="text-lg font-bold">
                Trải nghiệm tốc độ vượt trội bỏ xa đối thủ. Được tối ưu hóa cho hiệu suất tốt nhất.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-cyan-400 border-4 border-black w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black mb-4">SIÊU BẢO MẬT</h3>
              <p className="text-lg font-bold">
                Mã hóa cấp ngân hàng giữ an toàn dữ liệu của bạn. Quyền riêng tư được đảm bảo tuyệt đối.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-yellow-400 border-4 border-black w-16 h-16 flex items-center justify-center mb-6">
                <Star className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black mb-4">ĐÁNH GIÁ 5 SAO</h3>
              <p className="text-lg font-bold">
                Tham gia cùng hàng triệu người dùng hài lòng. Được các chuyên gia đánh giá cao nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-pink-500 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-6xl font-black mb-2">10 TRIỆU+</p>
            <p className="text-2xl font-bold">Lượt tải</p>
          </div>
          <div className="bg-cyan-400 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-6xl font-black mb-2">4.9★</p>
            <p className="text-2xl font-bold">Đánh giá</p>
          </div>
          <div className="bg-yellow-400 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-6xl font-black mb-2">150+</p>
            <p className="text-2xl font-bold">Quốc gia</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl sm:text-6xl font-black text-center mb-16">
          BẢNG GIÁ
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <div className="bg-lime-300 border-4 border-black px-4 py-2 inline-block mb-6">
              <p className="text-xl font-black">Free</p>
            </div>
            <div className="mb-6">
              <p className="text-5xl font-black mb-2">0đ/tháng</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-bold">Trắc nghiệm AI màu sắc (5 lần/ngày)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-bold">Gợi ý quán ăn theo giá (3 lần/ngày)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <X className="w-6 h-6 flex-shrink-0 mt-1 text-red-600" strokeWidth={3} />
                <span className="font-bold">Đăng bài premium (công thức + video)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-bold">Xem bài viết cộng đồng (10 bài/ngày)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <X className="w-6 h-6 flex-shrink-0 mt-1 text-red-600" strokeWidth={3} />
                <span className="font-bold">Tìm kiếm nâng cao (AI-powered)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-bold">Lưu quán ăn yêu thích (tối đa 5 quán)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <X className="w-6 h-6 flex-shrink-0 mt-1 text-red-600" strokeWidth={3} />
                <span className="font-bold">Premium Food Planner</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500">
                <X className="w-6 h-6 flex-shrink-0 mt-1 text-red-600" strokeWidth={3} />
                <span className="font-bold">Đăng công thức chi tiết</span>
              </li>
            </ul>
            <button className="w-full px-6 py-4 bg-white text-black text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
              BẮT ĐẦU
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-pink-500 border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all relative">
            <div className="absolute -top-4 -right-4 bg-yellow-400 border-4 border-black px-4 py-2 rotate-12">
              <p className="font-black">PHỔ BIẾN NHẤT</p>
            </div>
            <div className="bg-black text-white border-4 border-black px-4 py-2 inline-block mb-6">
              <p className="text-xl font-black">Premium</p>
            </div>
            <div className="mb-6">
              <p className="text-5xl font-black mb-2">5.000đ/tháng</p>
            </div>
            <ul className="space-y-4 mb-8 text-white">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-black">Trắc nghiệm AI màu sắc không giới hạn</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-black">Gợi ý quán ăn theo giá không giới hạn</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-black">Đăng bài premium (công thức + video)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-black">Xem bài viết cộng đồng không giới hạn</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-black">Tìm kiếm nâng cao (AI-powered)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-black">Lưu quán ăn yêu thích không giới hạn</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-black">Premium Food Planner</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                <span className="font-black">Đăng công thức chi tiết</span>
              </li>
            </ul>
            <button className="w-full px-6 py-4 bg-black text-white text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
              ĐĂNG KÝ NGAY
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-cyan-400 border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-black text-center mb-16">
            LIÊN HỆ CHÚNG TÔI
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-500 border-4 border-black p-3">
                    <Mail className="w-6 h-6" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">EMAIL</h3>
                    <p className="text-lg font-bold">support@appname.com</p>
                    <p className="text-lg font-bold">business@appname.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 border-4 border-black p-3">
                    <Phone className="w-6 h-6" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">ĐIỆN THOẠI</h3>
                    <p className="text-lg font-bold">+84 123 456 789</p>
                    <p className="text-lg font-bold">Thứ 2 - Thứ 6, 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4">
                  <div className="bg-lime-300 border-4 border-black p-3">
                    <MapPin className="w-6 h-6" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">ĐỊA CHỈ</h3>
                    <p className="text-lg font-bold">123 Đường ABC, Quận 1</p>
                    <p className="text-lg font-bold">TP. Hồ Chí Minh, Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <form className="space-y-6">
                <div>
                  <label className="block text-xl font-black mb-2">TÊN CỦA BẠN</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="Nhập tên của bạn"
                  />
                </div>

                <div>
                  <label className="block text-xl font-black mb-2">EMAIL</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xl font-black mb-2">TIN NHẮN</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 resize-none"
                    placeholder="Nhập tin nhắn của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-pink-500 text-white text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  GỬI TIN NHẮN
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-400 border-y-4 border-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 text-white" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
            SẴN SÀNG BẮT ĐẦU?
          </h2>
          <p className="text-2xl font-bold mb-8 text-white">
            Tải xuống ngay và tham gia cuộc cách mạng. Có sẵn trên iOS và Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-black text-white text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
              APP STORE
            </button>
            <button className="px-10 py-5 bg-white text-black text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
              GOOGLE PLAY
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-6 h-6" strokeWidth={3} />
                <span className="text-xl font-black">TÊN ỨNG DỤNG</span>
              </div>
              <p className="font-bold">Định nghĩa lại trải nghiệm di động.</p>
            </div>
            <div>
              <h4 className="text-lg font-black mb-4">SẢN PHẨM</h4>
              <ul className="space-y-2 font-bold">
                <li><a href="#" className="hover:underline">Tính năng</a></li>
                <li><a href="#" className="hover:underline">Bảng giá</a></li>
                <li><a href="#" className="hover:underline">Tải xuống</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black mb-4">CÔNG TY</h4>
              <ul className="space-y-2 font-bold">
                <li><a href="#" className="hover:underline">Về chúng tôi</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Tuyển dụng</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black mb-4">HỖ TRỢ</h4>
              <ul className="space-y-2 font-bold">
                <li><a href="#" className="hover:underline">Trung tâm trợ giúp</a></li>
                <li><a href="#" className="hover:underline">Liên hệ</a></li>
                <li><a href="#" className="hover:underline">Bảo mật</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-2 border-white pt-8 text-center font-bold">
            <p>© 2025 TÊN ỨNG DỤNG. Bảo lưu mọi quyền.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
