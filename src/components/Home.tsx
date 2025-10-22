import { Download, Check, Mail, Phone, MapPin, X, Utensils, ChefHat, Coffee, Pizza, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  const [navHeight, setNavHeight] = useState(80);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const el = document.getElementById('app-navbar');
    if (el) setNavHeight(el.offsetHeight);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    // Ẩn thông báo sau 4 giây
    setTimeout(() => setShowThankYou(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar onHeightChange={(h) => setNavHeight(h)} />

      {/* Thank You Notification */}
      {showThankYou && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-pulse">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 border-4 border-black px-10 py-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 bg-yellow-400 border-2 border-black w-6 h-6 rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 bg-pink-400 border-2 border-black w-4 h-4 rotate-12"></div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white border-4 border-black w-12 h-12 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-green-600 font-black text-2xl">✓</span>
              </div>
              <div>
                <p className="text-white font-black text-2xl mb-1" style={{ textShadow: '2px 2px 0px rgba(0,0,0,1)' }}>
                  CẢM ƠN BẠN!
                </p>
                <p className="text-white font-bold text-base" style={{ textShadow: '1px 1px 0px rgba(0,0,0,1)' }}>
                  Tin nhắn đã được gửi thành công 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20`} style={{ paddingTop: navHeight + 40 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-6">
              KHÁM PHÁ
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500" style={{ WebkitTextStroke: '2px black' }}>
                ẨM THỰC
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold mb-8 max-w-xl">
              Trải nghiệm ẩm thực độc đáo qua màu sắc và AI. Khám phá quán ăn, chia sẻ công thức và kết nối với cộng đồng yêu ẩm thực.
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
            <div className="bg-gradient-to-br from-orange-400 to-red-500 border-4 border-black p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <div className="bg-white border-4 border-black p-4">
                <div className="grid grid-cols-2 gap-4 h-96">
                  <div className="bg-pink-200 border-2 border-black p-3 flex items-center justify-center">
                    <Pizza className="w-16 h-16 text-red-600" strokeWidth={2} />
                  </div>
                  <div className="bg-yellow-200 border-2 border-black p-3 flex items-center justify-center">
                    <Coffee className="w-16 h-16 text-amber-700" strokeWidth={2} />
                  </div>
                  <div className="bg-green-200 border-2 border-black p-3 flex items-center justify-center">
                    <Utensils className="w-16 h-16 text-green-700" strokeWidth={2} />
                  </div>
                  <div className="bg-purple-200 border-2 border-black p-3 flex items-center justify-center">
                    <ChefHat className="w-16 h-16 text-purple-700" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-yellow-400 border-4 border-black px-6 py-3 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-black text-2xl">NGON!</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-pink-500 border-4 border-black px-4 py-2 -rotate-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-black text-white text-sm">AI POWERED</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-lime-300 border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-black text-center mb-16">
            TẠI SAO CHỌN MUMII?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-pink-500 border-4 border-black w-16 h-16 flex items-center justify-center mb-6">
                <Utensils className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black mb-4">AI MÀU SẮC</h3>
              <p className="text-lg font-bold">
                Trắc nghiệm màu sắc thông minh để tìm món ăn phù hợp với tâm trạng và sở thích của bạn.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-cyan-400 border-4 border-black w-16 h-16 flex items-center justify-center mb-6">
                <ChefHat className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black mb-4">CỘNG ĐỒNG ĐẦU BẾP</h3>
              <p className="text-lg font-bold">
                Chia sẻ công thức, video nấu ăn và kết nối với cộng đồng yêu ẩm thực khắp nơi.
              </p>
            </div>

            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="bg-yellow-400 border-4 border-black w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-black mb-4">GỢI Ý CÁ NHÂN</h3>
              <p className="text-lg font-bold">
                AI học hỏi sở thích và đưa ra gợi ý quán ăn, món ăn phù hợp với ngân sách của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-pink-500 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-6xl font-black mb-2">50K+</p>
            <p className="text-2xl font-bold">Công thức</p>
          </div>
          <div className="bg-cyan-400 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-6xl font-black mb-2">4.8★</p>
            <p className="text-2xl font-bold">Đánh giá</p>
          </div>
          <div className="bg-yellow-400 border-4 border-black p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-6xl font-black mb-2">10K+</p>
            <p className="text-2xl font-bold">Quán ăn</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 border-y-4 border-black" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FFF 0 20px, #FFEDD5 20px 40px)' }}>
        <h2 className="text-5xl sm:text-6xl font-black text-center mb-16" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
          BẢNG GIÁ CÁC GÓI ĐĂNG KÍ
        </h2>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {/* Free Plan */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-lime-300 border-4 border-black rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="bg-white border-4 border-black p-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <div className="border-4 border-black p-8">
                <div className="bg-lime-300 border-4 border-black px-5 py-2 inline-block -rotate-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-xl font-black">Gói Free</p>
                </div>
                <div className="mb-8">
                  <p className="text-6xl font-black leading-none" style={{ WebkitTextStroke: '2px black' }}>0đ/tháng</p>
                </div>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="font-bold">Trắc nghiệm AI màu sắc (5 lần/ngày)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="font-bold">Gợi ý quán ăn theo giá (3 lần/ngày)</span>
                  </li>
                  <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="font-bold">Đăng bài chia sẻ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="font-bold">Xem bài viết cộng đồng</span>
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
                    <span className="font-bold">Tham gia Challenge đặc biệt</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-500">
                    <X className="w-6 h-6 flex-shrink-0 mt-1 text-red-600" strokeWidth={3} />
                    <span className="font-bold">Ưu đãi đối tác / Sự kiện ẩm thực</span>
                  </li>
                </ul>
                <button className="w-full px-8 py-5 bg-white text-black text-xl font-black border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:translate-x-1 transition-all">
                  TRẢI NGHIỆM HOÀN TOÀN MIỄN PHÍ
                </button>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 bg-yellow-400 border-4 border-black px-6 py-3 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-black">PHỔ BIẾN NHẤT</p>
            </div>
            <div className="bg-pink-500 border-4 border-black p-2 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
              <div className="border-4 border-black p-8 text-white">
                <div className="bg-black text-white border-4 border-black px-5 py-2 inline-block rotate-1 mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                  <p className="text-xl font-black">Gói Premium</p>
                </div>
                <div className="mb-8">
                  <p className="text-6xl font-black leading-none" style={{ WebkitTextStroke: '2px black' }}>36.000đ/tháng</p>
                </div>
                <ul className="space-y-4 mb-10">
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
                    <span className="font-black">Đăng bài chia sẻ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="font-black">Xem bài viết cộng đồng</span>
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
                    <span className="font-black">Tham gia Challenge đặc biệt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="font-black">Ưu đãi đối tác / Sự kiện ẩm thực</span>
                  </li>
                </ul>
                <button className="w-full px-8 py-5 bg-black text-white text-xl font-black border-4 border-black shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:translate-x-1 transition-all">
                  KHÁM PHÁ NGAY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-24 border-y-4 border-black" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #FFF 0 24px, #E0F2FE 24px 48px)' }}>
        <div className="absolute -top-6 left-6 rotate-3 bg-yellow-400 border-4 border-black px-6 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-black">FAQ</span>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-black text-center mb-16" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
            CÂU HỎI THƯỜNG GẶP
          </h2>

          <div className="space-y-6">
            {/* Item 1 */}
            <details className="group bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <summary className="list-none cursor-pointer select-none flex items-center justify-between px-6 py-5">
                <span className="text-xl font-black">Ứng dụng MUMII làm được gì?</span>
                <span className="text-xl font-black border-4 border-black bg-yellow-400 px-3 py-1 group-open:rotate-90 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t-4 border-black bg-[#FFFBEB]">
                <p className="font-bold mb-4">
                  MUMII là ứng dụng ẩm thực thông minh giúp bạn khám phá món ăn theo cảm xúc, màu sắc và ngân sách.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-400 border-2 border-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black font-black text-sm">1</span>
                    </div>
                    <p className="font-bold">Làm trắc nghiệm AI Màu Sắc để tìm món hợp mood mỗi ngày</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-400 border-2 border-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black font-black text-sm">2</span>
                    </div>
                    <p className="font-bold">Nhận gợi ý quán ăn thông minh theo vị, giá và tâm trạng</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-400 border-2 border-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black font-black text-sm">3</span>
                    </div>
                    <p className="font-bold">Chia sẻ trải nghiệm & công thức nấu ăn cùng cộng đồng</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-400 border-2 border-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black font-black text-sm">4</span>
                    </div>
                    <p className="font-bold">Khám phá bản đồ ăn uống (MUMII Map) – gợi ý địa điểm và chỉ đường nhanh chóng</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-400 border-2 border-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black font-black text-sm">5</span>
                    </div>
                    <p className="font-bold">Tham gia challenge ẩm thực vui nhộn như "Ăn theo màu", "Ăn theo giá", "Ăn theo vị"</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-400 border-2 border-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-black font-black text-sm">6</span>
                    </div>
                    <p className="font-bold">Lưu lại quán yêu thích và tạo bộ sưu tập món ăn riêng của bạn</p>
                  </div>
                </div>
              </div>
            </details>

            {/* Item 2 */}
            <details className="group bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <summary className="list-none cursor-pointer select-none flex items-center justify-between px-6 py-5">
                <span className="text-xl font-black">Challenge trong MUMII là gì vậy?</span>
                <span className="text-xl font-black border-4 border-black bg-purple-400 px-3 py-1 group-open:rotate-90 transition-transform">+</span>
              </summary>
              <div className="px-4 pb-4 pt-2 border-t-4 border-black bg-[#F3E8FF]">
                <div className="space-y-3">
                  {/* Simple Description */}
                  <div className="p-3">
                    <h3 className="text-lg font-black mb-2 text-black">Challenge Ẩm Thực</h3>
                    <p className="font-bold mb-3 text-black text-sm">
                      Trò chơi ẩm thực kết hợp cảm xúc và sáng tạo – nơi bạn được thử những thử thách như "Ăn theo màu", "Ăn theo vị", "Ăn theo giá" hay "Ăn theo mood hôm nay".
                    </p>
                    <ul className="space-y-1.5 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        <span className="font-bold text-black">Khám phá gu vị mới qua các thử thách thú vị</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        <span className="font-bold text-black">Chia sẻ trải nghiệm cùng cộng đồng</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                        <span className="font-bold text-black">Nhận huy hiệu thú vị từ MUMII</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            {/* Item 3 */}
            <details className="group bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <summary className="list-none cursor-pointer select-none flex items-center justify-between px-6 py-5">
                <span className="text-xl font-black">Tôi có thể hủy gia hạn bất cứ lúc nào không?</span>
                <span className="text-xl font-black border-4 border-black bg-lime-300 px-3 py-1 group-open:rotate-90 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t-4 border-black bg-[#ECFCCB]">
                <p className="font-bold">
                  Có. Bạn có thể hủy bất cứ lúc nào trong phần tài khoản. Quyền lợi Premium vẫn còn đến hết chu kỳ đã thanh toán.
                </p>
              </div>
            </details>

            {/* Item 4 */}
            <details className="group bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <summary className="list-none cursor-pointer select-none flex items-center justify-between px-6 py-5">
                <span className="text-xl font-black">Dữ liệu của tôi có an toàn không?</span>
                <span className="text-xl font-black border-4 border-black bg-cyan-400 px-3 py-1 group-open:rotate-90 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t-4 border-black bg-[#E0F2FE]">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500 border-2 border-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-black text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-black text-lg mb-1">Mã hóa toàn diện</p>
                      <p className="font-bold">Tất cả dữ liệu được mã hóa trong quá trình truyền và lưu trữ</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500 border-2 border-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-black text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-black text-lg mb-1">Tuân thủ chuẩn quốc tế</p>
                      <p className="font-bold">ISO 27001 và GDPR - đảm bảo bảo mật cao nhất</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500 border-2 border-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-black text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-black text-lg mb-1">Quyền kiểm soát hoàn toàn</p>
                      <p className="font-bold">Bạn có thể truy cập, chỉnh sửa hoặc xóa dữ liệu bất kỳ lúc nào</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500 border-2 border-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-black text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-black text-lg mb-1">Kiểm tra bảo mật định kỳ</p>
                      <p className="font-bold">Hệ thống được kiểm tra liên tục để đảm bảo an toàn tuyệt đối</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </details>

            {/* Item 5 */}
            <details className="group bg-white border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <summary className="list-none cursor-pointer select-none flex items-center justify-between px-6 py-5">
                <span className="text-xl font-black">Ứng dụng có hỗ trợ iOS và Android không?</span>
                <span className="text-xl font-black border-4 border-black bg-yellow-400 px-3 py-1 group-open:rotate-90 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 pt-2 border-t-4 border-black bg-[#FFFBEB]">
                <p className="font-bold">
                  Có. MUMII được tối ưu cho cả iOS và Android, hoạt động mượt mà trên nhiều thiết bị.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-cyan-400 border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-black text-center mb-16">
            LIÊN HỆ VỚI CHÚNG TÔI
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
                    <p className="text-lg font-bold">contact.mumii@gmail.com</p>
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
                    <p className="text-lg font-bold">+84 901 544 713</p>
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
                    <p className="text-lg font-bold">Lô E2a-7, Đường D1, Khu Công nghệ cao,</p>
                    <p className="text-lg font-bold">Phường Tăng Nhơn Phú, TP. Hồ Chí Minh, Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <form 
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-xl font-black mb-2">TÊN CỦA BẠN</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="Nhập tên của bạn"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xl font-black mb-2">EMAIL</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xl font-black mb-2">TIN NHẮN</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 resize-none"
                    placeholder="Nhập tin nhắn của bạn..."
                    required
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
          <p className="text-2xl font-bold mb-8 text-white whitespace-nowrap">
            Tải xuống ngay và tham gia cuộc cách mạng. Hiện có sẵn trên Android, iOS sắp ra mắt.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* App Store Button */}
            <button className="relative flex items-center gap-4 px-8 py-4 bg-gray-400 text-gray-600 text-lg font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-not-allowed opacity-75">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold">Download on the</div>
                <div className="text-lg font-black">App Store</div>
              </div>
              {/* Coming Soon Badge */}
              <div className="absolute -top-2 -right-2 bg-yellow-400 border-2 border-black px-2 py-1 rotate-12 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-xs font-black text-black">COMING SOON</span>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center gap-4 px-8 py-4 bg-white text-black text-lg font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold">GET IT ON</div>
                <div className="text-lg font-black">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 border-y-4 border-black py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 text-white" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
              KẾT NỐI VỚI CHÚNG TÔI
            </h2>
            <p className="text-2xl font-bold text-white">
              Theo dõi để cập nhật tin tức mới nhất về MUMII
            </p>
              </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Facebook Card */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
            </div>
            <div>
                  <h3 className="text-3xl font-black">FACEBOOK</h3>
                  <p className="text-lg font-bold text-blue-600">@app.mumii</p>
                </div>
              </div>
              <p className="text-lg font-bold mb-6">
              Luôn đồng hành cùng MUMII trên Facebook để không bỏ lỡ tin mới, câu chuyện hay và trải nghiệm ẩm thực thú vị mỗi ngày.
              </p>
              <a 
                href="https://www.facebook.com/app.mumii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-6 py-3 bg-blue-600 text-white font-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                THEO DÕI TRÊN FACEBOOK
              </a>
            </div>

            {/* Threads Card */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white border-4 border-black w-16 h-16 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <img 
                    src="/images/logo_threads.jpg" 
                    alt="Threads Logo" 
                    className="w-10 h-10 object-contain" 
                  />
            </div>
            <div>
                  <h3 className="text-3xl font-black">THREADS</h3>
                  <p className="text-lg font-bold text-gray-800">@formumii_corp</p>
                </div>
            </div>
              <p className="text-lg font-bold mb-6">
                Tham gia cùng MUMII trên Threads để chia sẻ 
                những khoảnh khắc ẩm thực đầy thú vị và kết nối với cộng đồng.
              </p>
              <a 
                href="https://www.threads.com/@formumii_corp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-6 py-3 bg-black text-white font-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <img 
                  src="/images/logo_threads.jpg" 
                  alt="Threads" 
                  className="w-6 h-6 object-contain" 
                />
                THEO DÕI TRÊN THREADS
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 bg-yellow-400 border-4 border-black px-6 py-3 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-black text-black">SOCIAL</p>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-pink-500 border-4 border-black px-4 py-2 -rotate-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-black text-white text-sm">CONNECT</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
