import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100 relative overflow-hidden">

      <Navbar />

      {/* AI Chatbot Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header Badge - Neo-brutalism Food Style */}
            <div className="inline-block">
              <div className="bg-orange-400 border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <span className="text-black font-black text-xl uppercase tracking-wider">GỢI Ý MÓN ĂN</span>
                  <div className="w-8 h-8 bg-yellow-400 border-4 border-black flex items-center justify-center">
                    <span className="text-lg">🍽️</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Title - Neo-brutalism Food Style */}
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
                <span className="text-orange-500" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
                  AI CHATBOT
                </span>
                <br />
                <span className="text-red-600" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
                  THÔNG MINH
                </span>
              </h1>
              <div className="flex items-center gap-4">
                <div className="w-20 h-2 bg-yellow-400 border-2 border-black"></div>
                <div className="w-12 h-12 bg-green-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="w-12 h-12 bg-red-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-2xl">🍕</span>
                </div>
              </div>
            </div>

            {/* Description - Neo-brutalism Food Style */}
            <div className="bg-yellow-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xl text-black font-bold leading-relaxed">
                Trò chuyện với AI để nhận gợi ý món ăn phù hợp với tâm trạng, sở thích và nhu cầu dinh dưỡng của bạn. AI hiểu bạn và đề xuất những món ăn hoàn hảo nhất!
              </p>
            </div>

            {/* Features List - Neo-brutalism Food Style */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { text: "Phân tích cảm xúc và sở thích ẩm thực", icon: "🧠", color: "bg-orange-400" },
                { text: "Gợi ý món ăn dựa trên thời tiết và tâm trạng", icon: "🌤️", color: "bg-red-400" },
                { text: "Tư vấn dinh dưỡng và thành phần món ăn", icon: "🥗", color: "bg-green-400" },
                { text: "Lưu lịch sử và học hỏi từ phản hồi", icon: "📚", color: "bg-yellow-400" }
              ].map((feature, index) => (
                <div key={index} className={`${feature.color} border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 group`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center">
                      <span className="text-lg">{feature.icon}</span>
                    </div>
                    <span className="text-black font-bold text-sm">{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Content - 3D Phone Mockup */}
          <div className="relative">
            <div className="relative group">
              {/* Phone Container */}
              <div className="relative w-80 h-[600px] mx-auto">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl transform rotate-y-12 group-hover:rotate-y-6 transition-transform duration-700">
                  {/* Phone Screen */}
                  <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
                    {/* Clean White Space */}
                    <div className="h-full bg-white">
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Discovery Section */}
      <section className="relative py-20 bg-green-100 border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - 3D Phone Mockup */}
            <div className="relative group">
              <div className="relative w-80 h-[600px] mx-auto">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl transform -rotate-y-12 group-hover:-rotate-y-6 transition-transform duration-700">
                  {/* Phone Screen */}
                  <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
                    {/* Clean White Space */}
                    <div className="h-full bg-white">
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* Header Badge - Neo-brutalism Food Style */}
              <div className="inline-block">
                <div className="bg-green-400 border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-2xl">🗺️</span>
                    </div>
                    <span className="text-black font-black text-xl uppercase tracking-wider">TÌM KIẾM ĐỊA ĐIỂM</span>
                    <div className="w-8 h-8 bg-yellow-400 border-4 border-black flex items-center justify-center">
                      <span className="text-lg">🔍</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Title - Neo-brutalism Food Style */}
              <div className="space-y-6">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
                  <span className="text-green-600" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
                    BẢN ĐỒ
                  </span>
                  <br />
                  <span className="text-blue-600" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
                    KHÁM PHÁ QUÁN
                  </span>
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-2 bg-orange-400 border-2 border-black"></div>
                  <div className="w-12 h-12 bg-red-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <div className="w-12 h-12 bg-yellow-400 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl">🍔</span>
                  </div>
                </div>
              </div>

              {/* Description - Neo-brutalism Food Style */}
              <div className="bg-blue-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xl text-black font-bold leading-relaxed">
                  Khám phá hàng nghìn quán ăn xung quanh vị trí của bạn. Xem đánh giá, menu, giờ mở cửa và chỉ đường nhanh chóng đến địa điểm yêu thích.
                </p>
              </div>

              {/* Features List - Neo-brutalism Food Style */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { text: "Bản đồ tương tác với hàng nghìn địa điểm ẩm thực", icon: "🗺️", color: "bg-green-400" },
                  { text: "Lọc theo loại món, giá cả, khoảng cách và đánh giá", icon: "🔍", color: "bg-blue-400" },
                  { text: "Xem ảnh thực tế và menu chi tiết của quán", icon: "📱", color: "bg-orange-400" },
                  { text: "Đặt bàn và gọi món trực tiếp từ app", icon: "📞", color: "bg-red-400" }
                ].map((feature, index) => (
                  <div key={index} className={`${feature.color} border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 group`}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center">
                        <span className="text-lg">{feature.icon}</span>
                      </div>
                      <span className="text-black font-bold text-sm">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Foodie Community Section */}
      <section className="relative py-20 bg-pink-100 border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Header Badge - Neo-brutalism Food Style */}
              <div className="inline-block">
                <div className="bg-pink-400 border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-2xl">👥</span>
                    </div>
                    <span className="text-black font-black text-xl uppercase tracking-wider">CHIA SẺ & KẾT NỐI</span>
                    <div className="w-8 h-8 bg-red-500 border-4 border-black flex items-center justify-center">
                      <span className="text-lg">❤️</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Title - Neo-brutalism Food Style */}
              <div className="space-y-6">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
                  <span className="text-pink-600" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
                    CỘNG ĐỒNG
                  </span>
                  <br />
                  <span className="text-purple-600" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
                    FOODIE
                  </span>
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-2 bg-yellow-400 border-2 border-black"></div>
                  <div className="w-12 h-12 bg-orange-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl">🍰</span>
                  </div>
                  <div className="w-12 h-12 bg-green-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl">🥗</span>
                  </div>
                </div>
              </div>

              {/* Description - Neo-brutalism Food Style */}
              <div className="bg-purple-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xl text-black font-bold leading-relaxed">
                  Tham gia cộng đồng yêu ẩm thực! Chia sẻ công thức nấu ăn, review quán mới, khám phá món ngon qua trải nghiệm của người khác.
                </p>
              </div>

              {/* Features List - Neo-brutalism Food Style */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { text: "Đăng ảnh món ăn và chia sẻ công thức của bạn", icon: "📸", color: "bg-pink-400" },
                  { text: "Follow các foodie và nhà hàng yêu thích", icon: "👥", color: "bg-purple-400" },
                  { text: "Tham gia thảo luận và nhóm quan tâm về ẩm thực", icon: "💬", color: "bg-red-400" },
                  { text: "Tích lũy điểm và huy hiệu từ hoạt động cộng đồng", icon: "🏆", color: "bg-yellow-400" }
                ].map((feature, index) => (
                  <div key={index} className={`${feature.color} border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 group`}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center">
                        <span className="text-lg">{feature.icon}</span>
                      </div>
                      <span className="text-black font-bold text-sm">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Content - 3D Phone Mockup */}
            <div className="relative group">
              <div className="relative w-80 h-[600px] mx-auto">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl transform rotate-y-12 group-hover:rotate-y-6 transition-transform duration-700">
                  {/* Phone Screen */}
                  <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
                    {/* Clean White Space */}
                    <div className="h-full bg-white">
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Challenge Section */}
      <section className="relative py-20 bg-yellow-100 border-y-8 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - 3D Phone Mockup */}
            <div className="relative group">
              <div className="relative w-80 h-[600px] mx-auto">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl transform -rotate-y-12 group-hover:-rotate-y-6 transition-transform duration-700">
                  {/* Phone Screen */}
                  <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
                    {/* Clean White Space */}
                    <div className="h-full bg-white">
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* Header Badge - Neo-brutalism Food Style */}
              <div className="inline-block">
                <div className="bg-yellow-400 border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <span className="text-black font-black text-xl uppercase tracking-wider">KHÁM PHÁ & CHINH PHỤC</span>
                    <div className="w-8 h-8 bg-red-500 border-4 border-black flex items-center justify-center">
                      <span className="text-lg">🎮</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Title - Neo-brutalism Food Style */}
              <div className="space-y-6">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
                  <span className="text-yellow-600" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}>
                    GAME THỬ THÁCH
                  </span>
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-2 bg-red-400 border-2 border-black"></div>
                  <div className="w-12 h-12 bg-green-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="text-2xl">🍔</span>
                  </div>
                </div>
              </div>

              {/* Description - Neo-brutalism Food Style */}
              <div className="bg-orange-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xl text-black font-bold leading-relaxed">
                  Hoàn thành các thử thách vui nhộn để khám phá món ăn mới, mở khóa phần thưởng độc quyền và trở thành Master Chef trong cộng đồng!
                </p>
              </div>

              {/* Features List - Neo-brutalism Food Style */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { text: "Nhiệm vụ hàng ngày với phần thưởng hấp dẫn", icon: "📅", color: "bg-yellow-400" },
                  { text: "Thử thách khám phá món ăn địa phương", icon: "🌍", color: "bg-orange-400" },
                  { text: "Đua top với bạn bè và foodie khác", icon: "🏆", color: "bg-red-400" },
                  { text: "Mở khóa huy hiệu, voucher giảm giá và ưu đãi đặc biệt", icon: "🎁", color: "bg-green-400" }
                ].map((feature, index) => (
                  <div key={index} className={`${feature.color} border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 group`}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center">
                        <span className="text-lg">{feature.icon}</span>
                      </div>
                      <span className="text-black font-bold text-sm">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>

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
            Tải xuống ngay và trải nghiệm hoàn toàn mới. Hiện có sẵn trên Android, iOS sắp ra mắt.
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

      <Footer />
    </div>
  );
}

export default Features;