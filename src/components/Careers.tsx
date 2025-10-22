import { useState } from 'react';
import { Users, Heart, Target, Mail, MapPin, Phone, Send, Bell, Lightbulb } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function Careers() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [showNewsletterThankYou, setShowNewsletterThankYou] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    const form = e.target as HTMLFormElement;
    form.reset();
    setTimeout(() => setShowThankYou(false), 4000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowNewsletterThankYou(true);
    const form = e.target as HTMLFormElement;
    form.reset();
    setTimeout(() => setShowNewsletterThankYou(false), 4000);
  };

  const values = [
    {
      icon: <Heart className="w-8 h-8" strokeWidth={3} />,
      title: 'ĐAM MÊ',
      description: 'Chúng tôi yêu thích ẩm thực và công nghệ, luôn tìm cách kết hợp cả hai để tạo ra trải nghiệm tuyệt vời.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" strokeWidth={3} />,
      title: 'SÁNG TẠO',
      description: 'Khuyến khích tư duy đổi mới và sẵn sàng thử nghiệm những ý tưởng táo bạo.'
    },
    {
      icon: <Users className="w-8 h-8" strokeWidth={3} />,
      title: 'CỘNG ĐỒNG',
      description: 'Xây dựng môi trường làm việc thân thiện, hỗ trợ lẫn nhau và cùng phát triển.'
    },
    {
      icon: <Target className="w-8 h-8" strokeWidth={3} />,
      title: 'MỤC TIÊU',
      description: 'Luôn hướng tới mục tiêu chung: tạo ra ứng dụng ẩm thực tốt nhất cho người Việt.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* Thank You Notification for CV Submission */}
      {showThankYou && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-pulse">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 border-4 border-black px-10 py-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-2 -right-2 bg-yellow-400 border-2 border-black w-6 h-6 rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 bg-pink-400 border-2 border-black w-4 h-4 rotate-12"></div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white border-4 border-black w-12 h-12 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-green-600 font-black text-2xl">✓</span>
              </div>
              <div>
                <p className="text-white font-black text-2xl mb-1" style={{ textShadow: '2px 2px 0px rgba(0,0,0,1)' }}>
                  GỬI CV THÀNH CÔNG!
                </p>
                <p className="text-white font-bold text-base" style={{ textShadow: '1px 1px 0px rgba(0,0,0,1)' }}>
                  Chúng tôi sẽ liên hệ khi có vị trí phù hợp 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Notification for Newsletter */}
      {showNewsletterThankYou && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-pulse">
          <div className="bg-gradient-to-r from-blue-400 to-cyan-500 border-4 border-black px-10 py-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-2 -right-2 bg-yellow-400 border-2 border-black w-6 h-6 rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 bg-pink-400 border-2 border-black w-4 h-4 rotate-12"></div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white border-4 border-black w-12 h-12 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-blue-600 font-black text-2xl">✓</span>
              </div>
              <div>
                <p className="text-white font-black text-2xl mb-1" style={{ textShadow: '2px 2px 0px rgba(0,0,0,1)' }}>
                  ĐĂNG KÝ THÀNH CÔNG!
                </p>
                <p className="text-white font-bold text-base" style={{ textShadow: '1px 1px 0px rgba(0,0,0,1)' }}>
                  Bạn sẽ nhận thông báo về cơ hội tuyển dụng mới 📧
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ paddingTop: 120 }}>
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 border-4 border-black px-6 py-3 rotate-3 mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="font-black text-2xl">TUYỂN DỤNG</p>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-none mb-6">
            GIA NHẬP
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500" style={{ WebkitTextStroke: '2px black' }}>
              MUMII TEAM
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold mb-8 max-w-3xl mx-auto">
            Cùng chúng tôi xây dựng tương lai của ẩm thực Việt Nam. Tìm kiếm những tài năng sáng tạo, đam mê công nghệ và yêu thích ẩm thực.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-4 gap-6 mb-20">
          <div className="bg-pink-500 border-4 border-black p-6 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-4xl font-black mb-2">6</p>
            <p className="text-lg font-bold">Thành viên</p>
          </div>
          <div className="bg-gray-300 border-4 border-black p-6 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-4xl font-black mb-2 text-gray-600">0</p>
            <p className="text-lg font-bold text-gray-600">Vị trí mở</p>
          </div>
          <div className="bg-yellow-400 border-4 border-black p-6 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-4xl font-black mb-2">100%</p>
            <p className="text-lg font-bold">Remote friendly</p>
          </div>
          <div className="bg-lime-300 border-4 border-black p-6 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-4xl font-black mb-2">2025</p>
            <p className="text-lg font-bold">Đang phát triển</p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-lime-300 border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-black text-center mb-16">
            GIÁ TRỊ CỦA CHÚNG TÔI
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <div className="bg-pink-500 border-4 border-black w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 text-center">{value.title}</h3>
                <p className="text-lg font-bold text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl sm:text-6xl font-black text-center mb-16">
          VỊ TRÍ TUYỂN DỤNG
        </h2>

        {/* No Available Positions Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-4 border-black p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] text-center relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 border-4 border-black px-6 py-3 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-black text-black">COMING SOON</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-pink-500 border-4 border-black px-4 py-2 -rotate-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="font-black text-white text-sm">STAY TUNED</p>
            </div>

            {/* Main Content */}
            <div className="mb-8">
              <div className="bg-gray-200 border-4 border-black w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Users className="w-12 h-12 text-gray-600" strokeWidth={2} />
              </div>
              <h3 className="text-4xl font-black mb-4 text-gray-600">
                HIỆN CHƯA CÓ VỊ TRÍ MỞ
              </h3>
              <p className="text-xl font-bold text-gray-700 mb-6 max-w-2xl mx-auto">
                Chúng tôi đang trong giai đoạn phát triển và chưa có vị trí tuyển dụng nào khả dụng tại thời điểm này.
              </p>
            </div>

            {/* Info Box */}
            <div className="bg-lime-300 border-4 border-black p-6 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="bg-yellow-400 border-4 border-black w-12 h-12 flex items-center justify-center">
                  <Bell className="w-6 h-6" strokeWidth={3} />
                </div>
                <h4 className="text-2xl font-black">CẬP NHẬT SỚM NHẤT</h4>
              </div>
              <p className="text-lg font-bold">
                Chúng tôi sẽ thông báo ngay khi có vị trí mới. Hãy theo dõi trang web và mạng xã hội của chúng tôi!
              </p>
            </div>

            {/* Contact for Future Opportunities */}
            <div className="bg-cyan-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-2xl font-black mb-4 flex items-center justify-center gap-3">
                <Mail className="w-6 h-6" strokeWidth={3} />
                QUAN TÂM ĐẾN CƠ HỘI TƯƠNG LAI?
              </h4>
              <p className="text-lg font-bold mb-4">
                Gửi CV của bạn cho chúng tôi để được ưu tiên khi có vị trí phù hợp
              </p>
              <button
                onClick={() => setSelectedPosition('future-opportunity')}
                className="px-8 py-4 bg-pink-500 text-white text-xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                GỬI CV NGAY
              </button>
            </div>
          </div>
        </div>

        {/* Future Opportunity Form */}
        {selectedPosition === 'future-opportunity' && (
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black mb-6 text-center">GỬI CV CHO CƠ HỘI TƯƠNG LAI</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xl font-black mb-2">HỌ VÀ TÊN *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                      placeholder="Nhập họ và tên"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xl font-black mb-2">EMAIL *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xl font-black mb-2">VỊ TRÍ QUAN TÂM</label>
                  <select className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400">
                    <option value="">Chọn vị trí quan tâm</option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="design">UI/UX Designer</option>
                    <option value="marketing">Marketing Specialist</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xl font-black mb-2">CV/Portfolio (Link) *</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                    placeholder="https://drive.google.com/..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-xl font-black mb-2">GIỚI THIỆU BẢN THÂN</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 resize-none"
                    placeholder="Giới thiệu ngắn gọn về bản thân và kinh nghiệm..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-pink-500 text-white text-xl font-black border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  <Send className="w-6 h-6" strokeWidth={3} />
                  GỬI CV CHO TƯƠNG LAI
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Stay Connected Section */}
      <section className="bg-cyan-400 border-y-4 border-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-black mb-8">
            GIỮ LIÊN LẠC
          </h2>
          <p className="text-2xl font-bold mb-12">
            Theo dõi chúng tôi để không bỏ lỡ cơ hội tuyển dụng trong tương lai
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Media */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black mb-6">MẠNG XÃ HỘI</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.facebook.com/app.mumii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 px-6 py-4 bg-blue-600 text-white font-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  THEO DÕI FACEBOOK
                </a>
                <a 
                  href="https://www.threads.com/@formumii_corp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 px-6 py-4 bg-black text-white font-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <img 
                    src="/images/logo_threads.jpg" 
                    alt="Threads" 
                    className="w-6 h-6 object-contain" 
                  />
                  THEO DÕI THREADS
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-3xl font-black mb-6">NHẬN THÔNG BÁO</h3>
              <p className="text-lg font-bold mb-6">
                Đăng ký email để nhận thông báo về cơ hội tuyển dụng mới
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  className="w-full px-4 py-3 border-4 border-black font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400"
                  placeholder="email@example.com"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-pink-500 text-white text-lg font-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  ĐĂNG KÝ NGAY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl sm:text-6xl font-black text-center mb-16">
            LIÊN HỆ VỚI CHÚNG TÔI
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
              <div className="bg-pink-500 border-4 border-black w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black mb-2">EMAIL</h3>
              <p className="text-lg font-bold">contact.mumii@gmail.com</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
              <div className="bg-yellow-400 border-4 border-black w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black mb-2">ĐIỆN THOẠI</h3>
              <p className="text-lg font-bold">+84 901 544 713</p>
              <p className="text-lg font-bold">Thứ 2 - Thứ 6, 9:00 - 18:00</p>
            </div>

            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
              <div className="bg-lime-300 border-4 border-black w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-black mb-2">ĐỊA CHỈ</h3>
              <p className="text-lg font-bold">Lô E2a-7, Đường D1, Khu Công nghệ cao, Phường Tăng Nhơn Phú, TP. Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Careers;